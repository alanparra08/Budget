import { format, getMonth, getDate, getYear } from "date-fns";
import { ICategory, IExpensesCategory, IMenuList, IRecord } from "../interfaces/interfacesIndex";
import { takeDate } from "./getter";

export const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

export const CONFIG_SETTINGS_LIST: IMenuList[] = [
  { id: 'set01', name: 'Registrar Egreso', icon: 'arrow-up-outline', screen: 'AddRecordScreen' },
  { id: 'set02', name: 'Categorías', icon: 'list-outline', screen: 'AddCategoryScreen' },
  { id: 'set04', name: 'Configuraciones', icon: 'cog-outline', screen: 'SettingsScreen' },
  { id: 'set05', name: 'Gastos anuales', icon: 'bar-chart-outline', screen: 'GraphicScreen' }
  // { id: 'set06', name: 'Respaldos', icon: 'server-outline', screen: 'GraphicScreen' }
]

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
  }).filter(category => category.total > 0);
}

export const convertDate = (date: string) => {
  const mm = getMonth(new Date(date));
  const dd = getDate(new Date(date));
  const yyyy = getYear(new Date(date));

  const today = format(new Date(), 'MM/dd/yyyy');
  const { yyyy: _yyyy, mm: _mm, dd: _dd } = takeDate();

  if (date === today) { return 'Hoy'; }

  if ((yyyy === _yyyy) && (mm === _mm)) {
    if (_dd === (dd + 1)) { return 'Ayer'; }
  }

  return `${dd} ${MONTHS[mm].substring(0,3)}, ${yyyy}`
}

// https://stackoverflow.com/questions/75674398/how-can-i-get-the-days-of-the-week-from-date-fns