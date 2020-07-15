import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import 'react-native-gesture-handler';
import * as React from 'react';
import { LoadingReducerState } from '@reducers/loadingReducer';
import { navigationRef } from '@navigation';
import Splash from '@screens/Splash';
import Tweets from '@screens/Tweets';
import { Routes, TabRoutes } from './routes';

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
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <ServiceStack.Screen
        name="Main"
        component={TopTabNavigator}
        options={{
          headerStyle: {
            borderBottomWidth: 0,
            shadowOffset: {
              width: 0,
              height: 0,
            },
          },
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
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
