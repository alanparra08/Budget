import { useEffect, useState, useContext } from "react"
import { BudgetContext } from "../context/BudgetContext"
import { SettingsContext } from "../context/SettingCtx/SettingsContext"
import { IExpensesCategory, IRecord } from "../interfaces/interfacesIndex"
import { EDisplay } from "../enums/EDisplay"
import { getSumTotalCategories, getTotalBy } from "../util"
import { myExpenses } from "../util/myExpenses"
import { takeDate } from "../util/getter"

export const useTempData = () => {
    const { state: { expenses, categories } } = useContext(BudgetContext)
    const { state: { displayBy, budget } } = useContext(SettingsContext)
    const { yyyy, mm, dd } = takeDate(new Date().toString())

    const [titleExpense, setTitleExpense] = useState<string>("")
    const [expenseList, setExpenseList] = useState<IRecord[]>([])
    const [categoryList, setCategoryList] = useState<IExpensesCategory[]>([])
    const [totalExpense, setTotalExpense] = useState<number>(0)

    useEffect(() => {
        let tempExpenses: IRecord[] = []
        let tempCategories: IExpensesCategory[] = []

        switch (displayBy) {
            case EDisplay.DAY:
                tempExpenses = myExpenses.getBy.day(mm, dd, yyyy, expenses)
                setExpenseList(tempExpenses)
                setTitleExpense("Gasto hoy")
                break
            case EDisplay.FIFTEEN:
                tempExpenses = myExpenses.getBy.fifteen(expenses)
                setExpenseList(tempExpenses)
                setTitleExpense("Gasto Quincenal")
                break
            case EDisplay.MONTH:
                tempExpenses = myExpenses.getBy.month(mm, yyyy, expenses)
                setExpenseList(tempExpenses)
                setTitleExpense("Gasto Mensual")
                break
            default:
                setExpenseList([])
                break;
        }
        // * Get all categories by filter
        tempCategories = getSumTotalCategories(categories, tempExpenses)
        setCategoryList(tempCategories)

        // * Sum total expenses by filter
        setTotalExpense(getTotalBy(tempExpenses))
    }, [displayBy, expenses])

    return {
        titleExpense,
        expenseList,
        categoryList,
        totalExpense,
        budget
    }
}