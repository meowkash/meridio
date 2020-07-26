const { act } = require("react-test-renderer");

import * as ActionTypes from "../actions/actionTypes";

// Default initial state 
const initialState = {
    
}

const NearbyUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.USER_DISCOVERED:
            return (...state, nearbyUsers: nearbyUsers.push(action.payload));
        case ActionTypes.USER_LOST:
            return (...state, nearbyUsers: nearbyUsers.splice(nearbyUsers.indexOf(action.payload), 1));
        case ActionTypes.USER_SELECTED:
            return (...state, usersToShare: usersToShare.push(action.payload))
        case ActionTypes.USER_REMOVED_FROM_SHARE:
            return (...state, usersToShare: usersToShare.splice(usersToShare.indexOf(action.payload), 1))
    }
}