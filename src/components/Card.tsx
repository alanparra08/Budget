import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import currencyFormatter from 'currency-formatter'
import { text } from '../theme/theme'

import { card } from '../theme/styles'
import { color } from '../theme/color'

interface Props {
    amount: number;
    display?: string;
    details?: string;
}

const Card = (props: Props): JSX.Element => {
    const { amount, display, details } = props

    return (
        <View style={{...card.simple, alignItems: 'center'}}>
            {details && <Text style={{...text.topRight, backgroundColor: color.btnSecondary}}>{details}</Text>}
            <Text style={{ fontSize: 35, color: color.black, fontWeight: '500' }}>
                {currencyFormatter.format(amount, { code: 'USD' })}
            </Text>
            {display && <Text style={text.secondary}>{display}</Text>}
        </View>
    )
}

export default Card