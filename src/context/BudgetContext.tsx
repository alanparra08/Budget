import { useReducer, createContext } from 'react';
import { ICategory, IExpensesCategory, IRecord } from '../interfaces/interfacesIndex';
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
    fnSetAllExpenses: (records: IRecord[]) => void;
    fnSetOneExpense: (record: IRecord) => void;
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

    const fnSetAllExpenses = (expenses: IRecord[]): void => {
       dispatch({ type: 'SetAllExpenses', payload: expenses });
    }

    const fnSetOneExpense = (expenses: IRecord): void => {
        dispatch({ type: 'SetOneExpense', payload: expenses });
    }

    return (
        <BudgetContext.Provider value={{
            state,
            fnSetCategories,
            fnSetOneCategory,
            fnSetAllExpenses,
            fnSetOneExpense
        }}>
            {children}
        </BudgetContext.Provider>
    )
};