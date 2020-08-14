import * as WiFiP2P from 'react-native-wifi-p2p';

export const createServer = () => {
    WiFiP2P.createGroup()
        .then(() => console.log('Group created successfully!'))
        .catch(err => console.log('Unable to create group', err));
}

export const sendFilesToServer = (macAddr, files) => {
    for (var file in files) {
        WiFiP2P.connect(macAddress)
            // Resolve connection details using getConnectionInfo
            .then(() => WiFiP2P.getConnectionInfo())
            // Send file metadata using sendMessage()
            .then(() => WiFiP2P.sendMessage(file.name))
            // Send file
            .then(() => WiFiP2P.sendFile(file))
            .catch(err => console.log('Unable to connect', err));
    }
}

export const receiveFromClient = () => {
    console.log('Can receive now');
    // Receive file metadata using receiveMessage()
    WiFiP2P.receiveMessage()
        // .then(() => {
        //     return PermissionsAndroid.request(
        //         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        //         {
        //             'title': 'Access to write',
        //             'message': 'WRITE_EXTERNAL_STORAGE'
        //         }
        //     )
        // })

        // Receive file and store it based on the metadata
        .then(message => WiFiP2P.receiveFile('/storage/emulated/0/Music/', message))
        .catch(err => console.log(err));
}