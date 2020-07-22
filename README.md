# Meridio App : A cross platform secure file sharing app

### Redux Documentation

The Redux architecture in the app has been designed keeping in mind the required functionality. A guide to the implementation can be found underneath in the following subsections.

#### Actions

##### Preferences 

* VISIBILITY_CHANGED : Emitted when user changes their visibility to the provided options. **Payload :** One of the three visbility types.

* ACCENT_COLOR_CHANGED : Emitted when user changes their accent color to the provided options. **Payload :** One of the six accent color defaults

##### User Discovery

* USER_DISCOVERED : 
* USER_LOST : 
* SCANNING_FOR_USERS :

##### Sending Files 

* USER_SELECTED : 
* FILE_SELECTED :
* FILE_ADDED :
* FILE_ADDING_FAILED :

##### Receiving Files 

* FILE_INCOMING :
* FILE_RECEIVED 
* FILE_RECEIVING_FAILED = 'FILE_RECEIVING_FAILED';