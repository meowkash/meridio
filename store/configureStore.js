import { createStore, combineReducers } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';

import { AsyncStorage } from 'react-native';

import { FilesReducer } from '../reducers/FilesReducer';
import { Users } from '../reducers/Users';
import { UserPreferences } from '../reducers/UserPreferences';
import { ConnectionReducer } from '../reducers/ConnectionReducer';

const rootReducer = combineReducers({
    files: FilesReducer,
    users: Users,
    prefs: UserPreferences,
    connection: ConnectionReducer
});

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    blacklist: ['users', 'files', 'connection']
};

const configureStore = () => {
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store = createStore(persistedReducer);
    const persistor = persistStore(store);
    return { store, persistor };
}

export default configureStore;
