import React , { useRef } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardType } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { color, inputStyle } from "../theme/appStyle"

interface Props {
    label?: string;
    holder?: string;
    valueText: any;
    inputType?: KeyboardType;
    focus?: boolean;
    length?: number;
    icon?: string;
    change: (text: any) => void;
}

const AP_input = (props: Props) => {
    const {
        label, holder, valueText, inputType = 'default', focus = false, length = 50, icon = '', change
    } = props

    const textInputRef = useRef<TextInput>(null);

    const clearInput = () => {
        change('')
        textInputRef.current?.focus()
    }


    const RemoveIcon = () => {
        if (valueText) {
            return (
                <TouchableOpacity onPress={clearInput} style={{...css.iconStyle, right: 10}} activeOpacity={0.5}>
                    <Icon name='close-outline' size={25} color={color.inputBorder} />
                </TouchableOpacity>
            )
        }
    }

    const LeftIcon = (): JSX.Element => <Icon name={icon} style={{...css.iconStyle, left: 10}} size={25} color={color.primary} />

    return (
        <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 16 }}>{label}</Text>
            <View>
                {icon && <LeftIcon />}
                <TextInput
                    autoFocus={focus}
                    ref={textInputRef}
                    style={{
                        ...css.input,
                        paddingLeft: icon ? 45 : 15
                    }}
                    maxLength={length}
                    selectionColor={color.inputText}
                    value={valueText}
                    onChangeText={val => change(val)}
                    keyboardType={inputType}
                    placeholder={holder}
                />
                <RemoveIcon />
            </View>
        </View>
    )
}

const css = StyleSheet.create({
    iconStyle: {
        position: 'absolute',
        top: 22,
        color: color.primary
    },
    input: {
        ...inputStyle.input,
        paddingRight: 45
    }
})

export default AP_input