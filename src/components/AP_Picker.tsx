import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/Ionicons'
import { convertDate } from "../util"
import { color, inputStyle } from "../theme/appStyle"

interface Props {
    valueDate: string;
    event: (fecha: any) => void;
}

const AP_Picker = (props: Props): JSX.Element => {
    const { valueDate, event } = props
    const [visible, setVisible] = useState<boolean>(false)
    const [dtPicker, setDTPicker] = useState<string>()

    const handleDate = (tempDate: any): void => {
        setDTPicker(convertDate(tempDate))
        event(tempDate.toString())
        setVisible(false)
    }

    useEffect(() => {
        if (!valueDate) {
            setDTPicker(convertDate(new Date()))
        } else {
            setDTPicker(convertDate(valueDate))
        }
    }, [])

    return (
        <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 16 }}>FECHA</Text>
            <TouchableOpacity
                activeOpacity={0.7}
                style={{ flexDirection: 'row', alignItems: 'center' }}
                onPress={() => setVisible(true)}
            >
                <Icon name='calendar-outline' size={25} style={css.icon} />
                <TextInput
                    editable={false}
                    defaultValue={dtPicker}
                    selectionColor='#A6ACAF'
                    style={{ ...inputStyle.input, flex: 1, paddingLeft: 45 }}
                />
            </TouchableOpacity>

            {visible &&
                <DateTimePickerModal
                    isVisible={true}
                    mode="date"
                    onConfirm={(dt) => handleDate(dt)}
                    onCancel={() => setVisible(false)}
                // maximumDate={new Date()}
                />
            }
        </View>
    )
}

const css = StyleSheet.create({
    icon: {
        position: 'absolute',
        top: 20,
        left: 10,
        color: color.primary,
    }
})

export default AP_Picker