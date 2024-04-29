export interface IMenuList {
    id: string;
    name: string;
    icon: string;
    screen: string;
}

export interface ISettings {
    user: string | null;
    budget: number | null;
    displayBy: string | null;
    theme: string | null;
    language: string | null;
}

export interface ICategory {
    key: string;
    value: string;
    // icon: string;
}

export interface IExpensesCategory extends ICategory {
    total: number;
}

export interface IRecord {
    id: string;
    description: string;
    category: string;
    amount: number;
    register: string;
}

export enum EListType {
    EXPENSES = 'EXPENSES',
    CATEGORIES = 'CATEGORIES'
}

export interface IRecordList {
    title: string;
    listType: string;
    action?: () => void;
    actionTitle?: string;
}