import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Picker } from "@react-native-picker/picker"
import { color } from "../theme/appStyle"

interface Props {
  label: string;
  legend: string;
  data: any;
  value: string;
  event: (item: string) => void;
}

const AP_PickerList = (props: Props): JSX.Element => {
  return (
    <>
      <Text style={{ fontSize: 16 }}>{props.label}</Text>
      <View style={css.container}>
        <Picker
          selectedValue={props.value}
          onValueChange={itemValue => props.event(itemValue)}
          mode={"dialog"}
        >
          <Picker.Item
            label={props.legend}
            value={null}
            style={{ fontSize: 17 }}
          />
          {
            props.data.map((item: any) => (
              <Picker.Item
                key={item.key}
                label={item.value}
                value={item.key}
                style={{ fontSize: 17 }}
              />
            ))
          }
        </Picker>
      </View>
    </>
  )
}

const css = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 50,
    borderWidth: 0.4,
    borderColor: color.inputBorder,
    marginVertical: 5,
    borderRadius: 4,
    justifyContent: "center"
  }
})

export default AP_PickerList