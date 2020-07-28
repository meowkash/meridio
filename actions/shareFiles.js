import {
    FILE_SELECTED,
    FILE_ADDED,
    FILE_ADDING_FAILED,
    FILE_SENDING,
    FILE_INCOMING,
    FILE_RECEIVING,
    FILE_RECEIVED,
    FILE_RECEIVING_FAILED,    
    USER_CONNECTING,
    USER_UNABLE_TO_CONNECT,
    USER_CONNECTED,
} from './actionTypes';

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