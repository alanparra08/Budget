import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
// import { Table, Row, Rows, TableWrapper, Col } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/Ionicons'
import { ScrollView } from 'react-native-virtualized-view'
import currencyFormatter from 'currency-formatter'
import { useHome } from '../hooks/useHome'
import { SettingsContext } from '../context/SettingCtx/SettingsContext'
import { color, cardStyle, flexStyle, badge } from '../theme/appStyle'
import { MainLayout } from '../layouts/MainLayout'
import { AP_IconButton } from '../components/AP_Buttons';

type CashType = 'I' | 'E' | 'N';
type IsLastItem = 'last' | 'noLast';

const DetailExpenseScreen = () => {
  const { totalExpense, titleExpense } = useHome()
  const { state: { budget } } = useContext(SettingsContext)
  const [budgetNow, setBudgetNow] = useState<string>('')
  const [spent, setSpent] = useState<string>('')
  const [labels, setLabel] = useState<any>([])

  useEffect(() => {
    setLabel([
      { id: 1, label: 'Nomina', ingreso: 92000, egreso: 16000 },
      { id: 2, label: 'Departamento', ingreso: 10500, egreso: 1400 },
      { id: 3, label: 'upSiVales!', ingreso: 2000, egreso: 1000 }
    ])
  }, [])

  useEffect(() => {
    const budgetTemp = currencyFormatter.format(Number(budget), { code: 'USD' })
    const spentTemp = currencyFormatter.format(Number(totalExpense), { code: 'USD' })
    setBudgetNow(budgetTemp)
    setSpent(spentTemp)
  }, [totalExpense])

  const ItemComponent = (display: string, qty: string, cashType: CashType = 'N', isLast: IsLastItem = 'noLast') => {
    let iconStyle = {
      icon: '',
      color: '',
      rotate: ''
    }

    let rowStyle = {}
    if (isLast === 'noLast') {
      rowStyle = { ...detail.row }
    } else {
      rowStyle = {
        ...detail.row,
        borderBottomColor: 'transparent',
        paddingBottom: 0,
        marginBottom: 0
      }
    }

    switch (cashType) {
      case 'I':
        iconStyle = {
          icon: 'arrow-up-outline',
          color: color.primary,
          rotate: '50deg'
        }
        break;
      case 'E':
        iconStyle = {
          icon: 'arrow-down-outline',
          color: color.dangerLight,
          rotate: '50deg'
        }
        break;
      default:
        iconStyle = {
          icon: '',
          color: '',
          rotate: '0deg'
        }
        break;
    }

    return (
      <View {...rowStyle}>
        <Text style={detail.rowDisplay}>{display}</Text>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Text style={{ fontSize: 17, color: cashType === 'I' ? color.primary : cashType === 'E' ? color.dangerLight : '' }}>{qty}</Text>
          {/* <Icon name={iconStyle.icon} size={25} style={{ color: iconStyle.color, transform: [{ rotate: iconStyle.rotate }] }} /> */}
        </View>
      </View>
    )
  }

  const ItemRendered = ({ data }: any): JSX.Element => {
    const { label, ingreso, egreso } = data;

    return (
      <View style={{
        marginTop: 15,
        backgroundColor: '#FFF',
        elevation: 2
      }}>
        <View style={{
          ...flexStyle.row_between,
          paddingVertical: 10,
          paddingHorizontal: 15,
          backgroundColor: '#f1f8ff'
        }}>
          <Text style={{ fontSize: 18 }}>{label}</Text>
          <AP_IconButton icon='chevron-down-outline' event={() => alert('aqui')} />
        </View>

        <View style={{
          paddingVertical: 10,
          paddingHorizontal: 15
        }}>
          <View style={{
            ...flexStyle.row_between,
            borderBottomWidth: 0.5,
            borderBottomColor: color.border,
            paddingBottom: 8,
            paddingTop: 5
          }}>
            <Text style={{ fontSize: 17, fontWeight: '300' }}>Ingreso</Text>
            <View style={{ ...flexStyle.row, columnGap: 10 }}>
              <Text style={{ fontSize: 17 }}>{ingreso}</Text>
              <Icon name='arrow-up-outline' size={25} style={{ color: color.primary, transform: [{ rotate: '50deg' }] }} />
            </View>
          </View>

          <View style={{
            ...flexStyle.row_between,
            borderBottomWidth: 0.5,
            borderBottomColor: color.border,
            paddingBottom: 8,
            paddingTop: 5
          }}>
            <Text style={{ fontSize: 17, fontWeight: '300' }}>Egreso</Text>
            <View style={{ ...flexStyle.row, columnGap: 10 }}>
              <Text style={{ fontSize: 17 }}>{egreso}</Text>
              <Icon name='arrow-down-outline' size={25} style={{ color: color.dangerLight, transform: [{ rotate: '50deg' }] }} />
            </View>
          </View>

          <View style={{
            ...flexStyle.row_between,
            paddingBottom: 8,
            paddingTop: 5
          }}>
            <Text style={{ fontSize: 17, fontWeight: '300' }}>Saldo</Text>
            <View style={{ ...flexStyle.row, columnGap: 10 }}>
              <Text style={{ fontSize: 17 }}>$9,099.41</Text>
              <Icon name='wallet-outline' size={25} color={color.black} />
            </View>
          </View>
        </View>
      </View>
    )
  }

  return (
    <MainLayout title='Balance Financiero'>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ ...cardStyle.list, elevation: 2, marginTop: 25, paddingHorizontal: 20, paddingBottom: 20 }}>
            <Text style={detail.titleCard}>Resumen Financiero {titleExpense}</Text>
            {ItemComponent('Presupuesto', budgetNow)}
            {ItemComponent('Ingresos', '$102,000.59', 'I')}
            {ItemComponent('Egresos', spent, 'E',)}
            {ItemComponent('Saldo', '$1,400.27', 'N', 'last')}
          </View>

          <FlatList
            data={labels}
            keyExtractor={(item: any) => item.id}
            renderItem={({ item }) => <ItemRendered data={item} />}
          />

          <View style={{ marginBottom: 15 }} />
        </ScrollView>
      </SafeAreaView>
    </MainLayout>
  )
}

const detail = StyleSheet.create({
  titleCard: {
    marginBottom: 25,
    marginTop: 8,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: color.border,
    // paddingVertical: 12,
    paddingBottom: 8,
    paddingTop: 5
  },
  rowDisplay: {
    fontSize: 17,
    fontWeight: '300',
    // color: color.secondary
  },
  notLastRow: {
    borderBottomWidth: 0.5,
    borderBottomColor: color.border,
    paddingBottom: 12,
    marginBottom: 12
  }
})

export default DetailExpenseScreen