import React, { useEffect, useState } from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParams } from "../navigator/Navigator"
import { IRecord } from "../interfaces/interfacesIndex"
import { myExpenses } from "../util/myExpenses"
import { useTempData } from "../hooks/useTempData"
import { MainLayout } from "../layouts/MainLayout"
import Section from "../components/Section"
import ExpenseList from "../components/ExpenseList"

interface Props extends StackScreenProps<RootStackParams, "ExpenseByCategoryScreen"> { };

const ExpenseByCategoryScreen = ({ route }: Props) => {
    const { params: { category } } = route as any | null
    const { expenseList } = useTempData()
    const [expensesByCategory, setExpensesByCategory] = useState<IRecord[]>()

    useEffect(() => {
        const tempExpense = myExpenses.getBy.category(expenseList, category.key)
        setExpensesByCategory(tempExpense)
    }, [expenseList])

    return (
        <MainLayout title="Gastos por categoría">
            <Section money={category.total} description={route.params.category.value} />
            <ExpenseList list={expensesByCategory as IRecord[]} />
        </MainLayout>
    )
}

export default ExpenseByCategoryScreen