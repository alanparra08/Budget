import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { PieChart } from 'react-native-chart-kit'
import { generateJustOneColor } from '../../util';
import { textStyle, flexStyle } from "../../theme/appStyle"
import { color } from '../../theme/color';
import { AP_LinkButton } from '../AP_Buttons';


const { width } = Dimensions.get('screen')

const dataPie = [
    {
        name: "Celular",
        population: 100,
        color: generateJustOneColor(),
        legendFontColor: color.black,
        legendFontSize: 14
    },
    {
        name: "Valentina",
        population: 1554.15,
        color: generateJustOneColor(),
        legendFontColor: color.black,
        legendFontSize: 14
    },
    {
        name: "Ropa",
        population: 3197.50,
        color: generateJustOneColor(),
        legendFontColor: color.black,
        legendFontSize: 14
    },
    {
        name: "Desconocida",
        population: 1283,
        color: generateJustOneColor(),
        legendFontColor: color.black,
        legendFontSize: 14
    },
    {
        name: "Comida fuera",
        population: 1246.50,
        color: generateJustOneColor(),
        legendFontColor: color.black,
        legendFontSize: 14
    },
    {
        name: "Mandado",
        population: 1171,
        color: generateJustOneColor(),
        legendFontColor: color.black,
        legendFontSize: 14
    },
    {
        name: "Transporte",
        population: 1025.90,
        color: generateJustOneColor(),
        legendFontColor: color.black,
        legendFontSize: 14
    },
    {
        name: "Salud",
        population: 600,
        color: generateJustOneColor(),
        legendFontColor: color.black,
        legendFontSize: 14
    },
];

interface Props {
    title: string;
    eventTex?: string;
    event?: () => void;
}

const ChartPie = (props: Props): JSX.Element => {
    const { title, eventTex, event } = props

    return (
        <View style={{ marginTop: 15, marginLeft: 15, marginRight: 15 }}>
            <View style={{ ...flexStyle.row_between }}>
                <Text style={textStyle.subtitle}>{title}</Text>
                {(eventTex && event) && <AP_LinkButton label={eventTex} event={event} />}
            </View>

            <PieChart
                data={dataPie}
                width={width * .95}
                height={220}
                chartConfig={{
                    decimalPlaces: 0,
                    color: (opacity = 1) => `red`,
                }}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={'0'}
                center={[5, 0]}
            />
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        marginTop: 15,
        marginHorizontal: 10
    },
    title: {
        ...textStyle.subtitle
    }
})

export default ChartPie