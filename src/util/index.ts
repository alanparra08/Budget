import { ICategory, IExpensesCategory, IMenuList, IRecord } from "../interfaces/interfacesIndex";
import { takeDate } from "./getter";

export const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

export const CONFIG_SETTINGS_LIST: IMenuList[] = [
  { id: 'set01', name: 'Registrar gasto', icon: 'card-outline', screen: 'AddRecordScreen' },
  { id: 'set02', name: 'Categorías', icon: 'list-outline', screen: 'AddCategoryScreen' },
  { id: 'set03', name: 'Tarjetas', icon: 'card-outline', screen: 'CardsScreen' },
  { id: 'set04', name: 'Configuraciones', icon: 'settings-outline', screen: 'SettingsScreen' },
  { id: 'set05', name: 'Consultas por año', icon: 'stats-chart-outline', screen: 'GraphicScreen' },
  { id: 'set06', name: 'Inficadores financieros', icon: 'bar-chart-sharp', screen: 'DetailExpenseScreen' },
  { id: 'set07', name: 'Buscar', icon: 'search-outline', screen: 'FindScreen' }
]

const hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const getCharacter = (index: any) => {
  return hexCharacters[index]
}

export const generateJustOneColor = (): string => {
  let hexColorRep = "#"

  for (let index = 0; index < 6; index++) {
    const randomPosition = Math.floor(Math.random() * hexCharacters.length)
    hexColorRep += getCharacter(randomPosition)
  }
  return hexColorRep
}

export const getTotalBy = (records: IRecord[]): number => {
  const sum = records.reduce((sum: any, { amount }: any) => {
    const updatedSum = sum + Number(amount);
    return updatedSum;
  }, 0);

  return sum;
}

const doSum = (idCategory: string, records: IRecord[]): number => {
  const filtro = records.filter(rec => rec.category === idCategory);

  return filtro.reduce((sum: any, { amount }: any) => sum + Number(amount), 0);
}

export const getSumTotalCategories = (categories: ICategory[], records: IRecord[]): IExpensesCategory[] => {
  return categories.map(category => {
    return {
      key: category.key,
      value: category.value,
      // icon: category.icon,
      total: doSum(category.key, records)
    }
  }).filter(cat => cat.total > 0);
}


export const convertDate = (date: any) => {
  const myDate = new Date(date).toLocaleDateString()
  const today = new Date().toLocaleDateString()

  if (myDate === today) return 'Hoy'

  const { mm, dd, yyyy } = takeDate(date)
  const { mm: _mm, dd: _dd, yyyy: _yyyy } = takeDate(new Date().toString())

  if ((yyyy === _yyyy) && (mm === _mm)) {
    if (_dd === (dd + 1)) { return 'Ayer'; }
  }

  return `${dd} ${MONTHS[mm].substring(0, 3)}, ${yyyy}`

}