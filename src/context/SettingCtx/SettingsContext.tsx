import { createContext, useReducer } from 'react';
import { SettingsReducer } from './SettingsReducer';
import { ISettings } from '../../interfaces/interfacesIndex';

interface SettingsContextProps {
    state: ISettings;
    fnSetSettings: (settings: ISettings) => void;
}

export const SettingsContext = createContext({} as SettingsContextProps);

const initSettings: ISettings = {
    user: '',
    perMonth: false,
    limitAmount: null
}

export const SettingsProvider = ({children}: any) => {

    const [state, dispatch] = useReducer(SettingsReducer, initSettings);

    const fnSetSettings = (settings: ISettings): void => {
        dispatch({type: 'Set', payload: settings});
    }

    return (
        <SettingsContext.Provider value={{
            state,
            fnSetSettings
        }}>
            {children}
        </SettingsContext.Provider>
    )
}