import React from 'react'
import { View, Text, Modal, Dimensions } from 'react-native'
import { cardStyle } from "../theme/appStyle"

const { width, height } = Dimensions.get('screen');

interface ModalProps {
    children: JSX.Element;
    orientation?: 'center' | 'right' | 'bottom';
    modalVisible: boolean;
}

const AP_Modal = ({ children, orientation = 'center', modalVisible }: ModalProps) => {
    let styles = {};
    switch (orientation) {
        case 'center':
            styles = {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }
            break;
        case 'right':
            styles = {
                position: 'absolute',
                top: -15,
                right: -10,
                width: width * 0.70,
                height: height * .91,
                ...cardStyle.white,
                padding: 0
            }
            break;
        case 'bottom':
            styles = {
                position: 'absolute',
                bottom: 10,
                width: width * .95,
                ...cardStyle.white,
                paddingHorizontal: 25,
                borderRadius: 10
            }
            break;
        default:
            break;
    }

    return (
        <Modal transparent visible={modalVisible} animationType='fade' >
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)' }} >
                <View {...styles}>
                    {children}
                </View>
            </View>
        </Modal>
    )
}

export default AP_Modal