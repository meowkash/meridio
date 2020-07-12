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
import FloatingList from './floatingList';

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

const container = () => {
    return {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        margin: 8,
        borderRadius: 10,
        borderBottomWidth: 3,
        alignItems: "flex-start",
        justifyContent: "space-between"
    };
};

export default function ReceiveScreen() {
    return (
        <SafeAreaView>
            <FloatingList 
                dataSrc={DATA}
                isHorizontal={true}
                listTitle="Ongoing Shares"
                listElementType="UserAvatar"
                titleBackground="teal"
                titleColor="white"
                height="30%"
                listBackground="#FDFDFD"
            />
            <FloatingList 
                listTitle="Incoming"
                listElementType="FileItem"
                emptyMessage="No files received so far"
                height="65%"
                listBackground="#FDFDFD"
                titleBackground="#519657"
            />
        </SafeAreaView>
    );
}