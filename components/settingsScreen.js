import React, { Component } from 'react';

import {
    SafeAreaView,
} from 'react-native';

import FloatingList from './floatingList';
import { theme } from '../defaults/theme';
import { DynamicValue, DynamicStyleSheet, useDynamicValue } from 'react-native-dynamic';

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
            <FloatingList
                isHorizontal={true}
                listTitle="Nearby Users"
                listElementType="UserAvatar"
                height="30%"
            />
            <FloatingList
                isHorizontal={false}
                listTitle="Files"
                listElementType="FileItem"
                height="66%"
            />
        </SafeAreaView>
    );
}