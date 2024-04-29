import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { flexStyle, textStyle } from "../theme/appStyle"
import { AP_LinkButton } from './AP_Buttons'

interface TitleProps {
  label: string;
  labelLink?: string;
  event: () => void;
}

export const TitleAndLink = (props: TitleProps): JSX.Element => {
  const { label, labelLink, event } = props

  return (
    <View style={css.container}>
      <Text style={textStyle.title}>{label}</Text>
      {labelLink && <AP_LinkButton label={labelLink} event={event} />}
    </View>
  )
}

const css = StyleSheet.create({
  container: {
    ...flexStyle.row_between,
    marginTop: 20,
    marginBottom: -5,
    marginHorizontal: 15
  }
})