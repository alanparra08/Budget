import { StyleSheet } from "react-native"
import { color } from "./color"

export const textStyle = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "500",
        color: color.black
    },
    subtitle: {
        fontSize: 17,
        fontWeight: "500",
        color: color.black
    },
    secondary: {
        fontSize: 16,
        fontWeight: "300",
        color: color.secondary
    },
    link: {
        fontSize: 16,
        color: color.primary
    },
    amount: {
        fontSize: 15,
        color: color.primary
    }
})