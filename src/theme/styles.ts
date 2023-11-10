import { StyleSheet } from 'react-native'
import { color } from './color'

const _content = {
    marginTop: 15,
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 4,
    borderWidth: 0.5,
    backgroundColor: '#fff',
    elevation: 1
}

export const card = StyleSheet.create({
    simple: {
        ..._content,
        borderWidth: 0.5,
        borderColor: color.border
    },
    leftRed: {
        ..._content,
        borderTopWidth: 0.5,
        borderTopColor: color.border,
        borderRightWidth: 0.5,
        borderRightColor: color.border,
        borderBottomWidth: 0.5,
        borderBottomColor: color.border,
        borderLeftWidth: 10,
        borderLeftColor: color.orangeLight
    }
});