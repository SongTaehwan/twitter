import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RNSplash from 'react-native-bootsplash';
import { useSelector } from 'react-redux';
import 'react-native-gesture-handler';
import * as React from 'react';
import Splash from '@screens/Splash';
import Tweets from '@screens/Tweets';
import { Routes, TabRoutes } from './routes';
import { LoadingReducerState } from '@reducers/loadingReducer';
import { navigationRef } from '@navigation';

const Tab = createMaterialTopTabNavigator<TabRoutes>();

function TopTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Top" component={Tweets} />
      <Tab.Screen name="Latest" component={Tweets} />
      <Tab.Screen name="People" component={Tweets} />
      <Tab.Screen name="Photos" component={Tweets} />
      <Tab.Screen name="Video" component={Tweets} />
    </Tab.Navigator>
  );
}

const ServiceStack = createStackNavigator<Routes>();

const ServiceStackNavigator = (): JSX.Element => {
  const isLoading = useSelector(
    (state: { loadingReducer: LoadingReducerState }) =>
      state.loadingReducer.isLoading,
  );

  return (
    <ServiceStack.Navigator>
      <ServiceStack.Screen
        name="Splash"
        component={Splash}
        options={{ header: undefined }}
      />
      <ServiceStack.Screen name="Main" component={TopTabNavigator} />
    </ServiceStack.Navigator>
  );
};

export default function Navigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <ServiceStackNavigator />
    </NavigationContainer>
  );
}
