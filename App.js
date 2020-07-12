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

import 'react-native-gesture-handler';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SendScreen from './components/sendScreen';
import ReceiveScreen from './components/receiveScreen';
import SettingsScreen from './components/settingsScreen';
import MeridioHeader from './components/meridioHeader';

const Tab = createMaterialBottomTabNavigator();

const App: () => React$Node = () => {
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <MeridioHeader
                    backgroundColor="#FDFDFD"
                    largeTitleFontColor="#212121"
                    largeTitleFontSize={22}
                />
                <NavigationContainer>
                    {/* <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;

                                if (route.name === 'Send') {
                                    iconName = (Platform.OS === 'ios') ? 'ios-cloud-upload' : 'md-cloud-upload';
                                } else if (route.name === 'Receive') {
                                    iconName = (Platform.OS === 'ios') ? 'ios-cloud-download' : 'md-cloud-download';
                                } else if (route.name === 'Settings') {
                                    iconName = (Platform.OS === 'ios') ? 'ios-settings-outline' : 'md-settings-outline';
                                }
                                return (
                                    <Ripple></Ripple>
                                    <Ionicons name={iconName} size={size} color={color} />
                                );
                            },
                        })}
                        tabBarOptions={{
                            activeTintColor: 'rebeccapurple',
                            inactiveTintColor: 'grey',
                        }}
                    >
                        <Tab.Screen name="Send" component={SendScreen} />
                        <Tab.Screen name="Receive" component={ReceiveScreen} />
                        <Tab.Screen name="Settings" component={SettingsScreen} />
                    </Tab.Navigator> */}
                    <Tab.Navigator
                        initialRouteName="Send"
                        activeColor="white"
                        style={{ backgroundColor: 'tomato' }}
                        shifting={true}
                    >
                        <Tab.Screen
                            name="Send"
                            component={SendScreen}
                            options={{
                                tabBarColor: '#3f51b5',
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
                                tabBarLabel: 'Receive',
                                tabBarColor: '#00695c',
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="file-import-outline" color={color} size={24} />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Settings"
                            component={SettingsScreen}
                            options={{
                                tabBarLabel: 'Settiings',
                                tabBarColor: '#bf360c',
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
