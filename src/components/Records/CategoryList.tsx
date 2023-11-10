import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import { ICategory } from '../../interfaces/interfacesIndex'
import { banner, text } from '../../theme/theme'
import { BudgetContext } from '../../context/BudgetContext'
import SwipeOptions from '../SwipeOptions'
import ItemSeparator from '../ItemSeparator'

interface CategoryProps { category: ICategory }

const CategoryList = () => {
    const { state: { categories } } = useContext(BudgetContext);

    const editCategory = (id: string): void => alert(`edit expense ${id}`)
    const deleteCategory = (id: string): void => alert(`delete expense ${id}`)

    const CategoryItem = ({ category }: CategoryProps) => (
        // <View style={{ ...banner.rowItem, paddingVertical: 13 }}>
        <View style={{ paddingTop: 7, paddingBottom: 9, backgroundColor: 'white' }}>
            <Text style={text.normal}>{category.value}</Text>
        </View>
    )

    return (
        <SwipeListView
            style={{ marginTop: 10 }}
            disableRightSwipe
            data={categories}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <CategoryItem key={item.key} category={item} />}
            renderHiddenItem={({ item }) => (
                <SwipeOptions
                    onEdit={() => editCategory(item.key)}
                    onDelete={() => deleteCategory(item.key)} />
            )}
            rightOpenValue={-148}
            ItemSeparatorComponent={() => <ItemSeparator />}
        />
    )
}

export default CategoryList