import React, { useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    FlatList,
    Platform,
    PermissionsAndroid
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
    useDarkMode,
    DynamicStyleSheet,
    DynamicValue,
    useDynamicValue
} from 'react-native-dynamic'

import {
    initialize,
    startDiscoveringPeers
} from 'react-native-wifi-p2p';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import SendScreen from './components/sendScreen';
import ReceiveScreen from './components/receiveScreen';
import SettingsScreen from './components/settingsScreen';
import { theme } from './defaults/theme';

const Tab = createMaterialBottomTabNavigator();

const dynamicStyle = new DynamicStyleSheet({
    container: {
        flex: 1,
        backgroundColor: new DynamicValue(theme.light.background, theme.dark.background)
    },
    tabBar: {
        backgroundColor: new DynamicValue(theme.light.secondaryBackground, theme.dark.secondaryBackground),
        paddingBottom: 10,
    }
})

const App: () => React$Node = (props) => {
    const styles = useDynamicValue(dynamicStyle);
    const isDarkMode = useDarkMode();

    // Set-up permissions for Wi-Fi Direct access
    const permission = PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    const options = {
        'title': 'Wifi networks',
        'message': 'We need your permission in order to find nearby devices on the WiFi Network'
    }

    PermissionsAndroid.request(permission, options).then((granted) => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Permission granted!");
        } else {
            console.log("You will not able to retrieve wifi available networks list")
        }
    }).catch((error) => {
        console.warn(error)
    })

    // Initialize the API
    initialize()
        .then((isInitializedSuccessfully) => console.log('isInitializedSuccessfully: ', isInitializedSuccessfully))
        .catch((err) => console.log('initialization was failed. Err: ', err));

    // Start Discovering Peers. Just once on app load
    startDiscoveringPeers()
        .then(() => console.log('Starting of discovering was successful'))
        .catch(err => console.error(`Something is gone wrong. Maybe your WiFi is disabled? Error details: ${err}`));

    return (
        <>
            <SafeAreaView style={styles.container}>
                {/* <MeridioHeader
                    largeTitleFontSize={22}
                /> */}
                <NavigationContainer>
                    <Tab.Navigator
                        initialRouteName="Send"
                        // activeColor={isDarkMode ? theme.dark.accent : theme.light.accent}
                        activeColor={isDarkMode ? props.accentColor.dark : props.accentColor.light}
                        barStyle={styles.tabBar}
                    >
                        <Tab.Screen
                            name="Send"
                            component={SendScreen}
                            options={{
                                // tabBarColor: '#3f51b5',
                                tabBarAccessibilityLabel: 'Send',
                                tabBarLabel: 'Send',
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="file-export-outline" color={color} size={24} />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Receive"
                            component={ReceiveScreen}
                            options={{
                                tabBarAccessibilityLabel: 'Receive',
                                tabBarLabel: 'Receive',
                                // tabBarColor: '#00695c',
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="file-import-outline" color={color} size={24} />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Settings"
                            component={SettingsScreen}
                            options={{
                                tabBarAccessibilityLabel: 'Settings',
                                tabBarLabel: 'Settiings',
                                // tabBarColor: '#bf360c',
                                tabBarIcon: ({ color }) => (
                                    <Ionicons name="settings-outline" color={color} size={24} />
                                ),
                            }}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        accentColor: state.prefs.accentColor
    }
}

export default connect(mapStateToProps)(App);
