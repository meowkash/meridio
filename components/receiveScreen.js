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

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        marginHorizontal: 8,
        backgroundColor: "silver",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingLeft: 10,
        paddingBottom: 4,
        paddingTop: 4
    },
    incoming: {
        marginHorizontal: 8,
        paddingTop: 4,
        backgroundColor: "silver",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingLeft: 10,
        paddingBottom: 4,
        marginBottom: 10
    },
    notifications: {
        marginHorizontal: 8,
        paddingTop: 4,
        backgroundColor: "silver",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingLeft: 10,
        paddingBottom: 4,
    }
});
export default function ReceiveScreen() {
    return (
        <SafeAreaView>
            <View style={container}>
                <Text style={styles.heading}>
                    Incoming
                </Text>
                <FlatList
                    style={styles.incoming}
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
            </View>
            <View style={container}>
                <Text style={styles.heading}>
                    Notifications
                </Text>

                <FlatList
                    style={styles.notifications}
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
        </SafeAreaView>
    );
}