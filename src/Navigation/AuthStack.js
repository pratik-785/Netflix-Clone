import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginForm from '../Screens/AllAuthScreens/Login/LoginForm';
import SignUpScreen from '../Screens/AllAuthScreens/SignUp/SignUpScreen';
import SplashScreen from '../Screens/SplashSccreen/SplashScreen';
// import LoginWithOtpSrc from '../../../flipkart/src/Screens/LoginScreen/LoginWithOtpSrc';
// import LoginForm from '../Screens/AllAuthScreens/Login/LoginForm';



const Stack = createNativeStackNavigator();

// In this stack only the authentication screen are available
const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LoginForm"
                component={LoginForm}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default AuthStack;