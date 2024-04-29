import React, { useContext, useState, useEffect } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useConfig } from '../hooks/useConfig'
import { SettingsContext } from '../context/SettingCtx/SettingsContext'
import { ISettings } from '../interfaces/interfacesIndex'
import { cardStyle } from '../theme/cardStyle'
import { MainLayout } from '../layouts/MainLayout'
import CustomAlert from '../components/CustomAlert'
import OptionButtons from '../components/OptionButtons'
import AP_RadioButton from '../components/AP_RadioButton'
import AP_input from '../components/AP_input'

const SettingsScreen = (props: any) => {
    const router = useNavigation<any>()
    const { state } = useContext(SettingsContext)
    const { setSettings } = useConfig()

    const [alertVisible, setAlertVisible] = useState<boolean>(false)
    const [data, setData] = useState<ISettings>({ user: null, budget: null, displayBy: null, theme: null, language: null })

    const saveSettings = (): void => {
        const settings: ISettings = {
            user: data.user,
            budget: data.budget,
            displayBy: data.displayBy,
            theme: data.theme,
            language: data.language,

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
        setData({
            user: state.user,
            displayBy: state.displayBy,
            theme: state.theme,
            language: state.language,
            budget: state.budget
        })
    }, [])

    return (
        <MainLayout title='Configuraciones'>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ ...cardStyle.white, paddingTop: 12 }}>
                    <AP_input
                        focus
                        label='Mi usuario'
                        valueText={data.user}
                        change={value => handleData('user', value)}
                    />
                    <AP_input
                        label='Presupuesto Mes'
                        valueText={data.budget}
                        length={6}
                        change={value => handleData('budget', value)}
                        inputType='numeric'
                    />
                </View>

                <View style={cardStyle.white}>
                    <Text style={{ fontSize: 16, marginBottom: 10 }}>Temas</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <AP_RadioButton short event={() => handleData('theme', 'dark')} label='Obscuro' active={data.theme === 'dark' ?? true} />
                        <AP_RadioButton short event={() => handleData('theme', 'white')} label='Claro' active={data.theme === 'white' ?? true} />
                    </View>

                    <Text style={{ fontSize: 16, marginTop: 15, marginBottom: 10 }}>Idiomas</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <AP_RadioButton short event={() => handleData('language', 'esp')} label='Espanol' active={data.language === 'esp' ?? true} />
                        <AP_RadioButton short event={() => handleData('language', 'eng')} label='Ingles' active={data.language === 'eng' ?? true} />
                    </View>

                    <OptionButtons
                        tPrimary='Guardar'
                        ePrimary={saveSettings}
                        tSecondary='Cancelar'
                        eSecondary={() => router.navigate('HomeScreen')}
                    />
                </View>

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

export default SettingsScreen;