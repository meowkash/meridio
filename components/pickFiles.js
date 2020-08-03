import React, { Component } from 'react';

import Toast from 'react-native-simple-toast';

import DocumentPicker from 'react-native-document-picker';

export async function addFiles() {
    try {
        const results = await DocumentPicker.pickMultiple({
            type: [DocumentPicker.types.allFiles],
        });
        for (const res of results) {
            console.log({res});
        }
        Toast.show("Loading Selected Files For Share");
    } catch (err) {
        if (DocumentPicker.isCancel(err)) {
            Toast.show('You Did Not Select Any Files');
        } else {
            Toast.show('An Error Occurred While Loading Files :(')
            throw err;
        }
    }
}