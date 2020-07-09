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

import UserAvatar from './userItem';
import FileItem from './fileItem';

export default function ReceiveScreen() {
    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Receive</Text>
        </View>

    );
}