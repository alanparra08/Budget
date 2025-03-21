import React, { useState, useEffect, useContext } from "react"
import { StyleSheet } from "react-native"
import { takeDate, noRepeatingYears } from "../util/getter"
import { myExpenses } from "../util/myExpenses"
import { color } from "../theme/appStyle"
import { BudgetContext } from "../context/BudgetContext"
import { MainLayout } from "../layouts/MainLayout"
import Section from "../components/Section"
import AllMonths from "../components/AllMonths"
import ErrorMessage from "../components/ErrorMessage"
import ButtonGroup, { ButtonGroupProps } from "../components/ButtonGroup"
import { getSumTotalCategories } from "../util"
import { IExpensesCategory } from "../interfaces/interfacesIndex"


const GraphicScreen = () => {
    const { yyyy } = takeDate(new Date().toString())
    const { state: { expenses, categories } } = useContext(BudgetContext)
    const [title, setTitle] = useState<string>('')
    const [dataYears, setDataYears] = useState<number[]>([])
    const [dataPickerList, setDataPickerList] = useState<[]>([])
    const [year, setYear] = useState<number>(yyyy)
    const [sumAmount, setSumAmount] = useState<number>(0)
    const [filterYears, setFilterYears] = useState([])
    // const [selectedYear, setSelectedYear] = useState<number>(yyyy)

    const [filterCchchategories, setFilterCategories] = useState<IExpensesCategory[]>([])

    useEffect(() => {
        // const expensesYear = myExpenses.getBy.year(year, expenses)
        // console.log('ex', expensesYear);
        // const categoriesYears = getSumTotalCategories(categories, expensesYear)
        // setFilterCategories(categoriesYears)
        const years = noRepeatingYears(expenses);
    }, [year])

    useEffect(() => {
        const totalYear = myExpenses.sumBy.year(year, expenses)
        setSumAmount(totalYear)
        setTitle(totalYear === 0 ? `Sin registros el año ${year}` : `Gastos ${year}`)
    }, [year])

    useEffect(() => {
        setDataYears(noRepeatingYears(expenses))
    }, [])


    const filterButtons: ButtonGroupProps[] = [
        { text: '2023', event: () => setYear(2023), active: year === 2023 },
        { text: '2024', event: () => setYear(2024), active: year === 2024 },
        { text: '2025', event: () => setYear(2025), active: year === 2025 }
    ]

    return (
        <MainLayout title='Gastos anuales'>
            <Section money={sumAmount} description={title} />

            <ButtonGroup buttons={filterButtons} />

            {sumAmount === 0 && <ErrorMessage message={`Sin registros el año ${year}`} />}

            <AllMonths year={year} />
        </MainLayout>
    )
}

export default GraphicScreen

const css = StyleSheet.create({
    button: {
        marginLeft: 4,
        padding: 10,
        borderRadius: 4,
        borderWidth: 0.5,

        borderColor: "#cdcdcd",
        backgroundColor: "#ebebeb"
    },
    buttonText: {
        fontSize: 16,
        color: color.black
    }
})

{/* <SelectList
                            data={dataYears}
                            save='key'
                            setSelected={(_year: number) => onChangeYear(_year)}
                            search={false}
                            placeholder='Seleccionar año'
                            inputStyles={{ fontSize: 16 }}
                            boxStyles={{
                                marginTop: 10,
                                height: 50,
                                alignItems: 'center',
                                backgroundColor: 'white',
                                borderWidth: 0.5,
                                borderRadius: 4,
                                borderColor: color.border
                            }}
                            dropdownTextStyles={{ fontSize: 16 }}
                            dropdownStyles={{ borderWidth: 0.5, marginTop: 5, borderRadius: 4, borderColor: color.border, backgroundColor: 'white' }}
                        /> */}