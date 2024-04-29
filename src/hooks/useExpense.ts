import { useContext, useState, useEffect } from 'react'
import { Alert } from 'react-native'
import uuid from 'react-native-uuid'
import { useProvider } from './useProvider'
import { ICategory, IRecord } from '../interfaces/interfacesIndex'
import { BudgetContext } from '../context/BudgetContext'

export const useExpense = (editExpense: any) => {
    const { saveExpense, refreshExpenses } = useProvider()
    const { state: { expenses, categories } } = useContext(BudgetContext)
    const emptyFields = useState<boolean>(false)
    const showAlert = useState<boolean>(false)
    const entity = useState<IRecord>({ id: '', description: '', category: '', amount: 0, register: '' })
    const categoryEdit = useState<string>('')

    const _translateCategory = (idCategory: string): string => {
        const categoryName = categories.find(x => x.key === idCategory) as ICategory
        return categoryName.value
    }

    const _setEdit = (): void => {
        const { editExpense: { id, description, category, amount, register } } = editExpense;
        categoryEdit[1](_translateCategory(category))
        entity[1]({ id, description, category, amount, register })
    }

    const create = (): void => {
        const { description, category, amount } = entity[0]

        if (!category || description.trim() === '' || amount.toString() === '' || amount.toString() === '0') {
            emptyFields[1](true)
            return
        }
        emptyFields[1](false)

        // ** Edit */
        if (entity[0].id) {
            update()
            return
        }

        // ** New */
        const newExpense: IRecord = {
            id: uuid.v4().toString(),
            description,
            category,
            amount: Number(amount),
            //anio, mes-1, dia
            register: !entity[0].register ? new Date().toString() : entity[0].register
        }

        saveExpense(newExpense)
        showAlert[1](true)
    }

    const remove = (idExpense: string): void => {
        Alert.alert('Budget App', '¿Eliminar gasto?',
            [
                { text: 'Cancelar' },
                {
                    text: 'Aceptar',
                    onPress: () => {
                        const newExpenses = expenses.filter(x => x.id !== idExpense);
                        refreshExpenses(newExpenses);
                    }
                }
            ]);
    }

    const update = (): void => {
        const { id, description, category, amount, register } = entity[0]

        const newExpenses = expenses.map((item: IRecord) => {
            if (item.id === id) {
                return { ...item, description, category, amount, register }
            }
            return {
                ...item
            }
        }) as IRecord[];
        refreshExpenses(newExpenses);
        showAlert[1](true)
    }

    useEffect(() => {
        if (editExpense) { _setEdit() }
    }, [])

    return {
        categories,
        emptyFields,
        showAlert,
        entity,
        categoryEdit,
        create,
        remove,
        update
    }
}