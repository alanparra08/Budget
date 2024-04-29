import React from 'react'
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native'
import { color, flexStyle } from '../theme/appStyle'
import { AP_IconButton } from './AP_Buttons'

interface Props {
  children: any,
  closeModal: () => void
}

const Card = ({ children, closeModal }: Props): JSX.Element => (
  <SafeAreaView style={css.container}>
    <View style={css.header}>
      <Text style={css.title}>Registros</Text>
      <AP_IconButton icon="close-outline" iconColor='white' size={33} event={closeModal} />
    </View>

    <View style={css.body}>{children}</View>
  </SafeAreaView>
)

const css = StyleSheet.create({
  container: { width: Dimensions.get('screen').width * .90 },
  body: { height: 500, backgroundColor: "#FFF"},
  header: {
    ...flexStyle.row_between,
    paddingLeft: 15,
    paddingRight: 10,
    paddingVertical: 10,
    backgroundColor: color.green,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  title: {
    fontSize: 20,
    color: 'white'
  }
})

export default Card