import { View, TouchableOpacity, Text } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { color } from "../theme/appStyle"
import { IIconButtonProps, IOpenButton } from "../interfaces/IButtons";

export const AP_IconButton = ({ icon, size = 25, iconColor = color.black, disabled = false, event }: IIconButtonProps): JSX.Element => (
    <TouchableOpacity activeOpacity={0.5} onPress={event} disabled={disabled}>
        <Icon name={icon} size={size} color={iconColor} />
    </TouchableOpacity>
)

export const AP_CircleButton = ({ icon, color = '#6bb57f', size = 65, event }: IOpenButton) => (
    <View style={{ position: 'absolute', right: 25, bottom: 8 }}>
        <AP_IconButton icon={icon} iconColor={color} size={size} event={event} />
    </View>
)

export interface LinkButtonProps {
    label: string;
    fontSize?: number;
    mt?: number;
    orientation?: 'center' | 'right';
    event: () => void;
}

export const AP_LinkButton = ({ label, fontSize = 16, mt = 0, orientation, event }: LinkButtonProps): JSX.Element => (
    <TouchableOpacity activeOpacity={0.5} onPress={event} style={{ marginTop: mt }}>
        <Text style={{ fontSize, color: color.primary, textAlign: orientation }}>{label}</Text>
    </TouchableOpacity>
)
