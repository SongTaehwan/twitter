import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './routes';

const ServiceStack = createStackNavigator();

// const ServiceStackNavigator = () => (
//   <ServiceStack.Navigator>
//     <ServiceStack.Screen>
//   </ServiceStack.Navigator>
// );

export default function Navigator() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}
