import React, { Component } from 'react';

import {
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    View,
    FlatList
} from 'react-native';

import FloatingList from './floatingList';
import { theme } from '../defaults/theme';
import { DynamicValue, DynamicStyleSheet, useDynamicValue } from 'react-native-dynamic';
import MeridioHeader from './meridioHeader';

const DATA = [
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

export default function ReceiveScreen() {
    const styles = useDynamicValue(dynamicStyles);
    return (
        <SafeAreaView style={styles.container}>
            <MeridioHeader
                largeTitleFontSize={22}
                flex={1}
            />
            <FloatingList 
                dataSrc={DATA}
                isHorizontal={true}
                listTitle="Ongoing Shares"
                listElementType="UserAvatar"
                flex={5}
            />
            <FloatingList 
                listTitle="Incoming"
                listElementType="FileItem"
                emptyMessage="No files received so far"
                flex={12}
            />
        </SafeAreaView>
    );
}