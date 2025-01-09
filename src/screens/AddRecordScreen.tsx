import React, { useState, useEffect } from "react"
import { View, ScrollView } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParams } from "../navigator/Navigator"
import { useExpense } from "../hooks/useExpense"
import { cardStyle } from "../theme/appStyle"
import { MainLayout } from "../layouts/MainLayout"
import ErrorMessage from "../components/ErrorMessage"
import CustomAlert from "../components/CustomAlert"
import OptionButtons from "../components/OptionButtons"
import AP_Input from "../components/AP_Input"
import AP_Picker from "../components/AP_Picker"
import AP_PickerList from "../components/AP_PickerList"
import AP_RadioButton from "../components/AP_RadioButton"
import AP_Switch from "../components/AP_Switch"

interface Props extends StackScreenProps<RootStackParams, "AddRecordScreen"> { };

const AddRecordScreen = ({ navigation, route }: Props): JSX.Element => {
  const { params: editExpense } = route as any | null;
  const { categories, emptyFields, showAlert, entity, categoryEdit, create } = useExpense(editExpense);
  const [entrie, setEntrie] = useState<boolean>(false)
  const [isEntry, setIsEntry] = useState<boolean>(true);

  const handleDate = (newDate: any): void => {
    entity[1]({
      ...entity[0],
      register: newDate
    })
  }

  const handleAlert = () => {
    showAlert[1](false)
    navigation.goBack()
    // navigation.navigate('HomeScreen')
  }

  const toggleSwitch = () => setIsEntry(!isEntry);


  return (
    <MainLayout title='Registrar gasto'>
      <ScrollView showsVerticalScrollIndicator={false}>
        {emptyFields[0] && <ErrorMessage message="Llenar los campos correctamente" eClose={() => emptyFields[1](false)} />}

        <View style={{ ...cardStyle.white }}>
          <AP_PickerList label="CATEGORÍA" legend="Seleccionar categoría"
            data={categories}
            value={entity[0].category}
            event={item => entity[1]({ ...entity[0], category: item })}
          />

          <AP_Input label='DESCRIPCIÓN'
            valueText={entity[0].description}
            change={val => entity[1]({ ...entity[0], description: val })}
          />

          <AP_Switch label="TIPO" options={["INGRESO", "EGRESO"]} />
          <AP_Input label='CANTIDAD'
            icon='logo-usd'
            valueText={entity[0].amount?.toString()}
            inputType='numeric'
            change={val => entity[1]({ ...entity[0], amount: val })}
          />

          <AP_Picker valueDate={entity[0].register} event={(newDate) => handleDate(newDate)} />
          {/* <AP_Picker valueDate={entity[0].register} event={(newDate) => handleDate(newDate)} /> */}

          <OptionButtons
            tPrimary={entity[0].id ? 'Editar' : 'Guardar'}
            ePrimary={create}
            tSecondary="Cancelar"
            eSecondary={() => navigation.goBack()}
          />
        </View>

        <CustomAlert
          message='Información guardada correctamente'
          visible={showAlert[0]}
          hideAlert={handleAlert}
        />
      </ScrollView>
    </MainLayout>
  )
};

export default AddRecordScreen;