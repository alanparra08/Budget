import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { textStyle, cardStyle } from "../theme/appStyle"
import { MainLayout } from "../layouts/MainLayout"

const FindScreen = () => {
    return (
        <MainLayout title='Consultas'>

            <View style={cardStyle.white}>
                <Text style={textStyle.subtitle}>Consultar por:</Text>
            </View>
        </MainLayout>
    )
}

export default FindScreen