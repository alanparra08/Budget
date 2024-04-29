import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { color, flexStyle } from "../theme/appStyle"

export interface ButtonGroupProps {
    text: string;
    event: () => void;
    active?: boolean;
}

interface Props {
    buttons: ButtonGroupProps[];
    align?: "left" | "right";
    mt?: number;
}

const ButtonGroup = ({ buttons, mt = 15 }: Props) => {
    const containerStyle = {
        ...flexStyle.row_center,
        flexWrap: "wrap",
        marginTop: mt
    }

    const buttonStyle = (button: any): {} => ({
        ...css.button,
        marginBottom: 5,
        borderColor: !button.active ? '#cdcdcd' : '#5aad70',
        backgroundColor: !button.active ? '#ebebeb' : color.green
    })

    const textStyle = (button: any) => ({
        ...css.buttonText,
        color: !button.active ? color.black : 'white',
    })


    return (
        <View {...containerStyle}>
            {
                buttons.map((button, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.4}
                        style={buttonStyle(button)}
                        onPress={button.event}
                    >
                        <Text style={textStyle(button)}>{button.text}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

export default ButtonGroup

const css = StyleSheet.create({
    button: {
        marginLeft: 4,
        padding: 10,
        borderRadius: 4,
        borderWidth: 0.5
    },
    buttonText: {
        fontSize: 16,
        color: color.black
    }
})
