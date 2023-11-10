import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { color } from '../theme/color';

interface SwipeProps {
    onEdit:() => void;
    onDelete:() => void;
}

const SwipeOptions = ({onEdit, onDelete}: SwipeProps) => (
    <View style={{flex: 1 }}>
        <TouchableOpacity style={[css.buttons, css.btnLeft]} activeOpacity={0.7} onPress={onEdit}>
            <Text style={css.btnText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[css.buttons, css.btnRight]} activeOpacity={0.7} onPress={onDelete}>
            <Text style={css.btnText}>Eliminar</Text>
        </TouchableOpacity>
    </View>
  )

const css = StyleSheet.create({
    buttons: {
        position: 'absolute',
        height: '90%',
        // height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        paddingHorizontal: 10
    },
    btnLeft: {
        // right: 78,
        right: 83,
        backgroundColor: color.primary,
    },
    btnRight: {
        right: 5,
        backgroundColor: color.danger,
    },
    btnText: {
        fontSize: 15,
        color: '#fff'
    }
})

export default SwipeOptions