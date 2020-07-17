import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarOptions,
} from '@react-navigation/material-top-tabs';
import React from 'react';
import Tweets from '@screens/Tweets';
import { TabRoutes } from './routes';
import { Colors } from '@constants';
import { Dimensions, View, Text, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ViewPagerAdapter from 'react-native-tab-view-viewpager-adapter';
import Icon from 'react-native-vector-icons/Entypo';

const tabBarOptions: MaterialTopTabBarOptions = {
  activeTintColor: Colors.twitterBlue,
  inactiveTintColor: Colors.grey,
  labelStyle: {
    fontWeight: 'bold',
    textTransform: 'none',
    fontSize: 15,
  },
  tabStyle: {
    width: Dimensions.get('screen').width / 4,
  },
  pressColor: 'rgba(27, 148, 224, 0.1)',
  indicatorStyle: {
    backgroundColor: Colors.twitterBlue,
  },
  scrollEnabled: true,
};

const ServiceTopTab = createMaterialTopTabNavigator<TabRoutes>();

function ServiceTopTabNavigator() {
  return (
    <ServiceTopTab.Navigator
      lazy
      initialRouteName="Top"
      tabBarOptions={tabBarOptions}
      pager={(props) => {
        return (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                backgroundColor: Colors.white,
                height: 48,
                paddingHorizontal: 9,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Pressable>
                <Icon
                  name={'chevron-left'}
                  size={26}
                  color={Colors.twitterBlue}
                />
              </Pressable>
            </View>
            <View>
              <ViewPagerAdapter {...props} />
            </View>
          </View>
        );
      }}>
      <ServiceTopTab.Screen name="Top" component={Tweets} />
      <ServiceTopTab.Screen name="Latest" component={Tweets} />
      <ServiceTopTab.Screen name="People" component={Tweets} />
      <ServiceTopTab.Screen name="Photos" component={Tweets} />
      <ServiceTopTab.Screen name="Videos" component={Tweets} />
    </ServiceTopTab.Navigator>
  );
}

export default ServiceTopTabNavigator;
