import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { Platform } from 'react-native';
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
            ...Platform.select({
              ios: {
                left: 0,
                paddingVertical: 5,
              },
              android: {
                left: 48,
                paddingVertical: 10,
              },
            }),
            flex: 1,
            flexDirection: 'row',
            right: 48,
            height: '100%',
            paddingHorizontal: 20,
            marginRight: 0,
            marginLeft: Platform.OS === 'ios' ? 48 : 0,
          },
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
          headerRightContainerStyle: {
            position: Platform.OS === 'ios' ? 'relative' : 'absolute',
            paddingRight: 10,
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
