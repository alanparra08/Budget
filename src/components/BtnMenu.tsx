import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BtnMenu = (props: any): JSX.Element => {
    return (
        <TouchableOpacity
            onPress={()=> {props.showDrawerMenu()}}
            activeOpacity={0.7}
            style={{ position: 'absolute', top: -10, right: 0 }}
        >
            <Icon name='menu-outline' size={40} />
        </TouchableOpacity>
    );
};

export default BtnMenu;