# Meridio App : A cross platform secure file sharing app

### Wi-Fi Direct API Usage 

We use the React Native package ```react-native-wifi-p2p``` in the Meridio app to provide the core level connection functionality. In order to make the usage easier to understand, here is an outline of the methods called and their need/usage in the desired order : 
* ```initialize() : ```This is called at the very root of the app in the *App.js* file, once the app is launched. This does not need to be called more than once per app launch
* ```subscribeToEvent() : ```Instead of using the specific subscribe events, we use the generic subscription function and raise actions depending on the events that occur. In addition, the events that occur need to be parsed by a helper function before emitting any action



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

* **USER_DISCOVERED :** Emitted when a new user appears on the same Wi-Fi network while using the Meridio app
* **USER_LOST :** Emitted when a previously visible user disappears either by changing networks or closing the Meridio app
* **SCANNING_FOR_USERS :** Emitted throughout while searching for users to show a neat animation for the user

##### Sending Files 

* **USER_SELECTED :** Emitted when nearby available user is added to the list of people to share files with
* **USER_REMOVED_FROM_SHARE :** Emitted when a previously selected nearby user is either removed manually from share (by the sender) or automatically (if the connection is lost)
* **USER_CONNECTED :** Emitted when a successful connection is established between the sender and receiver to provide the go ahead for the file transmission to be done
* **USER_UNABLE_TO_CONNECT :** Emitted when, for whatever reason, the sender is unable to connect to a receiver as part of sending or receiving files. This will automatically trigger the respective failure action
* **FILE_SELECTED :** Emitted when a file is selected from the native OS file picker
* **FILE_ADDED :** Emitted when a file is successfully picked up and added to the files array
* **FILE_ADDING_FAILED :** Emitted if adding a file to the files array fails for whatever reason

##### Receiving Files 

* **FILE_INCOMING :** Emitted when a share is initiated by the sender so that the receiver can choose to allow or deny the sharing request
* **FILE_RECEIVED :** Emitted on successful reception of all files 
* **FILE_RECEIVING_FAILED :** Emitted when, for whatever reason, files aren't received successsfully

#### Reducers

* There are separate reducers for each associated action category. Based on the action received, they attempt to return (in a pure manner) the new state or in the worst case for unexpected actions, return the earlier state.