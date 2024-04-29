import React from "react"
import { View, FlatList, Text, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { CONFIG_SETTINGS_LIST } from "../../util"
import { color, flexStyle } from "../../theme/appStyle"
import { AP_IconButton } from "../AP_Buttons"
import MenuItem from "./MenuItem"
import ItemSeparator from "../ItemSeparator"

interface Props { closeModal: () => void }

const MenuRight = ({ closeModal }: Props) => {
    const router = useNavigation<any>()

    const openScreen = (screen: string): void => {
        closeModal()
        router.navigate(screen)
    }

    const MenuHeader = (): JSX.Element => (
        <View style={css.headerContainer}>
            <Text style={css.headerTitle}>Configuraciones</Text>
            <AP_IconButton icon="close-outline" size={35} iconColor={color.black} event={() => closeModal()} />
        </View>
    )

    const Copy = () => (
        <View style={css.copy}>
            <Text style={css.copyText}>Alan Parra © 2024</Text>
        </View>
    )

    return (
    <View style={css.container}>
        <FlatList
            data={CONFIG_SETTINGS_LIST}
            style={{ paddingLeft: 25, paddingRight: 12 }}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={() => <MenuHeader />}
            renderItem={({ item }: any) => <MenuItem item={item} eClick={(screen: string) => openScreen(screen)} />}
            ItemSeparatorComponent={() => <ItemSeparator />}
        />
        <Copy />
    </View>
)
};

const css = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'space-between'
    },
    headerContainer: {
        ...flexStyle.row_between,
        marginTop: 20,
        marginBottom: 30
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: '500',
        color: color.black
    },
    copy: {
        backgroundColor: color.disabled,
        paddingVertical: 25,
        alignItems: 'center'
    },
    copyText: {
        fontSize: 18,
        // fontWeight: '500'
    }
})

export default MenuRight