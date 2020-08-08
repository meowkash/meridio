import * as ActionTypes from "../actions/actionTypes";

// Default initial state for NearbyUsers
const initialState = {
    nearby: [],
    selectedForShare: []
}

export const Users = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.USERS_UPDATED:
            return {
                nearby: action.payload,
                selectedForShare: state.selectedForShare
            };
        case ActionTypes.USER_ADDED_TO_SHARE:
            return {
                nearby: state.nearby,
                selectedForShare: action.payload
            };
        case ActionTypes.USER_REMOVED_FROM_SHARE:
            return {
                nearby: state.nearby,
                selectedForShare: action.payload
            }
        default: 
            return state;
    }
}