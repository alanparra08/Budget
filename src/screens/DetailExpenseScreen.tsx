import React, { useContext } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { ScrollView } from "react-native-virtualized-view"
import currencyFormatter from "currency-formatter"
import { useHome } from '../hooks/useHome'
import { color, cardStyle } from "../theme/appStyle"
import { MainLayout } from '../layouts/MainLayout'

import { SettingsContext } from '../context/SettingCtx/SettingsContext'
import ButtonGroup, { ButtonGroupProps } from '../components/ButtonGroup'

const DetailExpenseScreen = () => {
  const { totalExpense } = useHome()
  const { state: { budget } } = useContext(SettingsContext)

  const money = currencyFormatter.format(Number(totalExpense), { code: "USD" })

  const ItemComponent = (title: string, desc: string, isLast: boolean = false) => {
    let itemStyles = {}
    if (!isLast) {
      itemStyles = {
        borderBottomWidth: 0.5,
        borderBottomColor: color.border,
        paddingBottom: 15,
        marginBottom: 15
      }
    }

    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...itemStyles
      }}>
        <Text style={{ fontSize: 17, fontWeight: '300' }}>{title}</Text>
        <Text style={{ fontSize: 20, fontWeight: '500', color: budget !== null && budget < totalExpense ? color.danger : color.black }}>{desc}</Text>
      </View>
    )
  }

  const filterButtons: ButtonGroupProps[] = [
    { text: 'Por Día', event: () => alert() },
    { text: 'Por Quincena', event: () => alert() },
    { text: 'Por Mes', event: () => alert(), active: true },
  ]

  return (
    <MainLayout title='Detalle Quincenal'>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          {/* <ButtonGroup buttons={filterButtons} /> */}
          <View style={cardStyle.white}>
            <Text style={css.title}>Indicador Financiero Mensual</Text>

            {ItemComponent('Presupuesto mensual', '$18,000')}
            {ItemComponent('Gasto', money, true)}
          </View>
        </ScrollView>
      </SafeAreaView>



    </MainLayout>
  )
}

const css = StyleSheet.create({
  title: {
    marginBottom: 35,
    fontSize: 18,
    fontWeight: '500',
    color: color.black,
    textAlign: 'center'
  }
})

export default DetailExpenseScreen