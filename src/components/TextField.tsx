import React from 'react'
import { Text } from 'react-native'

interface TextProps {
    display: string;
    color?:  string;
    size?:   number;
    noBold?: boolean;
    bold?:   boolean;
}

const TextField = (props: TextProps) => {
    const { display, color = 'black', size = 16, noBold, bold } = props

    return (
        <Text
            style={{
                color,
                fontSize: size,
                fontWeight: noBold ? '300' : bold ? '500' : '400'
            }}
        >
            {display}
        </Text>
    )
}

export default TextField