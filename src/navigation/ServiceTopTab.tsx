import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarOptions,
} from '@react-navigation/material-top-tabs';
import React from 'react';
import TweetList from '@screens/TweetList';
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
  pressColor: Colors.rippleColor,
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
      <ServiceTopTab.Screen name="Top" component={TweetList} />
      <ServiceTopTab.Screen name="Latest" component={TweetList} />
      <ServiceTopTab.Screen name="People" component={TweetList} />
      <ServiceTopTab.Screen name="Photos" component={TweetList} />
      <ServiceTopTab.Screen name="Videos" component={TweetList} />
    </ServiceTopTab.Navigator>
  );
}

export default ServiceTopTabNavigator;
