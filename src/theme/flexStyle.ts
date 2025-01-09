import { StyleSheet } from "react-native";

export const flexStyle = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    row_between: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    row_arown: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    row_center: {
        flexDirection: "row",
        justifyContent: "center"
    },
    row_center_baseline: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    row_left: {
        flexDirection: "row",
        justifyContent: "flex-start"
    }
})