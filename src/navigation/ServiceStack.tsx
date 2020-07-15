import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import React from 'react';
import { LoadingReducerState } from '@reducers/loadingReducer';
import Splash from '@screens/Splash';
import ServiceTopTabNavigator from './ServiceTopTab';
import { Routes } from './routes';
import { ArrowButton, HorizontalDots, SearchBar } from '@components';

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
        component={ServiceTopTabNavigator}
        options={{
          headerLeft: () => {
            return <ArrowButton />;
          },
          headerRight: () => {
            return <HorizontalDots />;
          },
          headerTitle: () => {
            return <SearchBar />;
          },
          headerTitleContainerStyle: {
            positioin: 'relative',
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'orange',
            marginRight: 0,
          },
          headerLeftContainerStyle: {
            paddingLeft: 10,
            backgroundColor: 'green',
          },
          headerRightContainerStyle: {
            paddingRight: 10,
            backgroundColor: 'green',
          },
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
    </ServiceStack.Navigator>
  );
};

export default ServiceStackNavigator;
