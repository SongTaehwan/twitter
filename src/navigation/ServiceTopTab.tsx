import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import Tweets from '@screens/Tweets';
import { TabRoutes } from './routes';

const ServiceTopTab = createMaterialTopTabNavigator<TabRoutes>();

function ServiceTopTabNavigator() {
  return (
    <ServiceTopTab.Navigator>
      <ServiceTopTab.Screen name="Top" component={Tweets} />
      <ServiceTopTab.Screen name="Latest" component={Tweets} />
      <ServiceTopTab.Screen name="People" component={Tweets} />
      <ServiceTopTab.Screen name="Photos" component={Tweets} />
      <ServiceTopTab.Screen name="Video" component={Tweets} />
    </ServiceTopTab.Navigator>
  );
}

export default ServiceTopTabNavigator;
