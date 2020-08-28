import * as WiFiP2P from 'react-native-wifi-p2p';

import React from 'react';

import {
    useDispatch
} from 'react-redux';

import {
    removeAllFiles
} from '../actions/shareFiles';

const sendFiles = (files) => {
    // const dispatch = useDispatch();
    // const clearFilesList = () => dispatch(removeAllFiles());
    const nextFile = files.shift();
    if (nextFile) {
        console.log('Sending file ', nextFile.name);
        // return WiFiP2P.sendMessage(nextFile.name).then(() => WiFiP2P.sendFile(nextFile.uri)).then(_ => sendFiles(files));
        return WiFiP2P.sendMessage(nextFile.name).then(_ => sendFiles(files));
    } else {
        // clearFilesList();
        return Promise.resolve();
    }
}

export const sendFilesToServer = (macAddr, files) => {

    console.log(files, macAddr);

    WiFiP2P.connect(macAddr)
        // Resolve connection details using getConnectionInfo
        .then(() => {
            console.log('Getting connection info');
            return WiFiP2P.getConnectionInfo().then(info => console.log('getConnectionInfo', info));
        })
        .then(() => {
            console.log('Sending Files');
            return sendFiles(files);
        })
        .catch(err => console.log('Error occurred', err));
}

export const receiveFromClient = () => {

    console.log('Can receive now');

    // Receive file metadata using receiveMessage()
    WiFiP2P.removeGroup(() => console.log('Removed old group'))
        .then(() => {
            console.log('Successfully created group');
            return WiFiP2P.createGroup();
        })
        .then(() => {
            console.log('Waiting for message');
            return WiFiP2P.receiveMessage();
        })
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