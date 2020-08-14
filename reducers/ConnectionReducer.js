import * as ActionTypes from "../actions/actionTypes";

// Default initial state 
const initialState = {
    role: 'client'
}

export const ConnectionReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.CONNECTION_MODE_CHANGED:
            return {
                role: action.payload
            }
        default: 
            return state;
    }
}