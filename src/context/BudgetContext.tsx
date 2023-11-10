import { useReducer, createContext } from 'react';
import { ICategory, IExpensesCategory, IRecord } from '../interfaces/interfacesIndex';
import { myExpenses } from '../util/myExpenses';
import { getTotalBy, getSumTotalCategories } from '../util';
import { BudgetReducer } from './BudgetReducer';

export interface IBudgateState {
    categories: ICategory[];
    categoriesFiltered: IExpensesCategory[];
    expenses: IRecord[];
    expensesFiltered: IRecord[];
    totalExpensesFiltered: number | null;
}

export interface AuthContextProps {
    state: IBudgateState;
    fnSetCategories: (categories: ICategory[]) => void;
    fnSetOneCategory: (category: ICategory) => void;
    fnSetCategoriesFiltered(records: IRecord[]): void;
    fnSetAllExpenses: (records: IRecord[]) => void;
    fnSetOneExpense: (record: IRecord) => void;
    fnSetExpensesFiltered: (record: IRecord[]) => void;
    fnSetTotalExpensesFiltered: (record: IRecord[]) => void;
}

export const BudgetContext = createContext({} as AuthContextProps);

const initState: IBudgateState = {
    categories: [],
    categoriesFiltered: [],
    expenses: [],
    expensesFiltered: [],
    totalExpensesFiltered: null,
}

export const BudgetProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(BudgetReducer, initState);

    const fnSetCategories = (categories: ICategory[]): void => {
        dispatch({ type: 'SetCategories', payload: categories });
    }

    const fnSetOneCategory = (category: ICategory): void => {
        dispatch({ type: 'SetOneCategory', payload: category });
    }

    const fnSetCategoriesFiltered = (expenses: IRecord[]): void => {
        const _expenses = myExpenses.getBy.fifteen(expenses)
        const _totalBalance: IExpensesCategory[] = getSumTotalCategories(state.categories, _expenses);
        dispatch({ type: 'SetCategoriesFiltered', payload: _totalBalance });
    }

    const fnSetAllExpenses = (expenses: IRecord[]): void => {
       dispatch({ type: 'SetAllExpenses', payload: expenses });
    }

    const fnSetOneExpense = (expenses: IRecord): void => {
        dispatch({ type: 'SetOneExpense', payload: expenses });
    }

    const fnSetExpensesFiltered = (expenses: IRecord[]): void => {
        const _expenses = myExpenses.getBy.fifteen(expenses)
        // const _expenses = myExpenses.getBy.month(2023, 10, expenses)
        dispatch({ type: 'SetExpensesFiltered', payload: _expenses })
    }

    const fnSetTotalExpensesFiltered = (expenses: IRecord[]): void => {
        const expensesFifteen = myExpenses.getBy.fifteen(expenses)
        const totalAmount = getTotalBy(expensesFifteen);
        dispatch({ type: 'SetTotalExpensesFiltered', payload: totalAmount })
    }

    return (
        <BudgetContext.Provider value={{
            state,
            fnSetCategories,
            fnSetOneCategory,
            fnSetCategoriesFiltered,
            fnSetAllExpenses,
            fnSetOneExpense,
            fnSetExpensesFiltered,
            fnSetTotalExpensesFiltered
        }}>
            {children}
        </BudgetContext.Provider>
    )
};