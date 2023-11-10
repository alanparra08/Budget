import React from 'react'
import { View, Text } from 'react-native'
import currencyFormatter from 'currency-formatter'
import { banner, flex, text } from '../theme/theme'
import { color } from '../theme/color';

interface Props {
    money: number;
    description: string;
    children?: any;
}

const CardWhole = ({ money, description, children }: Props) => (
    <View style={banner.constentWidth}>
        {/* <Text style={text.topRight}>2023</Text> */}
        <Text style={{ fontSize: 35, fontWeight: '500', color: color.primary }}>
            {currencyFormatter.format(money, { code: 'USD' })}
        </Text>
        <Text style={text.secondary}>{description}</Text>
        {children}
    </View>
)

export default CardWhole