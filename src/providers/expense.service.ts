import { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BudgetContext } from '../context/BudgetContext';

const {
    state: {
        expenses,
        categories
    },
    fnSetCategories,
    fnSetOneCategory,
    fnSetAllExpenses,
    fnSetOneExpense
} = useContext(BudgetContext);

export const getExpensesss = async (): Promise<void> => {
    try {
        const resultRecords = await AsyncStorage.getItem('@records');
        if (resultRecords !== null) {
            fnSetAllExpenses(JSON.parse(resultRecords));
        }
    } catch (e) {
        // error reading value
    }
}