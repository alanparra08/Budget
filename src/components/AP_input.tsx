import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardType } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { banner, flex, text } from '../theme/theme'
import { color } from '../theme/color'

interface Props {
    display: string;
    placeholder?: string;
    valueText: string;
    inputType?: KeyboardType;
    change: (text: string) => void;
}

const AP_input = (props: Props) => {
    const { display, placeholder, valueText, inputType, change } = props

    return (
        <>
            <Text style={text.normal}>{display}</Text>
            <View style={flex.row}>
                <TextInput
                    style={css.input}
                    value={valueText}
                    onChangeText={val => change(val)}
                    keyboardType={inputType}
                    placeholder={placeholder}
                />
                {
                    valueText && (
                        <TouchableOpacity onPress={()=> change('')} style={css.btnRemove} activeOpacity={0.5}>
                            <Icon name='close-outline' size={30} style={css.icon} />
                        </TouchableOpacity>
                    )
                }

            </View>
        </>
    )
}

const css = StyleSheet.create({
    input: {
        ...banner.input,
        flex: 1,
        paddingRight: 40
    },
    btnRemove: {
        position: 'absolute',
        top: 15,
        right: 10
    },
    icon: {
        color: color.btnSecondary
    }
})

export default AP_input