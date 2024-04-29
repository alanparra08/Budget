import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { color, textStyle } from "../../theme/appStyle"

interface Props {
    secondaryText: string;
    mainText: string;
    mt?: number;
    borde?: boolean;
}

const CurrentInfo = ({ secondaryText, mainText, mt = 15, borde = true }: Props) => {
    let infoStyle = {}

    if (borde) {
        infoStyle = {
            borderBottomWidth: 0.5, borderBottomColor: color.border, paddingBottom: 12
        }
    }

    return (
        // <View style={{ borderBottomWidth: 0.5, borderBottomColor: color.border, paddingBottom: 12, marginTop: mt }}>
        <View style={{...infoStyle, marginTop: mt}}>
            <Text style={textStyle.secondary}>{secondaryText}</Text>
            <Text style={css.amount}>{mainText}</Text>
        </View>
    )
}

const css = StyleSheet.create({
    amount: {
        fontSize: 25,
        color: color.black,
        fontWeight: '500'
    }
})

export default CurrentInfo