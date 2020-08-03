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
    }
}

export const UserPreferences = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.VISIBILITY_CHANGED:
            return {
                visibilityLevel: action.payload,
                accentColor: state.accentColor
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
                accentColor: newColorScheme
            }
        default:
            return state;
    }
}