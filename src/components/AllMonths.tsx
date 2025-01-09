import React, { useContext } from "react"
import { View, Text, ScrollView, SafeAreaView, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import currencyFormatter from "currency-formatter"
import { color, cardStyle, flexStyle } from "../theme/appStyle"
import { MONTHS } from "../util"
import { useTempData } from "../hooks/useTempData"
import { myExpenses } from "../util/myExpenses"
import { BudgetContext } from "../context/BudgetContext"
import { AP_IconButton } from "./AP_Buttons"

interface IMonthGraphic {
    monthName: string;
    monthNumber: number;
    sumAmount: number;
}

const AllMonths = ({ year }: any): JSX.Element => {
    const { state: { expenses } } = useContext(BudgetContext)
    const { budget } = useTempData()
    const router = useNavigation<any>()

    const openMonthDetails = (month: number) => router.navigate("MonthDetailsScreen", { year, monthNumber: month })

    const MonthContent = ({ monthName, monthNumber, sumAmount }: IMonthGraphic): JSX.Element => {
        let monthStyle = {}
        if ((budget !== null) && (sumAmount > budget)) {
            monthStyle = {
                ...cardStyle.danger,
                marginTop: 8,
                padding: 15
            }
        } else {
            monthStyle = {
                ...cardStyle.white,
                marginTop: 8,
                padding: 15
            }
        }

        return (
            // <View style={{flexDirection: 'row', alignItems: 'center' }}>
            //     <Text style={{marginLeft: 10}}>good</Text>
            //     <View style={{...monthStyle, width: Dimensions.get('screen').width * .85}}>
            //         <View style={flexStyle.row_between}>
            //             <View style={{ flexDirection: "column" }}>
            //                 <Text style={{ fontSize: 17, color: color.secondary, fontWeight: "300" }}>{monthName}</Text>
            //                 <Text style={{ fontSize: 20 }}>
            //                     {currencyFormatter.format(sumAmount, { code: "USD" })}
            //                 </Text>
            //             </View>
            //             <AP_IconButton icon="chevron-forward-outline" size={23} iconColor={color.inputBorder} event={() => openMonthDetails(monthNumber)} />
            //         </View>
            //     </View>
            // </View>
            <View {...monthStyle}>
                <View style={flexStyle.row_between}>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontSize: 17, color: color.secondary, fontWeight: "300" }}>{monthName}</Text>
                        <Text style={{ fontSize: 20 }}>
                            {currencyFormatter.format(sumAmount, { code: "USD" })}
                        </Text>
                    </View>
                    <AP_IconButton icon="chevron-forward-outline" size={23} iconColor={color.inputBorder} event={() => openMonthDetails(monthNumber)} />
                </View>
            </View>
        )
    }

    return (
        <ScrollView style={{ marginTop: 5, height: Dimensions.get("screen").height * .65 }} showsVerticalScrollIndicator={false}>
            {/* <Text style={{ ...textStyle.subtitle, marginBottom: 8, marginLeft: 15, marginTop: 15 }}>{`Gastos ${year}`}</Text> */}
            <SafeAreaView style={{ marginBottom: 5 }}>
                {
                    MONTHS.map((month, index) => {
                        const sum = myExpenses.sumBy.month(index, year, expenses)
                        if (sum > 0) {
                            return (
                                <MonthContent
                                    key={index}
                                    monthName={month}
                                    monthNumber={index}
                                    sumAmount={sum}
                                />
                            )
                        }
                    })
                }
            </SafeAreaView>
        </ScrollView>
    )
}

export default AllMonths