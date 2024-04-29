import { StyleSheet } from "react-native"
import { color } from "./color"

export const badge = StyleSheet.create({
    green: {
        fontSize: 16,
        borderRadius: 15,
        paddingVertical: 3,
        paddingHorizontal: 10,
        color: color.white,
        backgroundColor: color.green
    },
    skin: {
        fontSize: 16,
        borderRadius: 15,
        paddingVertical: 3,
        paddingHorizontal: 10,
        backgroundColor: color.skin
    }
})