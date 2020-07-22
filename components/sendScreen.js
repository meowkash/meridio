import React, { Component } from 'react';

import {
    SafeAreaView,
    ToastAndroid,
    Alert
} from 'react-native';

import {
    startDiscoveringPeers
} from "react-native-wifi-p2p";

import FloatingList from './floatingList';
import { theme } from '../defaults/theme';
import { DynamicValue, DynamicStyleSheet, useDynamicValue } from 'react-native-dynamic';
import MeridioHeader from './meridioHeader';

const dynamicStyles = new DynamicStyleSheet({
    container: {
        backgroundColor: new DynamicValue(theme.light.background, theme.dark.background),
        flex: 1
    }
})

export default function SendScreen() {    
    const styles = useDynamicValue(dynamicStyles);

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