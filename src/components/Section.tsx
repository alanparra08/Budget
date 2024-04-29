import React from 'react'
import { View, Text } from 'react-native'
import currencyFormatter from 'currency-formatter'
import { cardStyle, color, textStyle } from "../theme/appStyle"

interface Props {
    money: number;
    description: string;
    children?: any;
}

const Section = ({ money, description, children }: Props) => (
    <View style={cardStyle.section}>
        <Text style={textStyle.secondary}>{description}</Text>
        <Text style={{ fontSize: 35, fontWeight: '500', color: color.black }}>
            {currencyFormatter.format(money, { code: 'USD' })}
        </Text>

        {children}
    </View>
)

export default Section