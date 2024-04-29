import { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IRecord } from '../interfaces/interfacesIndex';
import { BudgetContext } from '../context/BudgetContext';

export const useProvider = () => {
    const {
        state: { expenses, },
        fnSetAllExpenses,
        fnSetOneExpense
    } = useContext(BudgetContext);

    const getExpenses = async (): Promise<void> => {
        try {
            const exp = await AsyncStorage.getItem('@expenses')
            if (exp !== null) {
                fnSetAllExpenses(JSON.parse(exp))
            }
        } catch (e) {
            console.log('Error al cargar gastos')
        }
    }

    const saveExpense = async (newExpense: IRecord): Promise<void> => {
        try {
            const _expenses = [newExpense, ...expenses]
            await AsyncStorage.setItem('@expenses', JSON.stringify(_expenses));
            fnSetOneExpense(newExpense);
        } catch (e) {
            console.log('Error al registrar gasto')
        }
    }

    const refreshExpenses = async (expenses: IRecord[]): Promise<void> => {
        try {
            await AsyncStorage.setItem('@expenses', JSON.stringify(expenses));
            fnSetAllExpenses(expenses);
        } catch (e) {
            console.log('Error al actualizar gastos')
        }
    }

    const removeRecords = async (): Promise<void> => {
        try {
            const result = await AsyncStorage.removeItem('@expenses');
            console.log('records eliminados', result)
        } catch (e) {
            // error reading value
        }
    }

    const removeCategories = async (): Promise<void> => {
        try {
            await AsyncStorage.removeItem('@categories');
            console.log('borrados')
        } catch (e) {
            // error reading value
        }
    }

    return {
        getExpenses,
        saveExpense,
        refreshExpenses
    }
}