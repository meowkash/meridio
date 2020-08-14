// User Preferences
export const VISIBILITY_CHANGED = 'VISIBILITY_CHANGED';
export const ACCENT_COLOR_CHANGED = 'ACCENT_COLOR_CHANGED';
export const USER_INFO_CHANGED = 'USER_INFO_CHANGED';

// User Discovery
export const SCANNING_FOR_USERS = 'SCANNING_FOR_USERS';
export const USERS_UPDATED = 'USERS_UPDATED';

// User selection for sharing 
export const USER_ADDED_TO_SHARE = 'USER_ADDED_TO_SHARE';
export const USER_REMOVED_FROM_SHARE = 'USER_REMOVED_FROM_SHARE';
export const USER_CONNECTED = 'USER_CONNECTED';
export const USER_UNABLE_TO_CONNECT = 'USER_UNABLE_TO_CONNECT';

// Connection Properties 
export const CONNECTION_MODE_CHANGED = 'CONNECTION_MODE_CHANGED';

// File Sending 
export const FILES_SELECTED = 'FILES_SELECTED';
export const FILE_SELECTION_CLEARED = 'FILE_SELECTION_CLEARED';

export const FILE_ADDED = 'FILE_ADDED';
export const FILE_ADDING_FAILED = 'FILE_ADDING_FAILED';

// File Receiving
export const FILE_INCOMING = 'FILE_INCOMING';
export const FILE_RECEIVED = 'FILE_RECEIVED';
export const FILE_RECEIVING_FAILED = 'FILE_RECEIVING_FAILED';


// Possible values for states
export const visibilityLevels = {
    PAIRED: 'PAIRED',
    EVERYONE: 'EVERYONE',
    NONE: 'NONE'
}

export const accentColors = {
    GREEN: 'GREEN',
    RED: 'RED',
    YELLOW: 'YELLOW',
    BLUE: 'BLUE',
    PURPLE: 'PURPLE',
    ORANGE: 'ORANGE'
}