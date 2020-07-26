import { createStore, combineReducers } from 'redux';

// Import the reducers
import { FilesReducer } from '../reducers/FilesReducer';
import { NearbyUsersReducer } from '../reducers/NearbyUserReducer';
import { UserPreferencesReducer } from '../reducers/UserPreferencesReducer';

const rootReducer = combineReducers({
    files: FilesReducer,
    nearbyUsers: NearbyUsersReducer,
    prefs: UserPreferencesReducer
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;