import { format } from "date-fns";
import { IRecord } from "../interfaces/interfacesIndex"
import { takeYear, takeMonth, takeDate } from './getter'

const { yyyy, mm, dd } = takeDate();

export const myExpenses = {
    getBy: {
        month: (year: number, month: number, expenses: IRecord[]): IRecord[] => {
            return expenses
                .filter(x => takeYear(x.register) === year && takeMonth(x.register) === month)
        },
        year: (year: number, expenses: IRecord[]) => {
            return expenses .filter(x => takeYear(x.register) === year)
        },
        fifteen: (expenses: IRecord[]): IRecord[] => {
            if (dd >= 30 && dd <= 31) {
                return expenses.filter(e =>
                    e.register >= format(new Date(yyyy, mm, 30), 'MM/dd/yyyy') &&
                    e.register <= format(new Date(yyyy, mm, 31), 'MM/dd/yyyy'))
            }

            if (dd >= 1 && dd <= 14) {
                return expenses.filter(e =>
                    (e.register >= format(new Date(yyyy, mm, 1), 'MM/dd/yyyy') &&
                        e.register <= format(new Date(yyyy, mm, 14), 'MM/dd/yyyy')) ||

                    (e.register >= format(new Date(yyyy, mm - 1, 30), 'MM/dd/yyyy') &&
                        e.register <= format(new Date(yyyy, mm - 1, 31), 'MM/dd/yyyy')))
            }

            return expenses.filter(e =>
                e.register >= format(new Date(yyyy, mm, 15), 'MM/dd/yyyy') &&
                e.register <= format(new Date(yyyy, mm, 29), 'MM/dd/yyyy'))
        },
        category_fifteen: (expenses: IRecord[], category: string) => {
            const fifteen = myExpenses.getBy.fifteen(expenses)
            return fifteen.filter(x => x.category === category)
        },
        category_monthly: (expenses: IRecord[], category: string, month: number): IRecord[] => {
            const fifteen = myExpenses.getBy.fifteen(expenses)
            return fifteen.filter(x => x.category === category &&
                takeMonth(x.register) === month)
        }
    },
    countBy: {
        year: (year: number, expenses: IRecord[]): number => {
            return expenses.filter(x => takeYear(x.register) === year).length
        },
        month: (year: number, month: number, expenses: IRecord[]): number => {
            return expenses
                .filter(x => takeYear(x.register) === year && takeMonth(x.register) === month).length
        }
    },
    sumBy: {
        year: (year: number, expenses: IRecord[]): number => {
            return expenses
                .filter(x => takeYear(x.register) === year)
                .reduce((sum: number, { amount }) => sum + Number(amount), 0);
        },
        month: (year: number, month: number, expenses: IRecord[]): number => {
            return expenses
                .filter(x => takeYear(x.register) === year && takeMonth(x.register) === month)
                .reduce((sum: number, { amount }) => sum + Number(amount), 0);
        },
        fifteen: (expenses: IRecord[]) => {
            const fifteen = myExpenses.getBy.fifteen(expenses)
            const sum = fifteen
            .reduce((sum: number, { amount }) => sum + Number(amount), 0);
            console.log('suma', sum)
        }
    }
}