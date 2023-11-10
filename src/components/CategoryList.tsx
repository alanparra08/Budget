import React from 'react'
import { View, StyleSheet, Text, FlatList, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import { flex, text } from '../theme/theme'
import { color } from '../theme/color'

const CategoryList = () => {

    // Mostrar categria por quicnena
    // Mostrar categria por mes

    return (
        <SafeAreaView style={{ marginTop: 25 }}>
            <Text style={{ marginLeft: 10, ...text.title, color: color.black }}>Gastos esta quincena</Text>
            <ScrollView style={{ marginTop: 10 }} showsVerticalScrollIndicator={false}>
                <View style={css.container}>
                    <Text style={text.normal}>Deporte</Text>
                    <Text style={css.amount}>$349</Text>
                </View>
                <View style={{ ...css.container, backgroundColor: color.blueLight }}>
                    <Text style={text.normal}>Comida fuera de casa</Text>
                    <Text style={css.amount}>$100</Text>
                </View>
                <View style={css.container}>
                    <Text style={text.normal}>Renta</Text>
                    <Text style={css.amount}>$2,500</Text>
                </View>
                <View style={{ ...css.container, backgroundColor: color.blueLight }}>
                    <Text style={text.normal}>Comida fuera de casa</Text>
                    <Text style={css.amount}>$100</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const css = StyleSheet.create({
    container: {
        ...flex.rowBetween,
        paddingVertical: 17,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 0.3,
        borderBottomColor: color.border
    },
    amount: {
        fontSize: 16,
        // borderBottomWidth: 0.6,
        // borderBottomColor: color.danger,
        color: color.danger
    }
})

export default CategoryList