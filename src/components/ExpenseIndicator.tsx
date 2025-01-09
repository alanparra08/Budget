import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import currencyFormatter from "currency-formatter"
import { useNavigation } from "@react-navigation/native"
import { useHome } from "../hooks/useHome"
import { color, textStyle, flexStyle, cardStyle } from "../theme/appStyle"

type DisplayQtyProps = {
    display: string,
    qty: string
}

const ExpenseIndicator = (): JSX.Element => {
    const { totalExpense, titleExpense } = useHome()
    const router = useNavigation<any>()

    const onGoDetails = () => router.navigate("DetailExpenseScreen")

    const DisplayQty = ({ display, qty }: DisplayQtyProps): any => {
        return (
            <View style={{ flexDirection: 'row', columnGap: 5 }}>
                <Text>{display}</Text>
                <Text>{qty}</Text>
            </View>
        )
    }

    return (
        <>
            <View style={css.container}>
                <Text style={css.title}>Gasto {titleExpense}</Text>
                <Text style={css.amount}>
                    {currencyFormatter.format(Number(totalExpense), { code: "USD" })}
                </Text>
                {/* <View style={{  alignSelf: 'flex-end', marginTop: 15 }}>
                    <DisplayQty display="Ingresos:" qty="$90,000" />
                </View> */}
            </View>

            <View style={{ alignItems: 'center', marginTop: 15 }}>
                <TouchableOpacity onPress={onGoDetails} activeOpacity={0.8} style={css.detailButton}>
                    <Icon name="bar-chart-sharp" size={24} color="#fff" />
                    <Text style={css.detailButtonText}>Consultar Detalles</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const css = StyleSheet.create({
    container: {
        ...cardStyle.white,
        alignItems: 'center'
    },
    title: {
        marginBottom: -5,
        fontSize: 16,
        fontWeight: '300',
        color: color.secondary,
    },
    amount: {
        fontSize: 40,
        fontWeight: "500",
        color: color.black
    },
    detailButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: color.primary,
        paddingVertical: 6,
        paddingHorizontal: 25,
        borderRadius: 25,
        borderColor: color.border
    },
    detailButtonText: {
        marginLeft: 15,
        fontSize: 17,
        fontWeight: '300',
        textAlign: 'center',
        color: '#fff'
    }
})

export default ExpenseIndicator