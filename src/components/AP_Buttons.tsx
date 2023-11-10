import { TouchableOpacity, Text, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { color } from "../theme/color";

interface PropsIconButton {
    iconName: string;
    size?: number;
    color?: string;
    event?: () => void;
}
export const AP_IconButton = (props: PropsIconButton) => {
    const { iconName, size = 25, color = 'black', event } = props;

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={event}
        >
            <Icon name={iconName} size={size} style={{ color: color }} />
        </TouchableOpacity>
    )
}

interface LinkButtonProps {
    buttonText: string;
    textSize?: number;
    event: () => void;
    iconName?: string;
    iconSize?: number;
    iconColor?: string;
}
export const AP_LinkButton = (props: LinkButtonProps) => {
    const { buttonText, textSize = 16, event, iconName, iconSize = 25, iconColor } = props;

    return (
        <TouchableOpacity activeOpacity={0.5} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginRight: 10, fontSize: textSize, color: color.primary }}>{buttonText}</Text>
            {iconName && <Icon name="cog-outline" size={iconSize} style={{ color: color.primary }} />}
        </TouchableOpacity>
    )
};