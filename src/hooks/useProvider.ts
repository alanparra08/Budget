import { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ICategory, IRecord } from '../interfaces/interfacesIndex';
import { BudgetContext } from '../context/BudgetContext';

export const useProvider = () => {
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

    const getCategories = async (): Promise<void> => {
        try {
            const _categories = await AsyncStorage.getItem('@categories');
            if (_categories !== null) {
                fnSetCategories(JSON.parse(_categories));
            }
        } catch (e) {
            // error reading value
        }
    }

    const saveCategory = async (newCategory: ICategory): Promise<void> => {
        try {
            const allCategories = [newCategory, ...categories]
            await AsyncStorage.setItem('@categories', JSON.stringify(allCategories));
            fnSetOneCategory(newCategory);
        } catch (e) {
            // error reading value
        }
    }

    const getExpenses = async (): Promise<void> => {
        try {
            const _expenses = await AsyncStorage.getItem('@expenses');
            if (_expenses !== null) {
                fnSetAllExpenses(JSON.parse(_expenses));
            }
        } catch (e) {
            // error reading value
        }
    }

    const saveExpense = async (newExpense: IRecord): Promise<void> => {
        try {
            const _expenses = [newExpense, ...expenses]
            await AsyncStorage.setItem('@expenses', JSON.stringify(_expenses));
            fnSetOneExpense(newExpense);
        } catch (e) {
            // error reading value
        }
    }

    const refreshExpenses = async (expenses: IRecord[]): Promise<void> => {
        try {
            await AsyncStorage.setItem('@expenses', JSON.stringify(expenses));
            fnSetAllExpenses(expenses);
        } catch (e) {
            // error reading value
        }
    }

    const removeRecords = async (): Promise<void> => {
        try {
            await AsyncStorage.removeItem('@expenses');
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
        getCategories,
        saveCategory,
        getExpenses,
        saveExpense,
        refreshExpenses
    }
}