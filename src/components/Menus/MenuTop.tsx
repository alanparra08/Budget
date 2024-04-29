import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import { color, flexStyle } from "../../theme/appStyle"
import { AP_IconButton } from "../AP_Buttons"
import AP_Modal from "../AP_Modal"
import MenuRight from "./MenuRight"

const MenuTop = () => {
    const [modal, setModal] = useState<boolean>(false)

    return (
        <View style={css.container}>
            <AP_IconButton icon="home-outline" iconColor="#fff" />
            <AP_IconButton icon="menu-outline" size={38} iconColor="#fff" event={() => setModal(true)} />

            <AP_Modal
                children={<MenuRight closeModal={() => setModal(false)} />}
                orientation="right"
                modalVisible={modal}
            />
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        ...flexStyle.row_between,
        paddingTop: 8,
        paddingBottom: 3,
        paddingHorizontal: 10,
        backgroundColor: color.green
    }
})

export default MenuTop