import React, { useState, useEffect, useContext } from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParams } from "../navigator/Navigator"
import { IRecord } from "../interfaces/interfacesIndex"
import { MONTHS } from "../util"
import { myExpenses } from "../util/myExpenses"
import { BudgetContext } from "../context/BudgetContext"
import { MainLayout } from "../layouts/MainLayout"
import ExpenseList from "../components/ExpenseList"

interface Props extends StackScreenProps<RootStackParams, "MonthDetailsScreen"> { }

const MonthDetailsScreen = ({ route }: Props): JSX.Element => {
    const { year, monthNumber } = route.params
    const { state: { expenses } } = useContext(BudgetContext);
    const [expensesByMonth, setExpensesByMonth] = useState<IRecord[]>()
    const [month, setMonth] = useState<string>("")

    useEffect(() => {
        setMonth(`Gasto ${MONTHS[monthNumber]}, ${year}`);
        setExpensesByMonth(myExpenses.getBy.month(monthNumber, year, expenses))
    }, [])

    return (
        <MainLayout title={month} returnPage="GraphicScreen">
            <ExpenseList list={expensesByMonth as IRecord[]} />
        </MainLayout>
    )
}

export default MonthDetailsScreen