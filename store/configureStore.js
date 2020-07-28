import { createStore, combineReducers } from 'redux';

// Import the reducers
// import { FilesReducer } from '../reducers/FilesReducer';
import { Users } from '../reducers/Users';
import { UserPreferences } from '../reducers/UserPreferences';

const rootReducer = combineReducers({
    // files: FilesReducer,
    users: Users,
    prefs: UserPreferences
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;