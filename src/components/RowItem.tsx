import React from 'react'
import { View, Text } from 'react-native'
import currencyFormatter from 'currency-formatter'
import { banner, text } from '../theme/theme'
import { convertDate } from '../util'

interface RowInfo {
  description: string;
  register: string;
  amount: number;
}

interface Props {
  info: RowInfo;
}

const RowItem = ( {info}: Props ): JSX.Element => {
  const { description, register, amount } = info
  return (
    <View style={banner.rowItem}>
      <View>
        <Text style={{ ...text.normal, maxWidth: 240 }}>{description}</Text>
        <Text style={{ ...text.secondary, fontSize: 14 }}>{convertDate(register)}</Text>
      </View>
      <Text style={text.amount}>
        {currencyFormatter.format(amount, { code: 'USD' })}
      </Text>
    </View>
  )
}

export default RowItem