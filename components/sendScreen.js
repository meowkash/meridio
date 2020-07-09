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

const styles = StyleSheet.create({});
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'First Item',
        icon: '0'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Second Item',
        icon: '1'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'Third Item',
        icon: '2'
    },
]
export default function SendScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
                style={styles.usersList}
                horizontal={true}
                data={DATA}
                renderItem={({ item, index, separators }) => (
                    <UserAvatar
                        id={item.id}
                        icon={item.icon}
                        name={item.name}
                    />
                )}
                keyExtractor={item => item.id}
            />
            <FlatList
                style={styles.filesList}
                data={DATA}
                renderItem={({ item, index, separators }) => (
                    <FileItem
                        id={item.id}
                        icon={item.icon}
                        name={item.name}
                    />
                )}
                keyExtractor={item => item.id}
            />

        </View>
    );
}