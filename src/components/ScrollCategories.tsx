import React, { useContext } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import currencyFormatter from 'currency-formatter'
import { BudgetContext } from '../context/BudgetContext'
import { banner, text } from '../theme/theme'
import { IExpensesCategory } from '../interfaces/interfacesIndex'

interface CategoryProps {
    category: IExpensesCategory;
}

const ScrollCategories = () => {
    const { state: { categoriesFiltered } } = useContext(BudgetContext);
    const router = useNavigation<any>()

    const CategoryExpense = ({ category }: CategoryProps) => (
        <TouchableOpacity
            activeOpacity={0.8}
            style={css.cardCategory}
            onPress={() => router.navigate('ExpenseByCategoryScreen', { category })}
        >
            <View>
                <Text style={text.normal}>{category.value}</Text>
                <Text style={text.amount}>
                    {currencyFormatter.format(category.total, { code: 'USD' })}
                </Text>
            </View>
        </TouchableOpacity>
    )

    return (
        <View>
            <Text style={{ ...text.title, marginTop: 15, marginLeft: 10, marginBottom: -5 }}>Categoria de Gastos</Text>
            <FlatList
                horizontal
                // style={{ marginHorizontal: 8 }}
                showsHorizontalScrollIndicator={false}
                data={categoriesFiltered}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => <CategoryExpense category={item} />}
            />
        </View>
    )
}

const css = StyleSheet.create({
    cardCategory: {
        ...banner.content,
        padding: 10,
        // marginLeft: 3,
        // marginRight: 0
        marginHorizontal: 3
    }
})

export default ScrollCategories