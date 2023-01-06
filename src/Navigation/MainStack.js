import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import Home from '../Screens/MainStackScreens/Home/Home';
import Profile from '../Screens/MainStackScreens/Profile/Profile'
import IndividualRow from '../Screens/MainStackScreens/IndividualRow/IndividualRow';
import ViewAllList from '../Screens/MainStackScreens/ViewAllList/ViewAllList';
import SplashScreen from '../Screens/SplashSccreen/SplashScreen';
import LodingScreen from '../Screens/SplashSccreen/LoadingScreen/LodingScreen';
import Drawer from '../Screens/MainStackScreens/Drawer/Drawer';
import BottomTab from './BottomTab';
import GO from '../Screens/GO';
import SubSearchSrc from '../Screens/MainStackScreens/Search/SubSearchSrc';
import SavedScreen from '../Screens/MainStackScreens/SavedScreen/SavedScreen';

const Stack = createNativeStackNavigator();
// In this stack main screens are available
const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName="LodingScreen">
            {/* Loading screen for loader */}
            <Stack.Screen
                name="BottomTab"
                component={BottomTab}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LodingScreen"
                component={LodingScreen}
                options={{ headerShown: false }}
            />
            
            <Stack.Screen
                name="IndividualRow"
                component={IndividualRow}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ViewAllList"
                component={ViewAllList}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Drawer"
                component={Drawer}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="GO"
                component={GO}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SubSearchSrc"
                component={SubSearchSrc}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SavedScreen"
                component={SavedScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default MainStack;