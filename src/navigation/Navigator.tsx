import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { navigationRef } from '@navigation';
import ServiceStackNavigator from './ServiceStack';

export default function Navigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <ServiceStackNavigator />
    </NavigationContainer>
  );
}
