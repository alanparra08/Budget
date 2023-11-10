import { ISettings } from "../../interfaces/interfacesIndex";
import { SettingActions } from "../Types";

export const SettingsReducer = (state: ISettings, action: SettingActions): ISettings => {
    switch (action.type) {
        case 'Set':
            return {
                ...state,
                user: action.payload.user,
                perMonth: action.payload.perMonth,
                limitAmount: action.payload.limitAmount
            }
        default:
            return state
    }
}