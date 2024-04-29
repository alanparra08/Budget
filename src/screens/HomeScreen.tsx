import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { EDisplay } from '../enums/EDisplay'
import { ISettings } from '../interfaces/interfacesIndex'
import { useHome } from '../hooks/useHome'
import { useConfig } from '../hooks/useConfig'
import { SettingsContext } from '../context/SettingCtx/SettingsContext'
import MenuTop from '../components/Menus/MenuTop'
import ExpenseIndicator from '../components/ExpenseIndicator'
import ErrorMessage from '../components/ErrorMessage'
import ExpenseCategoryList from '../components/ExpenseCategoryList'
import AP_Modal from '../components/AP_Modal'
import ExpenseList from '../components/ExpenseList'
import ButtonGroup, { ButtonGroupProps } from '../components/ButtonGroup'
import { TitleAndLink } from '../components/AP_Titles'
import Card from '../components/Card'

import DisplayUser from '../components/DisplayUser'

const HomeScreen = () => {
  const { setSettings } = useConfig()
  const { state: settingState } = useContext(SettingsContext)
  const { displayBy, filterCategories, totalExpense, expenseList, onAddExpense } = useHome();
  const [modal, setModal] = useState<boolean>(false)

  const onChangeDisplay = (display: string): void => {
    const newSetting: ISettings = {
      ...settingState,
      displayBy: display
    }
    setSettings(newSetting);
  }

  const filterButtons: ButtonGroupProps[] = [
    { text: 'Por Día', event: () => onChangeDisplay(EDisplay.DAY), active: displayBy === EDisplay.DAY },
    { text: 'Por Quincena', event: () => onChangeDisplay(EDisplay.FIFTEEN), active: displayBy === EDisplay.FIFTEEN },
    { text: 'Por Mes', event: () => onChangeDisplay(EDisplay.MONTH), active: displayBy === EDisplay.MONTH }
  ]

  const HomeView = (): JSX.Element => {
    if (totalExpense === 0) { return (<ErrorMessage message='No se encontró ningun registro' />) }

    return (
      <>
        <ExpenseCategoryList categoryData={filterCategories} />
        <TitleAndLink label='Últimos gastos' labelLink='Nuevo' event={onAddExpense} />
        <ExpenseList list={expenseList} edit />
      </>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <MenuTop />
      <DisplayUser />
      <ButtonGroup buttons={filterButtons} />
      <ExpenseIndicator />
      <HomeView />

      <AP_Modal
        children={(
          <Card closeModal={() => setModal(false)}>
            <ExpenseList list={expenseList} edit mt={0} />
          </Card>
        )}
        modalVisible={modal}
      />
    </SafeAreaView>
  )
};

export default HomeScreen