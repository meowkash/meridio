// User Preferences
export const VISIBILITY_CHANGED = 'VISIBILITY_CHANGED';
export const ACCENT_COLOR_CHANGED = 'ACCENT_COLOR_CHANGED';
export const USER_INFO_CHANGED = 'USER_INFO_CHANGED';

// Nearby Users 
// export const USER_DISCOVERED = 'USER_DISCOVERED';
// export const USER_LOST = 'USER_LOST';
export const USERS_UPDATED = 'USERS_UPDATED';
// export const USER_SELECTED_FOR_SHARE = 'USER_SELECTED';
// export const USER_REMOVED_FROM_SHARE = 'USER_REMOVED_FROM_SHARE';
export const USER_SHARE_UPDATED = 'USER_SHARE_UPDATED';
export const USER_CONNECTED = 'USER_CONNECTED';
export const USER_UNABLE_TO_CONNECT = 'USER_UNABLE_TO_CONNECT';
export const SCANNING_FOR_USERS = 'SCANNING_FOR_USERS';

// File Sending 
export const FILE_SELECTED = 'FILE_SELECTED';
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