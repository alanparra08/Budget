import { StyleSheet } from "react-native"
import { color } from "./color"

const badgeModel = {
    fontSize: 16,
    borderRadius: 15,
    paddingVertical: 3,
    paddingHorizontal: 10
}

export const badge = StyleSheet.create({
    success: {
        ...badgeModel,
        color: color.white,
        backgroundColor: color.green
    },
    primary: {
        ...badgeModel,
        color: '#fff',
        backgroundColor: color.primary
    
    },
    danger: {
        ...badgeModel,
        color: color.white,
        backgroundColor: color.dangerLight
    },
    skin: {
        ...badgeModel,
        backgroundColor: color.skin
    }
});

export const badgeLeft = StyleSheet.create({
    success: {
        // ...badgeModel,
        fontSize: 16,
        paddingRight: 10,
        borderRightWidth: 5,
        borderRightColor: color.dangerLight

    }
})