import {
    USER_ADDED_TO_SHARE,
    USER_REMOVED_FROM_SHARE,
    USERS_UPDATED
} from './actionTypes';
import { RectButton } from 'react-native-gesture-handler';

export const nearbyUsersUpdated = (users) => {
    return {
        type: USERS_UPDATED,
        payload: users
    }
}

export const userAddedToShare = (user) => {
    return {
        type: USER_ADDED_TO_SHARE,
        payload: user
    }
}

export const userRemovedFromShare = (user) => {
    return {
        type: USER_REMOVED_FROM_SHARE,
        payload: user
    }
}