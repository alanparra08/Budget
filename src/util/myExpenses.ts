import { IRecord } from "../interfaces/interfacesIndex"
import { takeYear, takeMonth, takeDay, takeDate } from './getter'

const { yyyy, mm, dd } = takeDate(new Date().toString());

export const myExpenses = {
    getBy: {
        day: (month: number, day: number, year: number, expenses: IRecord[]): IRecord[] => {
            return expenses.filter(x =>
                takeYear(x.register) === year
                && takeMonth(x.register) === month + 1
                && takeDay(x.register) === day)
        },
        fifteen: (expenses: IRecord[]): IRecord[] => {
            if ((dd >= 30 && dd <= 31) || (dd >= 1 && dd <= 14)) {
                const previous = expenses.filter(e =>
                    takeYear(e.register) === yyyy
                    && takeMonth(e.register) === mm && takeDay(e.register) >= 30 && takeDay(e.register) <= 31
                )
                return expenses.filter(e =>
                    takeYear(e.register) === yyyy
                    && (takeMonth(e.register) === mm + 1 && takeDay(e.register) >= 1 && takeDay(e.register) <= 14)
                ).concat(previous)
            }

            return expenses.filter(e =>
                takeYear(e.register) === yyyy
                && takeMonth(e.register) === mm + 1
                && (takeDay(e.register) >= 15 && takeDay(e.register) <= 29)
            )
        },
        fifteenn: (expenses: IRecord[]): IRecord[] => {
            if (dd >= 30 && dd <= 31) {
                return expenses.filter(e =>
                    new Date(e.register).toLocaleDateString() >= new Date(yyyy, mm + 1, 30).toLocaleDateString() &&
                    new Date(e.register).toLocaleDateString() <= new Date(yyyy, mm + 1, 31).toLocaleDateString())
            }

            if (dd >= 1 && dd <= 14) {
                return expenses.filter(e =>
                    new Date(e.register).toLocaleDateString() >= new Date(yyyy, mm, 1).toLocaleDateString()
                    && new Date(e.register).toLocaleDateString() <= new Date(yyyy, mm, 9).toLocaleDateString()
                )
            }

            return expenses.filter(e =>
                new Date(e.register).toLocaleDateString() >= new Date(yyyy, mm, 15).toLocaleDateString() &&
                new Date(e.register).toLocaleDateString() <= new Date(yyyy, mm, 29).toLocaleDateString())
        },
        month: (month: number, year: number, expenses: IRecord[]): IRecord[] => {
            return expenses.filter(x => takeYear(x.register) === year && takeMonth(x.register) === month + 1)
        },
        year: (year: number, expenses: IRecord[]): IRecord[] => {
            return expenses.filter(x => takeYear(x.register) === year)
        },
        category: (expenses: IRecord[], category: string): IRecord[] => {
            return expenses.filter(exp => exp.category === category)
        }
    },
    countBy: {
        month: (month: number, year: number, expenses: IRecord[]): number => {
            return expenses
                .filter(x => takeYear(x.register) === year && takeMonth(x.register) === month + 1).length
        },
        year: (year: number, expenses: IRecord[]): number => {
            return expenses.filter(x => takeYear(x.register) === year).length
        }
    },
    sumBy: {
        fifteen: (expenses: IRecord[]) => {
            const fifteen = myExpenses.getBy.fifteen(expenses)
            const sum = fifteen
                .reduce((sum: number, { amount }) => sum + Number(amount), 0);
        },
        month: (month: number, year: number, expenses: IRecord[]): number => {
            return expenses
                .filter(x => takeYear(x.register) === year && takeMonth(x.register) === month + 1)
                .reduce((sum: number, { amount }) => sum + Number(amount), 0);
        },
        year: (year: number, expenses: IRecord[]): number => {
            return expenses
                .filter(x => takeYear(x.register) === year)
                .reduce((sum: number, { amount }) => sum + Number(amount), 0);
        }
    }
}