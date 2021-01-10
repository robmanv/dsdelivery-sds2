import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home/index';
import Orders from './Orders/index';

/* As rotas devem ser pensadas como pilhas de navegação */

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" screenOptions={{cardStyle: {backgroundColor: '#FFF'}}}>
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="Orders" component={Orders}></Stack.Screen>
            </Stack.Navigator>

        </NavigationContainer>
    )
}