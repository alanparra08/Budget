import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { StackScreenProps } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'
import { SelectList } from 'react-native-dropdown-select-list'
import { RootStackParams } from '../navigator/Navigator'
import { useExpense } from '../hooks/useExpense'
import { text, banner } from '../theme/theme'
import ErrorMessage from '../components/ErrorMessage'
import CustomAlert from '../components/CustomAlert'
import ButtonsGroup from '../components/ButtonsGroup'
import { convertDate } from '../util'
import { color } from '../theme/color'
import { MainLayout } from '../layouts/MainLayout'

interface Props extends StackScreenProps<RootStackParams, 'AddRecordScreen'> { };

const AddRecordScreen = ({ navigation, route }: Props): JSX.Element => {
  const { params: editExpense } = route as any | null
  const { categories, emptyFields, showAlert, entity, categoryEdit, create } = useExpense(editExpense);
  const [pickerVisible, setVisiblePicker] = useState<boolean>(false)
  const [selectedDate, setSelectedDate] = useState<string>(convertDate(new Date().toString()))

  const onChangeDate = (newDate: any) => {
    const { nativeEvent: { timestamp } } = newDate;
    setVisiblePicker(false)
    entity[1]({ ...entity[0], register: timestamp })

    setSelectedDate(convertDate(timestamp))
  }

  return (
    <MainLayout title='Registrar gasto'>
      {emptyFields[0] && <ErrorMessage message='Llenar los campos correctamente' />}

      <View style={banner.content}>
        <View style={{ marginBottom: 4 }}>
          <Text style={text.normal}>Categoría</Text>
          <SelectList
            data={categories}
            save='key'
            setSelected={(cat: any) => entity[1]({ ...entity[0], category: cat })}
            defaultOption={{ key: entity[0].category, value: categoryEdit[0] }}
            search={false}
            placeholder='Seleccionar categoría'
            inputStyles={{ fontSize: 16 }}
            boxStyles={{ opacity: 0.7, borderWidth: 0.6, borderRadius: 4, borderColor: color.inputBorder, marginVertical: 8 }}
            dropdownTextStyles={{ fontSize: 16, color: color.inputText }}
            dropdownStyles={{ marginTop: 0, borderWidth: 0.5, borderRadius: 4, borderColor: color.inputBorder }}
          />
        </View>

        <View style={{ marginBottom: 4 }}>
          <Text style={text.normal}>Descripción</Text>
          <TextInput
            value={entity[0].description}
            onChangeText={(val) => entity[1]({ ...entity[0], description: val })}
            selectionColor='#A6ACAF'
            style={banner.input}
          />
        </View>

        <View style={{ marginBottom: 4 }}>
          <Text style={text.normal}>Cantidad</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              keyboardType="decimal-pad"
              value={entity[0].amount?.toString()}
              onChangeText={(val: any) => entity[1]({ ...entity[0], amount: val })}
              selectionColor='#A6ACAF'
              style={{ flex: 1, ...banner.input, fontSize: 22, paddingRight: 50, color: color.primary }}
            />
            <Icon name='logo-usd' size={28} color={color.border} style={{ position: 'absolute', right: 10, top: 15, color: color.primary }} />
          </View>
        </View>

        <View style={{ marginBottom: 4 }}>
          <Text style={text.normal}>Fecha</Text>
          <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', alignItems: 'center' }} onPress={()=> setVisiblePicker(true)}>
            <TextInput
              editable={false}
              value={selectedDate}
              selectionColor='#A6ACAF'
              style={{ ...banner.input, flex: 1, paddingRight: 50 }}
            />
            <Icon name='calendar-outline' size={28} color={color.border} style={{ position: 'absolute', right: 10, top: 15, color: color.primary }} />
          </TouchableOpacity>
        </View>

        <ButtonsGroup
          tPrimary={entity[0].id ? 'Editar' : 'Guardar'}
          ePrimary={create}
          tSecondary="Cancelar"
          eSecondary={() => navigation.goBack()}
        />
      </View>

      {pickerVisible &&
        <DateTimePicker
          // testID='datetimepicker'
          display='default'
          timeZoneOffsetInMinutes={0}
          value={new Date()}
          mode='date'
          minimumDate={new Date(2023, 0, 1)}
          maximumDate={new Date()}
          onChange={newDate => onChangeDate(newDate)}
        />
      }

      <CustomAlert
        message='Información guardada correctamente'
        visible={showAlert[0]}
        hideAlert={() => {
          showAlert[1](false)
          navigation.navigate('HomeScreen')
        }}
      />
    </MainLayout>
  )
};

export default AddRecordScreen;