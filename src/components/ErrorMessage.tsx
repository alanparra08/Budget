import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { color } from '../theme/color'
import { text, banner } from '../theme/theme'

interface Props {
    message: string
}

const ErrorMessage = ({message}: Props): JSX.Element => {
    return (
        <View style={banner.error}>
            <Icon name='alert-circle-outline' size={25} color={color.danger} />
            <Text style={text.error}>{message}</Text>
        </View>
    )
}

export default ErrorMessage