import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { color, flexStyle, cardStyle } from "../theme/appStyle"
import { AP_IconButton } from './AP_Buttons'

interface Props {
    message: string;
    eClose?: () => void;
}

const ErrorMessage = ({ message, eClose }: Props): JSX.Element => {
    let errorStyle = { ...css.container}
    if (eClose) { errorStyle = { ...css.container, ...flexStyle.row_between } }

    return (
        <View {...errorStyle}>
            <View style={flexStyle.row_center}>
                <Icon name='alert-circle-outline' size={25} color={color.error} />
                <Text style={css.text}>{message}</Text>
            </View>
            {eClose && <AP_IconButton icon='close' iconColor={color.error} size={23} event={eClose} />}
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        ...cardStyle.alert,
        paddingTop: 12,
        paddingBottom: 10,
        paddingHorizontal: 15
    },
    text: {
        fontSize: 17,
        marginLeft: 8,
        color: color.error
    }
})

export default ErrorMessage