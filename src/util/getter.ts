import { format } from "date-fns"
import { ICategory, IRecord } from "../interfaces/interfacesIndex"

export const takeYear = (date: string): number => Number(format(new Date(date), 'MM/dd/yyyy').substring(6, 10))
export const takeMonth = (date: string): number => Number(format(new Date(date), 'MM/dd/yyyy').substring(0, 2))
export const takeDay = (date: string): number => Number(format(new Date(date), 'MM/dd/yyyy').substring(3, 5))

export const takeDate = (date: string) => ({
        yyyy: new Date(date).getUTCFullYear(),
        mm: new Date(date).getUTCMonth(),
        dd: new Date(date).getDate()
})


export const noRepeatingYears = (expenses: IRecord[]): number[] => {
    const singleYears: number[] = [];

    expenses.forEach(item => {
        const year = takeYear(item.register)
        if (!singleYears.includes(year)) {
            singleYears.push(year)
        }
    });

    return singleYears.reverse()
}