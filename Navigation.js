import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Schools from './Schools';
import SchoolDetails from './SchoolDetails';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Schools" component={Schools} />
                <Stack.Screen name="SchoolDetails" component={SchoolDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
