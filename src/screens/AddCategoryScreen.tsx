import React, { useState } from "react"
import { View, Alert, SafeAreaView, ScrollView, FlatList, Text, StyleSheet } from "react-native"
import uuid from "react-native-uuid"
import { ICategory } from "../interfaces/interfacesIndex"
import { color, flexStyle, cardStyle } from "../theme/appStyle"
import { useForm } from "../hooks/useForm"
import { useCategoryService } from "../hooks/useCategoryService"
import { MainLayout } from "../layouts/MainLayout"
import AP_Modal from "../components/AP_Modal"
import ErrorMessage from "../components/ErrorMessage"
import OptionButtons from "../components/OptionButtons"
import AP_input from "../components/AP_input"
import { AP_IconButton, AP_CircleButton, AP_LinkButton } from "../components/AP_Buttons"

const AddCategoryScreen = (): JSX.Element => {
    const { categories, saveCategory, refreshCategories } = useCategoryService()
    const { categoryName, onChange } = useForm({ categoryName: "" })
    const [categoryKey, setCategoryKey] = useState<string>("")
    const [errorContent, setErrorContent] = useState<boolean>(false)
    const [errorMsg, setErrorMsg] = useState<string>("")
    const [modalVisible, setModalVisible] = useState<boolean>(false)

    const updateCategory = (category: ICategory): void => {
        const { key, value } = category

        const categoriesUpdated = categories.map((item) => {
            if (item.key === key) {
                return { ...item, value }
            }
            return { ...item }
        }) as ICategory[]

        refreshCategories(categoriesUpdated)
    }

    const onCloseModal = (): void => {
        onChange('categoryName', '')
        setErrorContent(false)
        setModalVisible(false)
    }

    const onOpenModal = (): void => {
        setCategoryKey('')
        setModalVisible(true)
    }

    const onSave = (): void => {
        const existName = categories.find(c => c.value.trim() === categoryName.trim());
        if (categoryName.trim() === '') {
            setErrorContent(true);
            setErrorMsg('Indicar nombre de categoría')
            return;
        }
        if (existName) {
            setErrorContent(true);
            setErrorMsg('Nombre de categoría repetido')
            return;
        }

        const category: ICategory = {
            key: !categoryKey ? uuid.v4().toString() : categoryKey,
            value: categoryName.trim()
        };

        if (!categoryKey) {
            saveCategory(category)
        } else {
            updateCategory(category)
        }

        onCloseModal();
        Alert.alert('Info', '! Categoría guardada exitosamente !', [
            {
                text: 'Continuar',
                // onPress: () => onCloseModal()
            }
        ]);
    }

    const ErrorView = (): JSX.Element => (
        <>
            {errorContent &&
                <View style={{ marginTop: -10, marginBottom: 10 }}>
                    <ErrorMessage message={errorMsg} eClose={() => setErrorContent(false)} />
                </View>
            }
        </>
    )

    const AddCategoryView = (): JSX.Element => (
        <SafeAreaView>
            <ScrollView>
                <View style={{ marginHorizontal: -10 }}>
                    <ErrorView />
                </View>
                <View>
                    <AP_input
                        label="Nombre categoría"
                        valueText={categoryName}
                        change={(value) => onChange("categoryName", value)}
                    />

                    <OptionButtons
                        tPrimary={categoryKey ? "Editar" : "Guardar"}
                        ePrimary={onSave}
                        tSecondary="Cancelar"
                        eSecondary={onCloseModal}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )

    const CategoryRowView = ({ item }: any): JSX.Element => {
        return (
            <View style={css.item}>
                <Text style={{ fontSize: 16 }}>{item.value}</Text>
                <View style={flexStyle.row_between}>
                    <AP_IconButton icon='pencil-outline' iconColor={color.primary} event={() => onFillForm(item)} />
                    <View style={{ marginLeft: 10 }} />
                    <AP_IconButton icon='trash-outline' iconColor={color.dangerLight} event={() => onConfirmRemove(item.key)} />
                </View>
            </View>
        )
    }

    const onConfirmRemove = (categoryKey: string): void => {
        Alert.alert('Budget App', '¿Eliminar categoría?',
            [
                { text: 'Cancelar' },
                {
                    text: 'Aceptar',
                    onPress: () => {
                        const updatedCategories = categories.filter(c => c.key !== categoryKey) as ICategory[]
                        refreshCategories(updatedCategories)
                    }
                }
            ]);
    }

    const onFillForm = (category: ICategory) => {
        setModalVisible(true)
        setCategoryKey(category.key)
        onChange('categoryName', category.value)
    }

    const NoCategories = () => (
        <>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginTop: 15, marginBottom: 10, paddingHorizontal: 0 }}>
                <ErrorMessage message='No se encontró ningun registro' />
                <AP_LinkButton label="Registrar nueva" orientation='center' mt={20} event={onOpenModal} />
            </View>
            <AP_Modal
                children={AddCategoryView()}
                orientation='bottom'
                modalVisible={modalVisible}
            />
        </>
    )

    return (
        <MainLayout title='Categorías'>
            {categories.length === 0 && <NoCategories />}
            {categories.length > 0 &&
                <>
                    <FlatList
                        style={{ marginTop: 15, marginBottom: 70 }}
                        data={categories}
                        keyExtractor={(item) => item.key}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => <CategoryRowView item={item} />}
                    />

                    <AP_CircleButton icon='add-circle' event={onOpenModal} />

                    <AP_Modal
                        children={AddCategoryView()}
                        orientation='bottom'
                        modalVisible={modalVisible}
                    />
                </>
            }
        </MainLayout>
    )
}

const css = StyleSheet.create({
    item: {
        ...flexStyle.row_between,
        ...cardStyle.white,
        marginTop: 0,
        marginBottom: 5
    }
})

export default AddCategoryScreen