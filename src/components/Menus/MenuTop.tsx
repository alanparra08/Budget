import React, { useState } from "react"
import { View } from "react-native"
import { flex } from "../../theme/theme"
import { color } from "../../theme/color"
import AP_Modal from "../AP_Modal"
import { AP_IconButton } from "../AP_Buttons"
import MenuRight from "./MenuRight"

const MenuTop = () => {
    const [modal, setModal] = useState<boolean>(false)

    return (
        <>
            <View style={{ ...flex.rowBetween, padding: 10, backgroundColor: color.green }}>
                <AP_IconButton iconName="home-outline" color="#fff" />
                <AP_IconButton iconName="menu-outline" size={38} color="#fff" event={() => setModal(true)} />
            </View>

            <AP_Modal
                children={<MenuRight closeModal={() => setModal(false)} />}
                orientation='right'
                modalVisible={modal}
            />
        </>

    )
}

export default MenuTop