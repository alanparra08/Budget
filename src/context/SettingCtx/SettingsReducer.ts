import { ISettings } from "../../interfaces/interfacesIndex";
import { SettingActions } from "../Types";

export const SettingsReducer = (state: ISettings, action: SettingActions): ISettings => {
    switch (action.type) {
        case 'Save':
            return {
                ...state,
                user: action.payload.user,
                displayBy: action.payload.displayBy,
                theme: action.payload.theme,
                language: action.payload.language,
                budget: action.payload.budget,
            }
        default:
            return state
    }
}