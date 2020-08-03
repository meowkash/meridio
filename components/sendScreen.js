import React, { Component, useEffect } from 'react';

import {
    SafeAreaView,
    ToastAndroid,
    Alert
} from 'react-native';

import {
    PEERS_UPDATED_ACTION,
    CONNECTION_INFO_UPDATED_ACTION,
    THIS_DEVICE_CHANGED_ACTION,
    subscribeOnEvent
} from 'react-native-wifi-p2p';

import { connect } from "react-redux";

import FloatingList from './floatingList';
import { theme } from '../defaults/theme';
import { DynamicValue, DynamicStyleSheet, useDynamicValue } from 'react-native-dynamic';
import MeridioHeader from './meridioHeader';

import {
    newUserDiscovered,
    userLostFromRange
} from '../actions/nearbyUsers';

const dynamicStyles = new DynamicStyleSheet({
    container: {
        backgroundColor: new DynamicValue(theme.light.background, theme.dark.background),
        flex: 1
    }
})

export default function SendScreen(props) {
    const styles = useDynamicValue(dynamicStyles);

    // Make sure that on first load and update, the component can start discovering nearby users
    useEffect(() => {
        subscribeOnEvent(PEERS_UPDATED_ACTION, (event) => {
            console.log(event);
        });
    });

    return (
        <SafeAreaView style={styles.container}>
            <MeridioHeader
                largeTitleFontSize={22}
                flex={1}
            />
            <FloatingList
                isHorizontal={true}
                listTitle="Nearby Users"
                listElementType="UserAvatar"
                flex={5}
            />
            <FloatingList
                isHorizontal={false}
                listTitle="Files"
                listElementType="FileItem"
                flex={12}
            />
        </SafeAreaView>
    );
}