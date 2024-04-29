import { useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BudgetContext } from "../context/BudgetContext";
import { ICategory } from "../interfaces/interfacesIndex";

export const useCategoryService = () => {
    const {
        state: { categories },
        fnSetOneCategory, fnSetCategories } = useContext(BudgetContext);

    const removeCategory = async () => {
        try {
            const result = await AsyncStorage.removeItem('@categories');
            console.log('categorias eliminadas', result)
        } catch (e) {
            console.log('Error al cargar categorías')
        }
    }

    const getCategories = async (): Promise<void> => {
        try {
            const result = await AsyncStorage.getItem('@categories');
            if (result !== null) {
                fnSetCategories(JSON.parse(result));
            }
        } catch (e) {
            console.log('Error al cargar categorías')
        }
    }

    const saveCategory = async (newCategory: ICategory): Promise<void> => {
        try {
            const allCategories = [newCategory, ...categories]
            await AsyncStorage.setItem('@categories', JSON.stringify(allCategories));
            fnSetOneCategory(newCategory);
        } catch (e) {
            console.log('Error al registrar categoría')
        }
    }

    const refreshCategories = async (allCategories: ICategory[]): Promise<void> => {
        try {
            await AsyncStorage.setItem('@categories', JSON.stringify(allCategories));
            fnSetCategories(allCategories);
        } catch (e) {
            console.log('Error al actualizar categoría')
        }
    }

    return {
        categories,
        getCategories,
        saveCategory,
        refreshCategories
    }
}