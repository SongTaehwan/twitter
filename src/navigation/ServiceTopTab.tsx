import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarOptions,
} from '@react-navigation/material-top-tabs';
import React from 'react';
import Tweets from '@screens/Tweets';
import { TabRoutes } from './routes';
import { Colors } from '@constants';

const tabBarOptions: MaterialTopTabBarOptions = {
  activeTintColor: Colors.twitterBlue,
  inactiveTintColor: Colors.grey,
  labelStyle: {
    fontWeight: 'bold',
    textTransform: 'none',
    fontSize: 15,
  },
  pressColor: 'rgba(27, 148, 224, 0.1)',
  indicatorStyle: {
    backgroundColor: Colors.twitterBlue,
  },
};

const ServiceTopTab = createMaterialTopTabNavigator<TabRoutes>();

function ServiceTopTabNavigator() {
  return (
    <ServiceTopTab.Navigator
      lazy
      initialRouteName="Top"
      tabBarOptions={tabBarOptions}>
      <ServiceTopTab.Screen name="Top" component={Tweets} />
      <ServiceTopTab.Screen name="Latest" component={Tweets} />
      <ServiceTopTab.Screen name="People" component={Tweets} />
      <ServiceTopTab.Screen name="Photos" component={Tweets} />
      <ServiceTopTab.Screen name="Videos" component={Tweets} />
    </ServiceTopTab.Navigator>
  );
}

export default ServiceTopTabNavigator;
