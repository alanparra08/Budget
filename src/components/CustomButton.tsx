import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ButtonProps } from 'react-native'
import { color } from '../theme/color'
import { useButtons } from '../hooks/useButtons'
import { text } from '../theme/theme';

interface Props {
    title?: string;
    tPrimary: string;
    ePrimary: () => void;
    tSecondary?: string;
    eSecondary?: () => void;
    bgPrimaryLight?: boolean;
    bgSecondaryLight?: boolean;
    squares?: boolean;
    row?: boolean;
}

interface ButtonProps {
    title?: string;
    isOne?: boolean;
    textButton1: string;

    orientationOne?: 'flex-start' | 'center' | 'flex-end'
    bgColorPrimary?: 'white' | 'black'
}

const CustomButton = (props: ButtonProps) => {
    const { title, isOne, textButton1, orientationOne = 'flex-start', bgColorPrimary } = props;

    if (isOne) {
        return (
            <TouchableOpacity style={{
                alignSelf: orientationOne,
                padding: 8,
                backgroundColor: bgColorPrimary === 'black' ? color.primary : bgColorPrimary == 'white' ? 'white' : 'blue',
                borderRadius: 30,
                width: '100%',
                elevation: 1
            }}>
                <Text style={{
                    fontSize: 16,
                    textAlign: 'center',
                    color: bgColorPrimary === 'black' ? 'white' : 'black'
                }}>{textButton1}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity style={{ backgroundColor: 'red', padding: 10 }}>
            <Text>Default button</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;