import * as ActionTypes from "../actions/actionTypes";

// Default initial state 
const initialState = {
    selected: [],
    sent: [],
    received: []
}

export const FilesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.FILE_ADDED:
            return {
                selected: state.selected.concat(action.payload),
                sent: state.sent,
                received: state.received
            };
        case ActionTypes.FILE_ADDED:

        case ActionTypes.FILE_INCOMING:

        case ActionTypes.FILE_RECEIVED:

        case ActionTypes.FILE_RECEIVING_FAILED:

        default: 
            return state;
    }
}