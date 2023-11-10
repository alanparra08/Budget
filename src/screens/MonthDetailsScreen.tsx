import React, { useState, useEffect, useContext } from 'react'
import { View, Text, FlatList, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/Navigator'
import { IRecord } from '../interfaces/interfacesIndex'
import { MONTHS } from '../util'
import { myExpenses } from '../util/myExpenses'
import { BudgetContext } from '../context/BudgetContext'
import { MainLayout } from '../layouts/MainLayout'
import RowItem from '../components/RowItem'
import ItemSeparator from '../components/ItemSeparator'
import ButtonsGroup from '../components/ButtonsGroup'
import { banner, flex, text } from '../theme/theme'
import { color } from '../theme/color'

interface Props extends StackScreenProps<RootStackParams, 'MonthDetailsScreen'> { }

const MonthDetailsScreen = ({ route }: Props): JSX.Element => {
    const { year, monthNumber } = route.params
    const { state: { expenses } } = useContext(BudgetContext);
    const [expensesByMonth, setExpensesByMonth] = useState<IRecord[]>()
    const [month, setMonth] = useState<string>('')

    useEffect(() => {
        setMonth(`Gasto ${MONTHS[monthNumber - 1]}, ${year}`);
        setExpensesByMonth(myExpenses.getBy.month(year, monthNumber, expenses))
    }, [])

    return (
        <MainLayout title={month} returnPage='GraphicScreen'>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <FlatList
                        style={{ marginTop: 15, paddingVertical: 10, paddingHorizontal: 25, backgroundColor: 'white' }}
                        data={expensesByMonth}
                        renderItem={({ item }: any) => <RowItem key={item.key} info={item} />}
                        keyExtractor={(item) => item.id}
                        ItemSeparatorComponent={() => <ItemSeparator />}
                    />
                </ScrollView>
            </SafeAreaView>
        </MainLayout>
    )
}

export default MonthDetailsScreen