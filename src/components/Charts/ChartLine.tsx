import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { color, textStyle, flexStyle } from "../../theme/appStyle"
import { AP_LinkButton } from '../AP_Buttons'

const { width } = Dimensions.get('screen')

interface Props {
    title: string;
    eventTex?: string;
    event?: () => void;
}

const ChartLine = (props: Props): JSX.Element => {
    const { title, eventTex, event } = props

    return (
        <View style={{ marginTop: 25, marginHorizontal: 10 }}>
            <View style={{ ...flexStyle.row_between }}>
                <Text style={textStyle.subtitle}>{title}</Text>
                {(eventTex && event) && <AP_LinkButton label={eventTex} event={event} />}
            </View>

            <LineChart
                // bezier
                data={{
                    labels: ['Celu', 'Vale', 'Ropa', 'Desco', 'Comi', 'Manda', 'Trans', 'Salu'],
                    datasets: [
                        {
                            data: [100, 1554.15, 3197.50, 1282, 905, 561, 495.90, 600],
                            // color: () =>  color.black,
                            strokeWidth: 1
                        }
                    ]
                }}
                onDataPointClick={({ value }) => alert(value)}
                width={width * .95}
                height={320}
                yAxisLabel="$"
                verticalLabelRotation={30}
                chartConfig={{
                    // backgroundColor: "#e26a00",
                    backgroundGradientFrom: 'white', //#fb8c00
                    backgroundGradientTo: 'white', //#ffa726
                    decimalPlaces: 0,
                    // color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    color: (opacity = 1) => color.dangerLight,
                    labelColor: () => color.primary,
                    propsForDots: { r: "4", stroke: color.dangerLight }
                }}
                style={{
                    marginTop: 8,
                    borderRadius: 4,
                    // borderWidth: 0.5,
                    // borderColor: color.border
                }}
            />
        </View>
    )
}

export default ChartLine