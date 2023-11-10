import React, { useState, useContext } from 'react'
import { View, Text, TextInput, Alert } from 'react-native'
import uuid from 'react-native-uuid'
import { EListType, ICategory } from '../interfaces/interfacesIndex'
import { banner, text } from '../theme/theme'
import ErrorMessage from '../components/ErrorMessage'
import { useProvider } from '../hooks/useProvider'
import { BudgetContext } from '../context/BudgetContext'
import { MainLayout } from '../layouts/MainLayout'
import WrapperList from '../components/Records/WrapperList'
import AP_Modal from '../components/AP_Modal'
import ButtonsGroup from '../components/ButtonsGroup'
import AP_input from '../components/AP_input'
import { useForm } from '../hooks/useForm'

const AddCategoryScreen = (): JSX.Element => {
    const { state: { categories } } = useContext(BudgetContext)
    const { saveCategory } = useProvider()
    const { categoriaNombre, onChange } = useForm({
        categoriaNombre: ''
    })
    const [catNombre, setCatNombre] = useState<string>('')

    const [name, setName] = useState<string>('')
    const [emptyError, setEmptyError] = useState<boolean>(false)
    const [errorMsg, setErrorMsg] = useState<string>('')
    const [modalVisible, setModalVisible] = useState<boolean>(false)

    const onSaveCategory = () => {
        const existName = categories.find(c => c.value.trim() === name.trim());
        if (name.trim() === '') {
            setEmptyError(true);
            setErrorMsg('Indicar nombre de categoría')
            return;
        }
        if (existName) {
            setEmptyError(true);
            setErrorMsg('Nombre de categoría repetido')
            return;
        }
        const category: ICategory = {
            key: uuid.v4().toString(),
            value: name.trim()
        };

        saveCategory(category)
        Alert.alert('Info', '! Categoría registrada exitosamente !', [
            {
                text: 'Continuar',
                onPress: () => onCloseModal()
            }
        ]);
    }

    const onCloseModal = () => {
        setName('')
        setEmptyError(false)
        setModalVisible(false)
    }

    const ModalView = () => (
        <>
            {emptyError &&
                <View style={{ marginBottom: 20, marginTop: -10 }}>
                    <ErrorMessage message={errorMsg} />
                </View>
            }
            <View style={{ ...banner.content, marginTop: 5 }}>
                <>
                    {/* <AP_input
                        display='Nombre categoría'
                        valueText={categoriaNombre}
                        change={(v)=> onChange('categoriaNombre', v)}
                    /> */}

                    <Text style={text.normal}>Nombre categoría</Text>
                    <TextInput
                        value={name}
                        onChangeText={(val) => setName(val)}
                        maxLength={20}
                        selectionColor='#A6ACAF'
                        style={banner.input}
                    />
                </>
                <ButtonsGroup
                    tPrimary='Guardar'
                    ePrimary={onSaveCategory}
                    tSecondary='Cancelar'
                    eSecondary={onCloseModal}
                />
            </View>
        </>
    )

    return (
        <MainLayout title='Registrar categoría'>
            <WrapperList
                title='Categorías Registradas'
                listType={EListType.CATEGORIES}
                action={() => setModalVisible(true)}
                actionTitle='Nueva'
            />

            <AP_Modal
                children={ModalView()}
                orientation='bottom'
                modalVisible={modalVisible}
            />
        </MainLayout>
    )
}

export default AddCategoryScreen