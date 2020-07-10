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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

import SendScreen from './components/sendScreen';
import ReceiveScreen from './components/receiveScreen';
import MeridioHeader from './components/meridioHeader';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App: () => React$Node = () => {
    return (
        <>
            <SafeAreaView style={{flex: 1}}>
                <MeridioHeader
                    backgroundColor="gainsboro"
                    largeTitleFontColor="green"
                    largeTitleFontSize={22}
                />
                <NavigationContainer>
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;

                                if (route.name === 'Send') {
                                    iconName = (Platform.OS === 'ios') ? 'ios-cloud-upload' : 'md-cloud-upload';
                                } else if (route.name === 'Receive') {
                                    iconName = (Platform.OS === 'ios') ? 'ios-cloud-download' : 'md-cloud-download';
                                }

                                return <Ionicons name={iconName} size={size} color={color} />;
                            },
                        })}
                        tabBarOptions={{
                            activeTintColor: 'rebeccapurple',
                            inactiveTintColor: 'gray',
                        }}
                    >
                        <Tab.Screen name="Send" component={SendScreen} />
                        <Tab.Screen name="Receive" component={ReceiveScreen} />
                    </Tab.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </>
    );
};

export default App;
