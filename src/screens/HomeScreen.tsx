import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { EListType } from '../interfaces/interfacesIndex'
import { useHome } from '../hooks/useHome'
import WrapperList from '../components/Records/WrapperList'
import MenuTop from '../components/Menus/MenuTop'
import Card from '../components/Card'
import ErrorMessage from '../components/ErrorMessage'
import { color } from '../theme/color'
import CategoryList from '../components/CategoryList'
import { flex, text } from '../theme/theme'
import { card } from '../theme/styles'
import { AP_IconButton, AP_LinkButton } from '../components/AP_Buttons'
import ScrollCategories from '../components/ScrollCategories'
import CardWhole from '../components/CardWhole'


const HomeScreen = () => {
  const {
    user,
    expensesFiltered,
    totalExpensesFiltered,
    modalVisible,
    setModalVisible,
  } = useHome();

  const router = useNavigation<any>()

  const HomeContent = () => (
    <View>
      {/* <ScrollCategories /> */}
      <CategoryList />
      <WrapperList title='Registro Gasto Quincenal' actionTitle='Nuevo' action={() => router.navigate('AddRecordScreen')} listType={EListType.EXPENSES} />
    </View>
  )

  const NoRecords = () => (
    <>
      <ErrorMessage message='Sin registros esta quincena' />
      {/* <View style={{ marginTop: 20, marginRight: 5, alignItems: 'flex-end' }}>
        <AP_LinkButton buttonText='Configuraciones' event={() => alert('avc')} />
      </View> */}
    </>
  )

  const AddExpense = () => (
    <View style={{ position: 'absolute', right: 20, bottom: 15 }}>
      <AP_IconButton event={() => router.navigate('AddRecordScreen')} iconName='add-circle' size={60} color={color.green} />
    </View>
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MenuTop />
      <Card amount={Number(totalExpensesFiltered)} display='Gasto Quincenal' details='Detalles' />

      {!expensesFiltered.length ? <NoRecords /> : <HomeContent />}

      <AddExpense />
    </SafeAreaView>
  )
};

export default HomeScreen