import React, { Component } from 'react';

import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    PermissionsAndroid
} from 'react-native';

import {
    connect,
} from 'react-redux';

import * as WiFiP2P from 'react-native-wifi-p2p';

import Images from '../assets/assetIndex';
import { theme } from '../defaults/theme';
import { DynamicStyleSheet, DynamicValue, useDynamicValue, useDarkMode } from 'react-native-dynamic';

import { sendFilesToServer } from './connectionUtilities';

const styles = {
    text: {
        alignSelf: "center",
        alignItems: "center"
    },
    image: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        alignSelf: 'center',
        alignItems: 'center',
    },
    container: {
        alignItems: "center",
        justifyContent: 'center',
        marginHorizontal: 10,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 4,
    }
};

const UserAvatar = (props) => {
    const {
        macAddress,
        avatarIcon,
        userName,
        accentColor,
        filesSelected
    } = props;

    const isDarkMode = useDarkMode();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    // Ensure we have permissions to perform file sharing
                    PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                        {
                            'title': 'Access to read',
                            'message': 'READ_EXTERNAL_STORAGE'
                        }
                    )
                        .then(granted => {
                            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                                console.log("You can use the storage")
                            } else {
                                console.log("Storage permission denied")
                            }
                        })
                        .then(() => 
                            sendFilesToServer(macAddress, filesSelected)
                        )
                        .catch(err => console.log('Not enough permissions'));
                }}
            >
                <Image source={Images.user[avatarIcon]} style={styles.image} />
                <Text style={[styles.text, { color: isDarkMode ? accentColor.light : accentColor.dark }]}>
                    {userName}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        accentColor: state.prefs.accentColor,
        filesSelected: state.files.selected,
    }
}

export default connect(mapStateToProps)(UserAvatar);