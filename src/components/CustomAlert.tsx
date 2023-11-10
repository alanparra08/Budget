import React from 'react'
import { View, Text } from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts'
import { color } from '../theme/color';

interface AlertProps {
    message: string;
    visible: boolean;
    hideAlert: () => void;
}

const CustomAlert = ({message, visible, hideAlert}: AlertProps) => {
    return (
        <AwesomeAlert
            show={visible}
            title="¡ Budget App !"
            message={message}
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            cancelText="Cancelar"
            confirmText="Continuar"
            confirmButtonColor={color.primary}
            onCancelPressed={() => hideAlert() }
            onConfirmPressed={() => hideAlert()}
            titleStyle={{
                marginTop: -15,
                color: color.primary,
                fontSize: 20
            }}
            messageStyle={{
                marginTop: 10,
                marginBottom: -5,
                fontSize: 16
            }}
            confirmButtonTextStyle={{
                fontSize: 16
            }}
        />
    )
}

export default CustomAlert