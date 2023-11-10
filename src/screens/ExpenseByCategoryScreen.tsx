import React, { useContext, useEffect, useState } from 'react'
import { View, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/Navigator'
import { IRecord } from '../interfaces/interfacesIndex'
import { myExpenses } from '../util/myExpenses'
import { BudgetContext } from '../context/BudgetContext'
import RowItem from '../components/RowItem'
import CardWhole from '../components/CardWhole'
import { FlatList } from 'react-native-gesture-handler'
import ItemSeparator from '../components/ItemSeparator'
import { MainLayout } from '../layouts/MainLayout'

interface Props extends StackScreenProps<RootStackParams, 'ExpenseByCategoryScreen'> { };

const ExpenseByCategoryScreen = ({ route }: Props) => {
    const { params: { category } } = route as any | null
    const { state: { expenses } } = useContext(BudgetContext);
    const [expensesByCategory, setExpensesByCategory] = useState<IRecord[]>([])

    useEffect(() => {
        const _expenses = myExpenses.getBy.category_fifteen(expenses, category.key)
        setExpensesByCategory(_expenses)
    }, [])

    return (
        <MainLayout title='Gastos por categoría'>
            <CardWhole money={category.total} description={route.params.category.value} />
            <View style={{ marginBottom: 15 }} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <FlatList
                    style={{ paddingVertical: 10, paddingHorizontal: 25, backgroundColor: 'white' }}
                    data={expensesByCategory}
                    renderItem={({ item }: any) => <RowItem key={item.key} info={item} />}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <ItemSeparator />}
                />
            </ScrollView>
        </MainLayout>
    )
}

export default ExpenseByCategoryScreen