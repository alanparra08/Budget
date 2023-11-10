
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigator/Navigator';
import { BudgetProvider } from './src/context/BudgetContext';
import { SettingsProvider} from './src/context/SettingCtx/SettingsContext';

export default function App() {

  // const { state } = useContext(SettingsContext);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor='black' />

      <BudgetProvider>
      <SettingsProvider>
          <Navigator />
       </SettingsProvider>
      </BudgetProvider>
    </NavigationContainer>
  );
}
