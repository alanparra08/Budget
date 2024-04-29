import { Text, FlatList, SafeAreaView, TouchableOpacity, View, StyleSheet } from "react-native"
import currencyFormatter from "currency-formatter"
import Icon from "react-native-vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native"
import { ICategory, IExpensesCategory } from "../interfaces/interfacesIndex"
import { color, cardStyle, textStyle } from "../theme/appStyle"

interface Props { categoryData: IExpensesCategory[] }

const ExpenseCategoryList = ({ categoryData }: Props) => {
    const router = useNavigation<any>()

    const CategoryIconComponent = (category: string): JSX.Element => {
        let iconName = ''
        switch (category) {
            case 'Mandado':
                iconName = 'bag-handle-outline'
                break;
            case 'Casa':
                iconName = 'home-outline'
                break;
            case 'Transporte':
                iconName = 'car-outline'
                break;
            case 'Membresías':
                iconName = 'id-card-outline'
                break;
            case 'Ropa / Calzado':
                iconName = 'shirt-outline'
                break;
            case 'Salud / Higiene':
                iconName = 'medkit-outline'
                break;
            case 'Salidas / Comida fuera':
                iconName = 'fast-food-outline'
                break;
            case 'Viajes':
                iconName = 'airplane-outline'
                break;
            case 'Otros gastos':
                iconName = 'help-outline'
                break;
        }

        return (<Icon style={{ marginRight: 8 }} name={iconName} size={18} color={color.secondary} />)
    }

    const onSeeExpenses = (category: ICategory) => router.navigate("ExpenseByCategoryScreen", { category })

    const ExpenseCategoryItem = (category: IExpensesCategory): JSX.Element => (
        <TouchableOpacity
            activeOpacity={0.8}
            style={css.container}
            onPress={() => onSeeExpenses(category)}
        >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                {CategoryIconComponent(category.value)}
                <Text style={css.description}>{category.value}</Text>
            </View>

            <Text style={css.total}>
                {currencyFormatter.format(category.total, { code: "USD" })}
            </Text>
        </TouchableOpacity>
    )

    return (
        <SafeAreaView style={{ marginTop: 20 }}>
            <Text style={css.title}>Categorías esta quincena</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categoryData}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => ExpenseCategoryItem(item)}
                style={{ marginHorizontal: 10 }}
            />
        </SafeAreaView>
    )
}

const css = StyleSheet.create({
    container: {
        ...cardStyle.round,
        marginTop: 5,
        marginBottom: 1,
        marginHorizontal: 3
    },
    title: {
        ...textStyle.title,
        marginBottom: 5,
        marginLeft: 15
    },
    description: {
        fontSize: 16,
        fontWeight: '300',
        color: color.secondary
    },
    total: {
        fontSize: 30,
        fontWeight: '500',
        color: color.black
    }
})

export default ExpenseCategoryList