import React from "react"
import { View, Text, StyleSheet, Modal } from "react-native"
import { useNavigation } from "@react-navigation/native"
import currencyFormatter from "currency-formatter"
import { IRecord } from "../interfaces/interfacesIndex"
import { convertDate } from "../util"
import { useExpense } from "../hooks/useExpense"
import {color, badge, flexStyle, cardStyle} from "../theme/appStyle"
import { AP_IconButton } from "./AP_Buttons"

interface Props {
    item: IRecord;
    edit?: boolean;
}

const ExpenseListItem = ({ item, edit = false }: Props): JSX.Element => {
    const router = useNavigation<any>()
    const { remove } = useExpense(null)

    const onEditExpense = (expense: IRecord) => router.navigate("AddRecordScreen", { editExpense: expense })

    let itemStyle = {}
    if (edit) {
        itemStyle = {
            ...cardStyle.green,
            ...flexStyle.row_between,
            marginTop: 0,
            marginBottom: 8,
            padding: 12
        }
    } else {
        itemStyle = {
            ...flexStyle.row_between,
            padding: 8
        }
    }

    const EditView = () => (
        <View style={{
            flexDirection: "row",
            columnGap: 5,
            marginRight: 15
        }}>
            <AP_IconButton
                icon='pencil-outline'
                size={20}
                iconColor={color.primary}
                event={() => onEditExpense(item)}
            />
            <AP_IconButton
                icon='trash-outline'
                size={20}
                iconColor={color.dangerLight}
                event={() => remove(item.id)}
            />
        </View>
    )

    return (
        <View key={item.id} {...itemStyle}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                {edit && <EditView />}
                <View>
                    <Text style={{
                        ...itemCSS.description,
                        color: edit ? '#356c44' : 'black'
                    }}>
                        {item.description}
                    </Text>
                    <Text style={{ fontSize: 15, color: color.secondary, fontWeight: '300' }}>
                        {convertDate(item.register)}
                    </Text>
                </View>
            </View>
            <Text style={{
                ...itemCSS.total,
                backgroundColor: edit ? color.whitesmoke : color.skin
            }}>
                {currencyFormatter.format(item.amount, { code: "USD" })}
            </Text>
        </View >
    )
}

const itemCSS = StyleSheet.create({
    description: {
        fontSize: 16,
        maxWidth: 190,
        color: "#356c44",
    },
    total: {
        ...badge.skin,
        fontWeight: '500'
    },
})

export default ExpenseListItem