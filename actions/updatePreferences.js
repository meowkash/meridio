import {
    VISIBILITY_CHANGED,
    ACCENT_COLOR_CHANGED
} from './actionTypes';

export const changeVisibility = (pref) => {
    return {
        type: VISIBILITY_CHANGED,
        payload: pref
    }
}

export const changeAccentColor = (pref) => {
    return {
        type: ACCENT_COLOR_CHANGED,
        payload: pref
    }
}