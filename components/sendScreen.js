import React, { Component } from 'react';

import {
    SafeAreaView,
} from 'react-native';

import FloatingList from './floatingList';
import { theme } from '../defaults/theme';
import { DynamicValue, DynamicStyleSheet, useDynamicValue } from 'react-native-dynamic';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'A Music File',
        type: 'audio',
        size: '4.7M'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'A Video File',
        type: 'video',
        size: '1.7G'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'A Code File',
        type: 'code',
        size: '14.8K'
    },
]

const userDATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'First',
        icon: 'selfish'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Second',
        icon: 'male'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'Third',
        icon: 'female'
    },
]

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
                dataSrc={userDATA}
                isHorizontal={true}
                listTitle="Nearby Users"
                listElementType="UserAvatar"
                height="30%"
            />
            <FloatingList
                dataSrc={DATA}
                isHorizontal={false}
                listTitle="Files"
                listElementType="FileItem"
                height="66%"
            />
        </SafeAreaView>
    );
}