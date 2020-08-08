import {
    FILES_SELECTED,
    FILE_ADDED,
    FILE_ADDING_FAILED,
    FILE_INCOMING,
    FILE_RECEIVING,
    FILE_RECEIVING_FAILED,    
} from './actionTypes';

export const addFile = (file) => {
    return {
        type: FILE_ADDED,
        payload: file
    }
}

export const userLostFromRange = (user) => {
    return {
        type: USER_LOST,
        payload: user
    }
}