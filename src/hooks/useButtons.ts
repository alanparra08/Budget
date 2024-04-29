import { StyleSheet } from "react-native"
import { color } from "../theme/appStyle"

interface Props {
    bgPrimaryLight?: boolean;
    bgSecondaryLight?: boolean;
}

export const useButtons = (props: Props) => {
    const { bgPrimaryLight, bgSecondaryLight } = props

    const displayFlex = {
        flexDirection: "column",
        justifyContent: "center"
    }

    const primaryButton = {
        ...css.button,
        backgroundColor: bgPrimaryLight ? "white" : color.green
    }

    const primaryText = {
        ...css.buttonText,
        color: bgPrimaryLight ? color.black : "white"
    }

    const secondaryButton = {
        ...css.button,
        backgroundColor: bgSecondaryLight ? "white" : "#ebecee",
        // backgroundColor: 'white',
        // borderWidth: 0.8,
        // borderColor: color.green
    }

    const secondaryText = {
        ...css.buttonText,
        color: color.black
    }

    return {
        displayFlex,
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
        padding: 10,
        borderRadius: 25
    },
    buttonText: {
        fontSize: 17,
        // fontWeight: '500',
        textAlign: "center"
    }
})