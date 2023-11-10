import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import { text } from '../theme/theme'

interface Props {
    display: string;
    event: () => void;
}

export const ButtonLink = ({display, event}: Props) => (
    <TouchableOpacity
        activeOpacity={0.7}
        onPress={event}
    >
        <Text style={{...text.link, fontSize: 14}}>{display}</Text>
    </TouchableOpacity>
)