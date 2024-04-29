import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { color } from '../theme/appStyle'

interface RadioProps {
    label: string;
    active: boolean;
    short?: boolean | null;
    event: () => void;
}

const AP_RadioButton = ({ label, active, short, event }: RadioProps): JSX.Element => {
    const iconStyle = {
        // name: active ? 'checkmark-circle-outline' : 'radio-button-off-outline',
        name: active ? 'checkmark-outline' : '',
        color: active ? color.primary : color.border
    }

    return (
        <TouchableOpacity onPress={event} activeOpacity={0.5}
            style={{
                ...css.radioButton,
                backgroundColor: active ? 'white' : '#f1f1f3',
                width: short ? '48%' : '100%',
                borderWidth: active ? 0.5 : 0,
                borderColor: active ? color.primary : '#ebecee',
                justifyContent: "center"
            }}
        >
            <Icon name={iconStyle.name} size={25} color={iconStyle.color} />
            <Text style={{
                ...css.text,
                marginLeft: active ? 8 : 0,
                color: active ? color.primary : color.border
            }}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const css = StyleSheet.create({
    radioButton: {
        marginBottom: 5,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        // marginLeft: 10
    }
})

export default AP_RadioButton