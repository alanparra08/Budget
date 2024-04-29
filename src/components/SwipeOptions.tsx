import React from 'react'
import { View, StyleSheet } from 'react-native'
import { color } from "../theme/appStyle"
import { AP_IconButton } from './AP_Buttons';

interface SwipeProps {
    onEdit: () => void;
    onDelete: () => void;
}

const SwipeOptions = ({ onEdit, onDelete }: SwipeProps) => (
    <View style={{ flex: 1 }}>
        <View style={[css.buttons, css.btnLeft]}>
            <AP_IconButton icon='pencil-outline' size={30} iconColor={color.primary} event={onEdit} />
        </View>
        <View style={[css.buttons, css.btnRight]}>
            <AP_IconButton icon='trash-outline' size={30} iconColor={color.dangerLight} event={onDelete} />
        </View>
    </View>
)

const css = StyleSheet.create({
    buttons: {
        position: 'absolute',
        height: '80%',
        justifyContent: 'center',
        borderRadius: 4,
        marginTop: 4,
        // paddingHorizontal: 10
    },
    btnLeft: {
        // right: 83,
        // backgroundColor: color.primary,
        right: 43,
        backgroundColor: 'white',
    },
    btnRight: {
        right: 5,
        // backgroundColor: color.danger,
        backgroundColor: "white",
    }
})

export default SwipeOptions