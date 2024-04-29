import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { IOptionButtons } from '../interfaces/IButtons';
import { useButtons } from '../hooks/useButtons'

const OptionButtons = (props: IOptionButtons): JSX.Element => {
    const { title, tPrimary, ePrimary, tSecondary, eSecondary } = props;
    const { displayFlex, primaryButton, primaryText, secondaryButton, secondaryText } = useButtons(props)

    return (
        <View style={{ marginTop: 15 }}>
            {title && <Text style={css.title}>{title}</Text>}

            <View {...displayFlex}>
                <TouchableOpacity activeOpacity={0.7} onPress={ePrimary} style={primaryButton} >
                    <Text style={primaryText}>{tPrimary}</Text>
                </TouchableOpacity>

                {tSecondary &&
                    <TouchableOpacity activeOpacity={0.7} onPress={eSecondary} style={secondaryButton}>
                        <Text style={secondaryText}>{tSecondary}</Text>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const css = StyleSheet.create({
    title: {
        fontSize: 20,
        marginBottom: 8
    }
})

export default OptionButtons;