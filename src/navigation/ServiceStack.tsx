import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import ServiceTopTabNavigator from './ServiceTopTab';
import TabHeader from '@screens/TabHeader';
import Splash from '@screens/Splash';
import { Routes } from './routes';
import { navigationRef } from './NavigationHelper';

const tabHeaderStyle = {
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
  cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
};

const ServiceStack = createStackNavigator<Routes>();

const ServiceStackNavigator = (): JSX.Element => {
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
          header: () => {
            const currentTab = navigationRef.current!.getCurrentRoute()!.name;
            return (
              <SafeAreaView edges={['top']}>
                <TabHeader tabName={currentTab} />
              </SafeAreaView>
            );
          },
        }}
      />
    </ServiceStack.Navigator>
  );
};

export default ServiceStackNavigator;
