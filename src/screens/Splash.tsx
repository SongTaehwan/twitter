import React, { useEffect } from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import RNSplash from 'react-native-bootsplash';
import { Routes } from '../navigation/routes';
import { CommonActions } from '@react-navigation/native';

interface SplashProps {
  navigation: StackNavigationProp<Routes, 'Splash'>;
}

const Splash = ({ navigation }: SplashProps) => {
  useEffect(() => {
    // TODO: Auth check
    RNSplash.hide({ duration: 500 });
    navigation.dispatch(
      CommonActions.reset({ routes: [{ name: 'Main' }], index: 0 }),
    );
  }, []);

  return <View />;
};

export default Splash;
