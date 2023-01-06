import React from 'react';
import { View, Text,Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import GO from '../Screens/GO';
import To from '../Screens/To';
import Home from '../Screens/MainStackScreens/Home/Home';
import LoginForm from '../Screens/AllAuthScreens/Login/LoginForm';
import Profile from '../Screens/MainStackScreens/Profile/Profile';
import IndividualRow from '../Screens/MainStackScreens/IndividualRow/IndividualRow';
import ViewAllList from '../Screens/MainStackScreens/ViewAllList/ViewAllList';
import Drawer from '../Screens/MainStackScreens/Drawer/Drawer';
import SearchScreen from '../Screens/MainStackScreens/Search/SerachScreen';
import DownloadsScreen from '../Screens/MainStackScreens/Downloads/DownloadsScreen';
import GamesScreen from '../Screens/MainStackScreens/Games/GamesScreen';


const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
    return (
        <Tab.Navigator
        screenOptions={{
        }}
        barStyle={{ backgroundColor: '#222' }}
        >
            <Tab.Screen
                options={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                source={require('../Images/NLogo.png')}
                                style={{
                                    height: 25,
                                    width: 30,
                                    resizeMode: 'cover',
                                    tintColor: focused ? 'red' : '#bbb',
                                }}
                            />
                        );
                    },
                })}
                name="Home"
                component={Home}
            />

            <Tab.Screen
                options={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                source={require('../Images/search.png')}
                                style={{
                                    height: 25,
                                    width: 25,
                                    resizeMode: 'contain',
                                    tintColor: focused ? 'red' : '#bbb',
                                }}
                            />
                        );
                    },
                })}
                name="Search"
                component={SearchScreen}
            />
            <Tab.Screen
                options={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                source={require('../Images/GameOutline.png')}
                                style={{
                                    height: 18,
                                    width: 30,
                                    resizeMode: 'cover',
                                    tintColor: focused ? 'red' : '#bbb',
                                }}
                            />
                        );
                    },
                })}
                name="Games"
                component={GamesScreen}
            />

            <Tab.Screen
                options={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                source={require('../Images/download.png')}
                                style={{
                                    height: 21,
                                    width: 30,
                                    resizeMode: 'contain',
                                    tintColor: focused ? 'red' : '#bbb',
                                }}
                            />
                        );
                    },
                })}
                name="Downloads"
                component={DownloadsScreen}
            />
            <Tab.Screen
                options={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                source={require('../Images/profile.png')}
                                style={{
                                    height: 15,
                                    width: 24,
                                    resizeMode: 'contain',
                                    tintColor: focused ? 'red' : '#bbb',
                                }}
                            />
                        );
                    },
                })}
                name="Profile"
                component={Profile}
            />

        </Tab.Navigator>
    );
}

export default BottomTab;
//
