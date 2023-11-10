import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { color } from '../theme/color'
import { useButtons } from '../hooks/useButtons'

interface Props {
    title?: string;
    tPrimary: string;
    ePrimary: () => void;
    tSecondary?: string;
    eSecondary?: () => void;
    bgPrimaryLight?: boolean;
    bgSecondaryLight?: boolean;
    squares?: boolean;
    row?: boolean;
}

const ButtonsGroup = (props: Props) => {
    const { title, tPrimary, ePrimary, tSecondary, eSecondary, row } = props;
    const { primaryButton, primaryText, secondaryButton, secondaryText } = useButtons(props)

    return (
        <View style={{marginTop: 10}}>
            {title && <Text style={css.title}>{title}</Text>}
            <View style={{
                flexDirection: row ? 'row' : 'column',
                justifyContent: row ? 'space-between' : 'center'
            }}>
                <TouchableOpacity activeOpacity={0.7} onPress={ePrimary} style={primaryButton} >
                    <Text style={primaryText}>
                        {tPrimary}
                    </Text>
                </TouchableOpacity>

                {tSecondary &&
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={eSecondary}
                        style={secondaryButton}
                    >
                        <Text style={secondaryText}>
                            {tSecondary}
                        </Text>
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
    // button: {
    //     marginTop: 10,
    //     padding: 10,
    //     borderWidth: 0.5,
    //     borderRadius: 30,
    //     borderColor: color.border,
    //     elevation: 1
    // },
    // buttonText: {
    //     fontSize: 16,
    //     textAlign: 'center'
    // }
})

export default ButtonsGroup;