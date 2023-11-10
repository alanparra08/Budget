import React, { useContext } from 'react'
import { View, Text, ScrollView, StyleSheet, SafeAreaView, Dimensions } from 'react-native'
import currencyFormatter from 'currency-formatter'
import { useNavigation } from '@react-navigation/native'
import { banner, flex, text } from '../../theme/theme'
import { MONTHS } from '../../util'
import { myExpenses } from '../../util/myExpenses'
import { BudgetContext } from '../../context/BudgetContext'
import { ButtonLink } from '../ButtonLink'

interface IMonthGraphic {
    monthName: string;
    monthNumber: number;
    sumAmount: number;
}

const AllMonths = ({ year }: any): JSX.Element => {
    const { state: { expenses } } = useContext(BudgetContext)
    const router = useNavigation<any>()

    const openMonthDetails = (month: number) => router.navigate('MonthDetailsScreen', { year, monthNumber: month })

    const MonthGraphic = ({ monthName, monthNumber, sumAmount }: IMonthGraphic): JSX.Element => {
        return (
            <View style={css.graphic}>
                <View style={flex.rowBetweenBaseline}>
                    <View style={flex.column}>
                        <Text style={text.secondary}>{monthName}</Text>
                        <Text style={text.amount}>{currencyFormatter.format(sumAmount, { code: 'USD' })}</Text>
                    </View>
                    <ButtonLink display='Ver Todos' event={() => openMonthDetails(monthNumber)} />
                </View>
                {/* <View style={{ marginTop: 10, borderRadius: 10, backgroundColor: 'grey' }}>
                    <View style={{
                        backgroundColor: 'red',
                        width: '50%',
                        borderRadius: 10,
                    }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 12 }}>80%</Text>
                    </View>
                </View> */}
            </View>
        )
    }

    return (
        <ScrollView style={{ marginTop: 15, height: Dimensions.get('screen').height * .65 }} showsVerticalScrollIndicator={false}>
            <SafeAreaView style={{ marginBottom: 5 }}>
                {
                    MONTHS.map((month, index) => {
                        const sum = myExpenses.sumBy.month(year, (index+1), expenses)
                        if (sum > 0) {
                            return (
                                <MonthGraphic
                                    key={index}
                                    monthName={month}
                                    monthNumber={index + 1}
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

const css = StyleSheet.create({
    graphic: {
        ...banner.content,
        padding: 15,
        marginTop: 5
    }
})

export default AllMonths