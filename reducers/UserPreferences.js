const { act } = require("react-test-renderer");

import * as ActionTypes from "../actions/actionTypes";

import { accentColors } from "../defaults/accents";
import { acc } from "react-native-reanimated";
import { theme } from "../defaults/theme";

// Default initial state for UserPreferences
const initialState = {
    visibilityLevel: ActionTypes.visibilityLevels.EVERYONE,
    accentColor: {
        light: accentColors[0].lightHex,
        dark: accentColors[0].darkHex
    },
    userName: 'Awesome',
    userProfileIcon: 'caveman'
}

export const UserPreferences = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.VISIBILITY_CHANGED:
            return {
                visibilityLevel: action.payload,
                accentColor: state.accentColor,
                userName: state.userName,
                userProfileIcon: state.userProfileIcon
            };
        case ActionTypes.ACCENT_COLOR_CHANGED:
            var newColorScheme = {};
            for (var i = 0; i < accentColors.length; i++) {
                if (accentColors[i].name === action.payload) {
                    newColorScheme = {
                        light: accentColors[i].lightHex,
                        dark: accentColors[i].darkHex
                    }
                }
            }
            return {
                visibilityLevel: state.visibilityLevel,
                accentColor: newColorScheme,
                userName: state.userName,
                userProfileIcon: state.userProfileIcon
            }
        case ActionTypes.USER_INFO_CHANGED:
            console.log(action.payload.name);
            console.log(action.payload.icon);
            return {
                visibilityLevel: state.visibilityLevel,
                accentColor: state.accentColor,
                userName: action.payload.name,
                userProfileIcon: action.payload.icon
            }
        default:
            return state;
    }
}