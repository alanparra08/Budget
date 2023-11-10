import { IBudgateState } from "./BudgetContext";
import { BudgetActions } from "./Types";

export function BudgetReducer(state: IBudgateState, action: BudgetActions): IBudgateState {
    switch (action.type) {
        case 'SetCategories':
            return {
                ...state,
                categories: action.payload
            };
        case 'SetOneCategory':
            return {
                ...state,
                categories: [action.payload, ...state.categories]
            };
        case 'SetCategoriesFiltered':
            return {
                ...state,
                categoriesFiltered: action.payload
            };
        case 'SetAllExpenses':
            return {
                ...state,
                expenses: action.payload
            };
        case 'SetOneExpense':
            return {
                ...state,
                expenses: [action.payload, ...state.expenses]
            };
        case 'SetExpensesFiltered':
            return {
                ...state,
                expensesFiltered: action.payload
            };
        case 'SetTotalExpensesFiltered':
            return {
                ...state,
                totalExpensesFiltered: action.payload
            };
        default:
            return state;
    }
}