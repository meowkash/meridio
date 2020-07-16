import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    FlatList,
    Platform
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
import { DynamicStyleSheet, DynamicValue, useDynamicValue } from 'react-native-dynamic'

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
        paddingBottom: 10
    }
})

const App: () => React$Node = () => {
    const styles = useDynamicValue(dynamicStyle);
    return (
        <>
            <SafeAreaView style={styles.container}>
                {/* <MeridioHeader
                    largeTitleFontSize={22}
                /> */}
                <NavigationContainer>
                    <Tab.Navigator
                        initialRouteName="Send"
                        activeColor="#519657"
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

export default App;
