import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import auth from "@react-native-firebase/auth";
// AuthStack where login and signup screen
import AuthStack from './AuthStack';
// MainStack where all screens 
import MainStack from './MainStack';
import { AuthContext } from './AuthProvider';

const Routes = () => {
    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false)
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, [])

    if (initializing) return null;

    return (
        // Here i Write the navgationContainer and authentication screens are in the Authstack there i write login form
        <NavigationContainer>
            {user ? <MainStack/> : <AuthStack/>}
        </NavigationContainer>
    )
}

export default Routes

const styles = StyleSheet.create({})

{/* <Stack.Screen
                    name="Profile"
                    component={Profile}
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
                />

                <Stack.Screen
                    name="Video"
                    component={Profile}
                /> */}