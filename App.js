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
import SendScreen from './components/sendScreen';
import ReceiveScreen from './components/receiveScreen';
import MeridioHeader from './components/meridioHeader';

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
            <MeridioHeader  
                    backgroundColor="green"
                    largeTitleFontColor="white"
            />
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Send" component={SendScreen} />
                    <Tab.Screen name="Receive" component={ReceiveScreen} />
                </Tab.Navigator>
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
