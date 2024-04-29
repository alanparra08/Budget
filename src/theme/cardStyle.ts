import { StyleSheet } from "react-native"
import { color } from "./color"

const round = {
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20
}

const card = {
    marginTop: 15,
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 4,
    borderWidth: 0.4,
    borderColor: color.border,
    backgroundColor: "#fff",
    elevation: 1
}

export const cardStyle = StyleSheet.create({
    white: { ...card },
    list: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        backgroundColor: "white"
    },
    section: {
        marginTop: 15,
        borderWidth: 0.5,
        borderColor: color.border,

        padding: 15,
        paddingLeft: 20,
        backgroundColor: 'white'
    },
    green: {
        ...card,
        borderWidth: 0,
        //borderColor: color.greenBorde,
        backgroundColor: color.greenLight
        //backgroundColor: "#e9f4ec"
    },
    danger: {
        ...card,
        borderColor: "#f5c6cb",
        backgroundColor: "#fcedee",
    },
    alert: {
        ...card,
        borderColor: "#f5c6cb",
        backgroundColor: '#f8d7da'
    },
    round: {
        ...card,
        ...round
    }
})