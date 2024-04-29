import { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SettingsContext } from '../context/SettingCtx/SettingsContext';
import { ISettings } from '../interfaces/interfacesIndex';

export const useConfig = () => {
    const { fnSetSettings } = useContext(SettingsContext);

    const getSettings = async () => {
        try {
            const settings = await AsyncStorage.getItem('@settings_budget');
            if (settings !== null) {
                fnSetSettings(JSON.parse(settings));
            }
        } catch (e) {
            // ...
        }
    }

    const setSettings = async (settings: ISettings) => {
        try {
            await AsyncStorage.setItem('@settings_budget', JSON.stringify(settings));
            fnSetSettings(settings)
        } catch (e) {
            // ...
        }
    }

    return {
        getSettings,
        setSettings
    }
}