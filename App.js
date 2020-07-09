/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    FlatList
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

import UserAvatar from './components/userItem';

import FileItem from './components/fileItem';

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

function SendScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <SafeAreaView style={styles.container}>
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
            </SafeAreaView>
        </View>
    );
}

function ReceiveScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Receive</Text>
        </View>
    );
}
function Demo() {
    return (
        <View
            style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
        >
            <Text>This is top text.</Text>
            <Text>This is bottom text.</Text>
        </View>
    );
}
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App: () => React$Node = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" headerMode="screen">
                    <Stack.Screen name="Meridio">
                        {() => (
                            <Tab.Navigator
                                initialRouteName="Analitics"

                            >
                                <Tab.Screen name="Send" component={SendScreen} />
                                <Tab.Screen name="Receive" component={ReceiveScreen} />
                            </Tab.Navigator>
                        )}
                    </Stack.Screen>

                    <Stack.Screen name="Settings" component={Demo} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default App;
