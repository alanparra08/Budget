import { StyleSheet } from "react-native"
import { color } from "./color"

export const inputStyle = StyleSheet.create({
    input: {
        marginTop: 10,
        height: 50,
        borderWidth: 0.4,
        borderColor: color.inputBorder,
        borderRadius: 4,
        fontSize: 17,
        color: color.inputText
    }
});


{/* <SelectList
    data={categories}
    save='key'
    setSelected={(cat: any) => entity[1]({ ...entity[0], category: cat })}
    defaultOption={{ key: entity[0].category, value: categoryEdit[0] }}
    search={false}
    placeholder='Seleccionar categoría'
    inputStyles={{ fontSize: 17 }}
    boxStyles={{ opacity: 0.7, borderWidth: 0.6, borderRadius: 4, borderColor: color.inputBorder, marginVertical: 8 }}
    dropdownTextStyles={{ fontSize: 16, color: color.inputText }}
    dropdownStyles={{ marginTop: 0, borderWidth: 0.5, borderRadius: 4, borderColor: color.inputBorder }}
/> */}