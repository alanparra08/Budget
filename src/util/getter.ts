import { format } from "date-fns"
import { IRecord } from "../interfaces/interfacesIndex"

export const takeYear = (date: string): number => {
    return Number(format(new Date(date), 'MM/dd/yyyy').substring(6, 10))
}

export const takeMonth = (date: string): number => {
    return Number(format(new Date(date), 'MM/dd/yyyy').substring(0, 2))
}

export const takeDate = () => {
    return {
        yyyy: new Date().getUTCFullYear(),
        mm: new Date().getUTCMonth(),
        dd: new Date().getDate()
    }
}

export const noRepeatingYears = (expenses: IRecord[]): number[] => {
    const singleYears: number[] = []

    expenses.forEach(item => {
        const year = takeYear(item.register)
        if (!singleYears.includes(year)) {
            singleYears.push(year)
        }
    });

    return singleYears.reverse()
}