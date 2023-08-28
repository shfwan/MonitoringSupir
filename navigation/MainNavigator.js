import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from './TabsNavigator'
import AddSupir from '../screens/AddSupir'
import AddKendaraan from '../screens/AddKendaraan'
import AppNavigation from "./AppNavigation";

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
    return (
        <TabContextProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Root"
                screenOptions={{headerShown:false}}>
                    <Stack.Screen name="Root" component={TabsNavigator}/>
                    <Stack.Screen name="AddKendaraan" component={AddKendaraan}/>
                    <Stack.Screen name="AddSupir" component={AddSupir}/>
                </Stack.Navigator>
            </NavigationContainer>
        </TabContextProvider>
    )
}