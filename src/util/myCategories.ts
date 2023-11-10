import { IRecord } from "../interfaces/interfacesIndex";
import { takeMonth } from "./getter";

export const myCategories = {
    getBy: {
        month: (/*year: number, month: number,*/ expenses: IRecord[]) => {
            // categorias regitradas el anio mes indicado
            expenses.forEach(element => {
                const month = takeMonth(element.register)
                console.log(month)
              });
        },
        fifteen: () => {

        }
    }
}