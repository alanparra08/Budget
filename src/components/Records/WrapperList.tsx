import React from 'react'
import { View, Text, Dimensions, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'
import { flex, text } from '../../theme/theme'
import { EListType, IRecordList } from '../../interfaces/interfacesIndex'
import ExpenseList from './ExpenseList'
import CategoryList from './CategoryList'
import { ScrollView } from 'react-native-virtualized-view'

const { height } = Dimensions.get('screen')

const WrapperList = (props: IRecordList): JSX.Element => {
    return (
        <SafeAreaView
            style={{
                ...css.container,
                // flex: props.listType === EListType.EXPENSES ? 0 : 1,
                maxHeight: props.listType === EListType.EXPENSES
                    ? height * .70
                    : height * .83
            }}>
            <View style={{...flex.rowBetweenBaseline}}>
                <Text style={{ ...text.subtitle, marginBottom: 35 }} >
                    {props.title}
                </Text>
                {
                    props.action && (
                        <TouchableOpacity activeOpacity={0.7} onPress={props.action}>
                            <Text style={text.link}>{props.actionTitle}</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
            {
                props.listType === EListType.EXPENSES
                    ? <ExpenseList />
                    : <CategoryList />
            }
        </SafeAreaView>
    )
}

const css = StyleSheet.create({
    container: {
        marginTop: 25,
        paddingTop: 20,
        paddingBottom: 15,
        paddingHorizontal: 20,
        backgroundColor: 'white'
    }
})

export default WrapperList;