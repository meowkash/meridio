import * as WiFiP2P from 'react-native-wifi-p2p';

export const createServer = () => {
    WiFiP2P.createGroup()
        .then(() => {
            setTimeout(() => {
                getGroupPassphraseInfo().then(passphrase => console.log(passphrase));
            }, 3000);
        })
        .catch(err => console.error("Something gone wrong. Details: ", err));
}

export const sendFilesToServer = (macAddr, files) => {
    console.log(files, macAddr);
    files.forEach(file => {
        WiFiP2P.connect(macAddr)
            // Resolve connection details using getConnectionInfo
            // .then(() => WiFiP2P.createGroup())
            .then(() => WiFiP2P.getConnectionInfo())
            .then(() => WiFiP2P.getAvailablePeers())
            // Send file metadata using sendMessage()
            .then(() => console.log(file.name))
            .then(() => {
                console.log('SENDING message');
                return WiFiP2P.sendMessage(file.name);
            })
            // Send file
            .then(() => {
                console.log('SENDING file');
                return WiFiP2P.sendFile(file.uri);
            })
            .catch(err => console.log('Unable to connect', err));
    });
}

export const receiveFromClient = () => {
    console.log('Can receive now');
    // Receive file metadata using receiveMessage()
    WiFiP2P.createGroup()
        .then(() => WiFiP2P.receiveMessage())
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
        .then(message => {
            console.log('Received message ', message);
            return WiFiP2P.receiveFile('/storage/emulated/0/Music/', message);
        })
        .catch(err => console.log(err));
}