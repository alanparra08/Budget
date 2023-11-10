import { StyleSheet } from 'react-native'
import { color } from '../theme/color'

interface Props {
    bgPrimaryLight?: boolean;
    bgSecondaryLight?: boolean;
    squares?: boolean;
    row?: boolean;
}

export const useButtons = (props: Props) => {
    const { bgPrimaryLight, bgSecondaryLight, squares, row } = props

    const primaryButton = {
        ...css.button,
        width: row ? 165 : '100%',
        borderRadius: squares ? 4 : 20,
        backgroundColor: bgPrimaryLight ? 'white' : color.primary
    }

    const primaryText = {
        ...css.buttonText,
        color: bgPrimaryLight ? color.black : 'white'
    }

    const secondaryButton = {
        ...css.button,
        width: row ? 165 : '100%',
        borderRadius: squares ? 4 : 30,
        backgroundColor: bgSecondaryLight ? 'white' : color.btnSecondary
    }

    const secondaryText = {
        ...css.buttonText,
        color: bgSecondaryLight ? color.black : 'white'
    }

    return {
        primaryButton, primaryText,
        secondaryButton, secondaryText
    }
}

const css = StyleSheet.create({
    title: {
        fontSize: 20,
        marginBottom: 10
    },
    button: {
        marginTop: 10,
        padding: 8,
        borderWidth: 0.5,
        // borderRadius: 30,
        borderColor: color.border,
        elevation: 1
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center'
    }
})