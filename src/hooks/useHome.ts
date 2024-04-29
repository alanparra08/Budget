import { useContext, useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import { SettingsContext } from '../context/SettingCtx/SettingsContext'
import { IExpensesCategory } from '../interfaces/interfacesIndex'
import { getSumTotalCategories } from '../util'
import { useProvider } from './useProvider'
import { useConfig } from './useConfig'
import { useTempData } from './useTempData'
import { useCategoryService } from './useCategoryService'

export const useHome = () => {
    const router = useNavigation<any>()
    const { state: { displayBy } } = useContext(SettingsContext)
    const { getExpenses } = useProvider()
    const { getCategories } = useCategoryService()
    const { getSettings } = useConfig()
    const { categoryList, expenseList, titleExpense, totalExpense } = useTempData()

    const [filterCategories, setFilterCategories] = useState<IExpensesCategory[]>([])

    const onAddExpense = () => router.navigate("AddRecordScreen")

    useEffect(() => {
        getCategories()
        getExpenses()
        getSettings()
    }, [])

    useEffect(() => {
        const dataTemp = getSumTotalCategories(categoryList, expenseList)
        setFilterCategories(dataTemp)
      }, [expenseList])

    return {
        router,
        displayBy,
        filterCategories,
        titleExpense,
        totalExpense,
        expenseList,
        onAddExpense
    }
}