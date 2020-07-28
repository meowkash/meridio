const { ActionSheetIOS } = require("react-native");
const { act } = require("react-test-renderer");

import * as ActionTypes from "../actions/actionTypes";

// Default initial state for UserPreferences
const initialState = {
    visibilityLevel: ActionTypes.visibilityLevels.EVERYONE,
    accentColor: ActionTypes.accentColors.GREEN
}

export const UserPreferences = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.VISIBILITY_CHANGED:
            return {
                visibilityLevel: action.payload,
                accentColor: state.accentColor
            };
        case ActionTypes.ACCENT_COLOR_CHANGED:
            return {
                visibilityLevel: state.visibilityLevel,
                accentColor: action.payload
            }
        default:
            return state;
    }
}