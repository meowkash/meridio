import React, { Component, useEffect, useState } from 'react';

import {
    SafeAreaView,
} from 'react-native';

import {
    subscribeOnPeersUpdates
} from 'react-native-wifi-p2p';

import FloatingList from './floatingList';
import { theme } from '../defaults/theme';
import { DynamicValue, DynamicStyleSheet, useDynamicValue, useDarkMode } from 'react-native-dynamic';
import MeridioHeader from './meridioHeader';
import { OverlayView } from './userPrefOverlay';
import { connect, useDispatch } from "react-redux";

import {
    nearbyUsersUpdated
} from '../actions/nearbyUsers';

const dynamicStyles = new DynamicStyleSheet({
    container: {
        backgroundColor: new DynamicValue(theme.light.background, theme.dark.background),
        flex: 1
    },
    submitButton: {
        borderRadius: 50,
        width: 150,
        height: 50,
        marginTop: "5%",
        marginBottom: "5%",
        textAlignVertical: 'center',
        textAlign: 'center',
        color: new DynamicValue(theme.light.label, theme.dark.label)
    }
})

const SendScreen = (props) => {
    const {
        userName, 
        userProfileIcon,
        accentColor,
        filesSelected
    } = props;

    const styles = useDynamicValue(dynamicStyles);

    const [overlayVisibility, setOverlayVisibility] = useState(false);

    const isDarkMode = useDarkMode();

    // Make sure that on first load and update, the component can start discovering nearby users
    useEffect(() => {
        subscribeOnPeersUpdates(({ devices }) => {
            console.log(`New devices available: ${devices}`);
            // First, scan for visible devices, connect to them, check if they belong to Meridio, download the profile picture and name and then use it 
            /*
                let users = []
                for device in devices :
                    connect(device_address);
                    
                    users.append({
                        id: device_address,
                        name: device_name
                    })
            */
        });
        
    });

    return (
        <SafeAreaView style={styles.container}>
            <OverlayView
                visibility={overlayVisibility}
                setVisibility={setOverlayVisibility}
                accentColor={accentColor}
                userName={userName}
                userProfileIcon={userProfileIcon}
                styles={styles}
                isDarkMode={isDarkMode}
            />
            <MeridioHeader
                largeTitleFontSize={22}
                flex={1}
                visibility={overlayVisibility}
                setVisibility={setOverlayVisibility}
            />
            <FloatingList
                isHorizontal={true}
                listTitle="Nearby Users"
                listElementType="UserAvatar"
                flex={5}
            />
            <FloatingList
                isHorizontal={false}
                dataSrc={filesSelected}
                listTitle="Files"
                listElementType="FileItem"
                flex={12}
            />
        </SafeAreaView>
    );
}

const mapStateToProps = (state) => {
    return {
        accentColor: state.prefs.accentColor,
        userName: state.prefs.userName,
        userProfileIcon: state.prefs.userProfileIcon,
        filesSelected: state.files.selected
    }
}

export default connect(mapStateToProps)(SendScreen); 