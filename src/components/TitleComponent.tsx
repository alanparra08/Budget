
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { flex, text } from '../theme/theme'

interface Props {
    title: string;
    returnPage?: string;
}

export const TitleComponent = ({ title, returnPage = 'HomeScreen' }: Props) => {
    const navigation = useNavigation<any>()

    return (
        <View style={css.titleContainer}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate(returnPage)}
            >
                <Icon name='arrow-back-outline' size={30} color='black' />
            </TouchableOpacity>
            <Text style={{ ...text.title, marginLeft: 20 }}>{title}</Text>
        </View>
    )
}

const css = StyleSheet.create({
    titleContainer: {
        ...flex.row,
        marginTop: 20,
        marginLeft: 10
    }
})