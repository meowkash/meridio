import { createStore, combineReducers } from 'redux';

// Import the reducers
import { FilesReducer } from '../reducers/FilesReducer';
import { NearbyUsersReducer } from '../reducers/NearbyUserReducer';
import { UserPreferencesReducer } from '../reducers/UserPreferencesReducer';

export const ConfigureStore = () => {
    const store = createStore({
        combineReducers({
            FilesReducer,
            NearbyUsersReducer,
            UserPreferencesReducer
        })
    });

    return store;
}