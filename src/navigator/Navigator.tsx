
import HomeScreen from '../screens/HomeScreen'
import AddRecordScreen from '../screens/AddRecordScreen'
import AddCategoryScreen from '../screens/AddCategoryScreen'
import SettingsScreen from '../screens/SettingsScreen'
import { ICategory, IRecord } from '../interfaces/interfacesIndex'
import GraphicScreen from '../screens/GraphicScreen'
import MonthDetailsScreen from '../screens/MonthDetailsScreen'

import { createStackNavigator } from '@react-navigation/stack'
import ExpenseByCategoryScreen from '../screens/ExpenseByCategoryScreen'

export type RootStackParams = {
    HomeScreen: undefined;
    AddRecordScreen: { editExpense: IRecord }
    AddCategoryScreen: undefined
    SettingsScreen: undefined
    GraphicScreen: undefined
    MonthDetailsScreen: {year: number, monthNumber: number}
    ExpenseByCategoryScreen: {category: ICategory}
}
const Stack = createStackNavigator<RootStackParams>()

const Navigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false,
                // cardStyle: {
                //     backgroundColor: 'teal'
                // }
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="AddRecordScreen" component={AddRecordScreen} />
            <Stack.Screen name="AddCategoryScreen" component={AddCategoryScreen} />
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
            <Stack.Screen name="GraphicScreen" component={GraphicScreen} />
            <Stack.Screen name="MonthDetailsScreen" component={MonthDetailsScreen} />
            <Stack.Screen name="ExpenseByCategoryScreen" component={ExpenseByCategoryScreen} />
        </Stack.Navigator>
    )
};

export default Navigator