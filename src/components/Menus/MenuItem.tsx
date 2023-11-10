import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { IMenuList } from '../../interfaces/interfacesIndex';
import { flex } from '../../theme/theme';
import { color } from '../../theme/color';

interface IMenuItem {
    item: IMenuList;
    eClick: (screnName: string) => void;
}

const MenuItem = ({ item, eClick }: IMenuItem): JSX.Element => {
    return (
        <TouchableOpacity
            onPress={() => eClick(item.screen)}
            activeOpacity={0.6}
            style={flex.row}
            key={item.id}
        >
            <Icon name={item.icon} size={25} style={{ opacity: 0.7 }} />
            <Text style={css.configItemText}>{item.name}</Text>
        </TouchableOpacity>
    )
}

const css = StyleSheet.create({
    configItemText: {
        fontSize: 17,
        marginLeft: 15
    }
})

export default MenuItem;