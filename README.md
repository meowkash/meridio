# Meridio App : A cross platform secure file sharing app

### Redux Documentation

The Redux architecture in the app has been designed keeping in mind the required functionality. A guide to the implementation can be found underneath in the following subsections.

#### Store
The store for our app consists of the following state variables that are used throughout as props to provide the necessary views. 

* **nearbyUsers [ ] :** An array of JSON variables consisting of data about nearby users (Used as data in the Nearby Users card of Send Screen)
* **filesToSend [ ] :** An array of JSON variables consisting of data about files to be sent (Used as data in the Files card of Send Screen)
* **usersToSend [ ] :** An array of JSON variables consisting of data about nearby users selected to be sent the files to
* **filesReceived [ ] :** An array of JSON variables consisting of data about files (and the user that has sent said file) that have been received (Used as data in the Ongoing Share card of Receive Screen)
* **sharesCompleted [ ] :** An array of JSON variables consisting of data about previous users, file types and number of files received previously (Used as data in the Completed Share card of Send Screen)

#### Actions

##### Preferences 

* **VISIBILITY_CHANGED :** Emitted when user changes their visibility to the provided options. *Payload : One of the three visbility types.*

* **ACCENT_COLOR_CHANGED :** Emitted when user changes their accent color to the provided options. *Payload : One of the six accent color defaults*

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

#### Reducers