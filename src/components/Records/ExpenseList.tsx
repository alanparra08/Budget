import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SwipeListView } from 'react-native-swipe-list-view'
import { useExpense } from '../../hooks/useExpense'
import { BudgetContext } from '../../context/BudgetContext'
import { IRecord } from '../../interfaces/interfacesIndex'
import SwipeOptions from '../SwipeOptions'
import RowItem from '../RowItem';
import ItemSeparator from '../ItemSeparator';

const ExpenseList = (): JSX.Element => {
    const { state: { expensesFiltered } } = useContext(BudgetContext)
    const router = useNavigation<any>();
    const { remove } = useExpense(null);

    const editExpense = (expense: IRecord) => router.navigate('AddRecordScreen', { editExpense: expense })

    return (
        <SwipeListView
            disableRightSwipe
            data={expensesFiltered}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <RowItem key={item.id} info={item} />}
            renderHiddenItem={({ item }) => (
                <SwipeOptions
                    onEdit={() => editExpense(item)}
                    onDelete={() => remove(item.id)}
                />
            )}
            rightOpenValue={-148}
            ItemSeparatorComponent={()=> <ItemSeparator />}
        />
    )
}

export default ExpenseList