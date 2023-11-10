import { useState, useContext, useEffect } from 'react'
import { useProvider } from './useProvider'
import { useConfig } from './useConfig'
import { BudgetContext } from '../context/BudgetContext'
import { SettingsContext } from '../context/SettingCtx/SettingsContext'

export const useHome = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const { getCategories, getExpenses } = useProvider()
    const { getSettings } = useConfig()
    const { state: { expenses, expensesFiltered, totalExpensesFiltered },
        fnSetCategoriesFiltered, fnSetExpensesFiltered, fnSetTotalExpensesFiltered, } = useContext(BudgetContext)
    const { state: { user } } = useContext(SettingsContext);

    useEffect(() => {
        getCategories()
        getExpenses()
        getSettings()
    }, [])

    useEffect(() => {
        fnSetCategoriesFiltered(expenses)
        fnSetExpensesFiltered(expenses)
        fnSetTotalExpensesFiltered(expenses)
    }, [expenses])

    return {
        user,
        expensesFiltered,
        totalExpensesFiltered,

        modalVisible,
        setModalVisible
    }
}