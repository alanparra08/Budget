import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SettingsContext } from '../context/SettingCtx/SettingsContext'

const DisplayUser = () => {
    const { state: { user } } = useContext(SettingsContext)

    if (user) {
        return (
            <View style={css.container}>
                <Text style={{ fontSize: 17, fontWeight: '300' }}>Hola</Text>
                <Text style={css.user}>{user}</Text>
            </View>
        )
    }
}

const css = StyleSheet.create({
    container: {
        marginTop: 10,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    user: {
        marginLeft: 5,
        fontSize: 18,
        fontWeight: '500'
    }
})

export default DisplayUser