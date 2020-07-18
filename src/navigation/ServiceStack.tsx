import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { LoadingReducerState } from '@reducers/loadingReducer';
import ServiceTopTabNavigator from './ServiceTopTab';
import TabHeader from '@screens/TabHeader';
import Splash from '@screens/Splash';
import { Routes } from './routes';

const tabHeaderStyle = {
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
  cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
};

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
        options={{
          headerShown: false,
          gestureEnabled: false,
          ...tabHeaderStyle,
        }}
      />
      <ServiceStack.Screen
        name="Main"
        component={ServiceTopTabNavigator}
        options={{
          header: () => (
            <SafeAreaView edges={['top']}>
              <TabHeader />
            </SafeAreaView>
          ),
        }}
      />
    </ServiceStack.Navigator>
  );
};

export default ServiceStackNavigator;
