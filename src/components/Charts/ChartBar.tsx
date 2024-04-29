import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { BarChart } from 'react-native-chart-kit'
import { color } from '../../theme/color';

const { width } = Dimensions.get('screen')

const data = {
    labels: ['Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
        {
            data: [4377.30, 35603.90, 13715.71, 20121.66, 30480.68, 23955.35]
        }
    ]
};

const ChartBar = () => {
    return (
        <BarChart
            flatColor
            data={data}
            width={width * .95}
            height={220}
            yAxisLabel="$"
            yAxisSuffix=""
            chartConfig={{
                backgroundGradientFrom: "#fff",
                backgroundGradientTo: "#fff",
                barPercentage: 0.7,
                height: 500,
                fillShadowGradient: color.primary,
                fillShadowGradientOpacity: 1,
                decimalPlaces: 2,
                color: (opacity = 1) => color.primary,
                labelColor: (opacity = 1) => color.black,
                propsForBackgroundLines: {
                    strokeWidth: 0.3,
                    stroke: color.border,
                    strokeDasharray: "0"
                },
                propsForLabels: {
                    fontStyle: 'italic',
                    fontSize: 15,
                },
            }}
            verticalLabelRotation={30}
            style={{
                width: width * .95,
                marginTop: 15,
                marginBottom: 5,
                marginHorizontal: 10,
                elevation: 1,
                borderRadius: 4
            }}
        />

    )
}

export default ChartBar