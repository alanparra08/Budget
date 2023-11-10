import React from 'react'
import { View, Modal, Dimensions } from 'react-native'
import { color } from '../theme/color';

const { width, height } = Dimensions.get('screen');

interface ModalProps {
    children: any;
    orientation?: 'center' | 'right' | 'bottom';
    modalVisible: boolean;
}

const AP_Modal = ({ children, orientation, modalVisible }: ModalProps) => {
    let styles = {};
    switch (orientation) {
        case 'center':
            styles = {
                flex: 1,
                justifyContent: 'center'
            }
            break;
        case 'right':
            styles = {
                position: 'absolute',
                top: 0,
                right: 0,
                width: width * 0.65,
                height,
                padding: 20,
                backgroundColor: 'white'
            }
            break;
        case 'bottom':
            styles = {
                position: 'absolute',
                bottom: 0,
                width,
                maxHeight: 420,
                paddingHorizontal: 10,
                paddingVertical: 25,
                borderBottomWidth: 1,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderColor: color.border,
                backgroundColor: 'white'
            }
            break;
        default:
            break;
    }

    return (
        <Modal transparent visible={modalVisible} animationType='fade' >
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }} >
                <View {...styles} >
                    {children}
                </View>
            </View>
        </Modal>
    )
}

export default AP_Modal