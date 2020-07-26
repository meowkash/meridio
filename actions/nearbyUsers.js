import {
    USER_DISCOVERED,
    USER_LOST,
    USER_SELECTED,
    USER_REMOVED_FROM_SHARE
} from './actionTypes';
import { RectButton } from 'react-native-gesture-handler';

export const newUserDiscovered = (user) => {
    return {
        type: USER_DISCOVERED,
        payload: user
    }
}

export const userLostFromRange = (user) => {
    return {
        type: USER_LOST,
        payload: user
    }
}

export const userAddedToShare = (user) => {
    return {
        type: USER_SELECTED,
        payload: user
    }
}

export const userRemovedFromShare = (user) => {
    return {
        type: USER_REMOVED_FROM_SHARE,
        payload: user
    }
}