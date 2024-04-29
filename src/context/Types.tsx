import { ICategory, IExpensesCategory, IRecord, ISettings } from "../interfaces/interfacesIndex";

export type BudgetActions =
    { type: 'SetCategories', payload: ICategory[] } |
    { type: 'SetOneCategory', payload: ICategory } |
    { type: 'SetCategoriesFiltered', payload: IExpensesCategory[] } |
    { type: 'SetAllExpenses', payload: IRecord[] } |
    { type: 'SetOneExpense', payload: IRecord } |
    { type: 'SetExpensesFiltered', payload: IRecord[] } |
    { type: 'SetTotalExpensesFiltered', payload: number | null }

export type SettingActions =
    { type: 'Save', payload: ISettings }