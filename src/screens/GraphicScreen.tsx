import React, { useState, useEffect, useContext } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import { takeDate, noRepeatingYears } from '../util/getter'
import { myExpenses } from '../util/myExpenses'
import { color } from '../theme/color'
import { BudgetContext } from '../context/BudgetContext'
import { MainLayout } from '../layouts/MainLayout'
import CardWhole from '../components/CardWhole'
import AllMonths from '../components/ExpenseGraphic/AllMonths'
import ButtonsGroup from '../components/ButtonsGroup'

const GraphicScreen = () => {
    const { yyyy } = takeDate()
    const { state: { expenses } } = useContext(BudgetContext);
    const [dataYears, setDataYears] = useState<number[]>([])
    const [year, setYear] = useState<number>(yyyy)
    const [sumAmount, setSumAmount] = useState<number>(0)

    const onChangeYear = (year: number): void => setYear(year)

    useEffect(() => {
        setSumAmount(myExpenses.sumBy.year(year, expenses))
    }, [year])

    useEffect(() => {
        setDataYears(noRepeatingYears(expenses))
    }, [])

    return (
        <MainLayout title='Gastos anuales'>
            <CardWhole money={sumAmount} description={`Gastos ${year}`}>
                {/* <ButtonsGroup
                    tPrimary='Generar PDF'
                    bgPrimaryLight
                    ePrimary={() => alert('true')}
                /> */}
                <SelectList
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
                    dropdownTextStyles={{ fontSize: 16  }}
                    dropdownStyles={{ borderWidth: 0.5,  marginTop: 5, borderRadius: 4, borderColor: color.border, backgroundColor: 'white' }}
                />
            </CardWhole>
            <AllMonths year={year} />
        </MainLayout>
    )
}

export default GraphicScreen