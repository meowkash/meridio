import React, { Component, useEffect, useState } from 'react';

import {
    SafeAreaView,
    Text,
    TouchableOpacity
} from 'react-native';

import * as WiFiP2P from 'react-native-wifi-p2p';
import * as Nearby from 'react-native-google-nearby-connection';

import FloatingList from './floatingList';
import { theme } from '../defaults/theme';
import { connectionChannel } from '../defaults/meridioConfig';
import { DynamicValue, DynamicStyleSheet, useDynamicValue, useDarkMode } from 'react-native-dynamic';
import MeridioHeader from './meridioHeader';
import { OverlayView } from './userPrefOverlay';
import { connect, useDispatch } from "react-redux";

import {
    nearbyUsersUpdated
} from '../actions/nearbyUsers';

import {
    createServer
} from './connectionUtilities';

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
        filesSelected,
        nearbyUsers,
        connectionRole
    } = props;

    const styles = useDynamicValue(dynamicStyles);

    const [overlayVisibility, setOverlayVisibility] = useState(false);

    const isDarkMode = useDarkMode();

    const dispatch = useDispatch();

    const modifyUsersList = (newUserList) => dispatch(nearbyUsersUpdated(newUserList));
    
    // Make sure that on first load and update, the component can start discovering nearby users
    useEffect(() => {
        WiFiP2P.subscribeOnPeersUpdates(({ devices }) => {
            var users = [];
            if (devices.length == 0) {
                users = [];
                modifyUsersList(users);
            }
            else {
                for (var device of devices) {
                    let user = {
                        id: device.deviceAddress,
                        address: device.deviceAddress,
                        icon: 'caveman',
                        name: device.deviceName
                    };
                    users.push(user);
                    modifyUsersList(users);
                }
            }
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
                dataSrc={nearbyUsers}
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
        filesSelected: state.files.selected,
        nearbyUsers: state.users.nearby,
        connectionRole: state.connection.role
    }
}

export default connect(mapStateToProps)(SendScreen); 