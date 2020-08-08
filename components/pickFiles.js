import React, { useState, useEffect } from 'react';

import Toast from 'react-native-simple-toast';

import DocumentPicker from 'react-native-document-picker';

export async function pickFiles(dispatch, changeFileList) {

    try {
        const results = await DocumentPicker.pickMultiple({
            type: [DocumentPicker.types.allFiles],
        });
        Toast.show("Loading Selected Files For Share");
        for (let res of results) {
            // Process to get correct file type be sent
            let sepIndex = res.type.indexOf('/');
            let fileType = 'document'
            if (sepIndex != -1) {
                fileType = res.type.substr(0, sepIndex);
            }

            // Process the size of the file into human readable format
            var i = -1;
            var fileSizeInBytes = res.size
            var byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
            do {
                fileSizeInBytes = fileSizeInBytes / 1024;
                i++;
            } while (fileSizeInBytes > 1024);
            
            let file = {
                id: res.fileCopyUri,
                uri: res.uri,
                name: res.name,
                size: Math.max(fileSizeInBytes, 0.1).toFixed(1)+byteUnits[i],
                type: fileType
            };
            changeFileList(file);
        }
    } catch (err) {
        if (DocumentPicker.isCancel(err)) {
            Toast.show('You Did Not Select Any Files');
        } else {
            Toast.show('An Error Occurred While Loading Files :(')
            throw err;
        }
    }
}