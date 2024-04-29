import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { textStyle, flexStyle} from "../theme/appStyle"
import { AP_IconButton } from '../components/AP_Buttons';

interface LayoutProps {
    title: string;
    children: any;
    returnPage?: string;
}

export const MainLayout = ({ title, children, returnPage = 'HomeScreen' }: LayoutProps): JSX.Element => {
    const navigation = useNavigation<any>()

    const TitleContent = (): JSX.Element => (
        <View style={css.container}>
            <AP_IconButton
                icon='arrow-back-outline'
                iconColor='black'
                event={ ()=> navigation.navigate(returnPage)}
                size={30}
            />
            <Text style={css.title}>{title}</Text>
        </View>
    )

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TitleContent />
            {children}
        </SafeAreaView>
    )
}

const css = StyleSheet.create({
    container: {
        ...flexStyle.row,
        marginTop: 20,
        marginLeft: 10
    },
    title: {
        ...textStyle.title,
        color: "black",
        marginLeft: 20
    }
})