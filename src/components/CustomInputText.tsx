import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { banner, text } from '../theme/theme'

interface InputProps {
    display: string;
    inputValue: string | number | null;
    maxLength: number;
    isNumber?: boolean;
    changeText: (text: string) => void;
}

const CustomInputText = (props: InputProps) => {
    const { display, inputValue, maxLength, isNumber, changeText } = props;

    return (
        <View style={{ marginBottom: 5 }}>
            <Text style={text.normal}>{display}</Text>
            <TextInput
                selectionColor='#A6ACAF'
                style={banner.input}
                defaultValue={inputValue?.toString()}
                maxLength={maxLength}
                keyboardType={isNumber ? 'decimal-pad' : 'default'}
                onChangeText={(val) => changeText(val)}
            />
        </View>
    )
}

export default CustomInputText