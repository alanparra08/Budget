import React, { useContext, useState, useEffect } from 'react'
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { useConfig } from '../hooks/useConfig'
import { SettingsContext } from '../context/SettingCtx/SettingsContext'
import { ISettings } from '../interfaces/interfacesIndex'
import { banner, flex, text } from '../theme/theme'
import { color } from '../theme/color'
import { MainLayout } from '../layouts/MainLayout'
import CustomInputText from '../components/CustomInputText'
import CustomAlert from '../components/CustomAlert'
import ButtonsGroup from '../components/ButtonsGroup'



const SettingsScreen = (props: any) => {
    const router = useNavigation<any>()
    const { state: { user, perMonth, limitAmount } } = useContext(SettingsContext)
    const { setSettings } = useConfig()

    const [alertVisible, setAlertVisible] = useState<boolean>(false)
    const [isPerMonth, setIsPerMonth] = useState<boolean>(perMonth)
    const [data, setData] = useState({ user: '', perMonth, limitAmount: null, currentTheme: 'default' })

    const saveSettings = (): void => {
        const settings: ISettings = {
            user: data.user.trim(),
            perMonth: isPerMonth,
            limitAmount: null
        }
        setSettings(settings);
        setAlertVisible(true);
    }

    const handleData = (key: string, value: string | number) => {
        setData({
            ...data,
            [key]: value
        });
    }

    useEffect(() => {
        setData({ ...data, user, limitAmount: null })
    }, [])

    const Opciones = () => (
        <View>
            <Text style={{ ...text.normal, marginTop: 10, marginBottom: 10 }}>Mostrar Egresos</Text>
            <View style={{ ...flex.row, marginBottom: 5 }}>
                <TouchableOpacity activeOpacity={0.5} style={{ ...css.radioButton,  marginRight: 15 }} onPress={() => setIsPerMonth(false)}>
                    <Icon
                        name={!isPerMonth ? "checkmark-circle-outline" : "radio-button-off-outline"}
                        size={28} color={color.btnSecondary}
                    />
                    <Text style={{...text.normal, marginLeft: 5, color: color.btnSecondary }} >Por Quincena</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={css.radioButton} onPress={() => setIsPerMonth(true)}>
                    <Icon
                        name={isPerMonth ? "checkmark-circle-outline" : "radio-button-off-outline"}
                        size={28} color={color.btnSecondary}
                    />
                    <Text style={{...text.normal,  marginLeft: 5, color: color.btnSecondary }}>Por Mes</Text>
                </TouchableOpacity>

            </View>
        </View>
    )

    return (
        <MainLayout title='Configuraciones'>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ ...banner.content }}>
                    <CustomInputText
                        display='Usuario'
                        inputValue={user}
                        maxLength={25}
                        changeText={(value) => handleData('user', value)}
                    />

                    <Opciones />
                    <ButtonsGroup
                        tPrimary='Guardar'
                        ePrimary={saveSettings}
                        tSecondary='Cancelar'
                        eSecondary={() => router.navigate('HomeScreen')}
                    />
                </View>

                {/* <View style={{ ...banner.content, paddingTop: 5 }}>
                    <ButtonsGroup
                        title="Temas"
                        tPrimary='Claro'
                        ePrimary={() => alert('aa')}
                        tSecondary='Obscuro'
                        eSecondary={() => alert('aa')}
                        bgPrimaryLight
                        bgSecondaryLight
                    />
                </View>

                <View style={{ ...banner.content, paddingTop: 5, marginBottom: 10 }}>
                    <ButtonsGroup
                        title="Idiomas"
                        tPrimary='Ingles'
                        ePrimary={() => alert('aa')}
                        tSecondary='Español'
                        eSecondary={() => alert('aa')}
                        bgPrimaryLight
                        bgSecondaryLight
                    />
                </View> */}

                <CustomAlert
                    message='configuración guardada'
                    visible={alertVisible}
                    hideAlert={() => {
                        setAlertVisible(false)
                        props.navigation.navigate('HomeScreen')
                    }}
                />
            </ScrollView>
        </MainLayout>
    )
}

const css = StyleSheet.create({
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default SettingsScreen;