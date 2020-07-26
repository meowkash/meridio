const { ActionSheetIOS } = require("react-native");
const { act } = require("react-test-renderer");

import * as ActionTypes from "../actions/actionTypes";

// Default initial state 
const initialState = {
    
}

const UserPreferencesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.VISIBILITY_CHANGED: 
            return (...state, visibilityLevel: action.payload);
        case ActionTypes.ACCENT_COLOR_CHANGED:
            return (...state, accentColor: action.payload);
        default:
            return state;
    }
}