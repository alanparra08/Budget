import { StyleSheet } from 'react-native';
import { color } from './color';

export const text = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '500'
    },
    subtitle: {
        fontSize: 17,
        fontWeight: '500',
        color: color.black
    },
    normal: { fontSize: 16 },
    center: { textAlign: 'center' },
    money: { fontSize: 18 },
    secondary: {
        fontSize: 15,
        color: color.secondary,
        // color: color.black,
        fontWeight: '400'
    },
    amount: {
        fontSize: 15,
        borderRadius: 4,
        color: color.primary
    },
    link: {
        fontSize: 16,
        color: color.primary
    },
    topRight: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        padding: 7,
        fontSize: 15,
        borderTopLeftRadius: 4,
        color: '#fff',
        backgroundColor: 'black'
    },
    error: {
        fontSize: 17,
        marginLeft: 10,
        color: color.danger,
    }
});

export const flex = StyleSheet.create({
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rowBetweenBaseline: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rowAround: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    column: {
        flexDirection: 'column'
    }
});

const general_content = {
    marginTop: 15,
    marginHorizontal: 10,
    padding: 20,

    borderRadius: 4,
    borderWidth: 0.3,
    borderColor: color.border,
    backgroundColor: 'white',
    elevation: 1
}

export const banner = StyleSheet.create({
    content: {
        ...general_content
    },
    error: {
        ...general_content,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: color.danger
    },
    rowItem: {
        ...flex.rowBetweenBaseline,
        // padding: 10,
        paddingVertical: 5,
        backgroundColor: 'white',

        // marginBottom: 5,
        // borderBottomWidth: 1,
        // borderBottomColor: color.border,
        // borderWidth: 0.3,
        // borderColor: color.border,
        // padding: 15,
        // borderRadius: 8,
        // elevation: 1
    },
    constentWidth: {
        marginTop: 15,
        padding: 15,
        backgroundColor: 'white'
    },
    input: {
        height: 50,
        borderWidth: 0.4,
        borderColor: color.inputBorder,
        marginVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 4,
        fontSize: 16,
        color: color.inputText
    },
})