import React from "react"
import { StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { View, FlatList, Text } from "react-native"
import { CONFIG_SETTINGS_LIST } from "../../util"
import ItemSeparator from "../ItemSeparator"
import MenuItem from "./MenuItem"
import { flex, text } from "../../theme/theme"
import { AP_IconButton } from "../AP_Buttons"
import { color } from "../../theme/color"

interface Props {
    closeModal: () => void
}

const MenuRight = ({ closeModal }: Props) => {
    const router = useNavigation<any>()

    const openScreen = (screen: string): void => {
        closeModal()
        router.navigate(screen)
    }

    const MenuHeader = () => (
        <View style={{ ...flex.rowBetween, marginBottom: 25, marginTop: -5 }}>
            <Text style={{ ...text.title, color: "black" }}>Configuraciones</Text>
            <AP_IconButton iconName="close-outline" size={35} color="black" event={() => closeModal()} />
        </View>
    )

    return (
        <View style={{ padding: 5 }}>
            <FlatList
                data={CONFIG_SETTINGS_LIST}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={() => <MenuHeader />}
                renderItem={({ item }: any) => <MenuItem item={item} eClick={(screen: string) => openScreen(screen)} />}
                ItemSeparatorComponent={() => <ItemSeparator />}
            />
        </View>
    )
};

const css = StyleSheet.create({
    buttonClose: {
        position: 'absolute',
        right: 0,
        top: -5
    }
})

export default MenuRight