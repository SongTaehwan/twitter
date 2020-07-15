import { StackNavigationProp } from '@react-navigation/stack';
import { CommonActions } from '@react-navigation/native';
import { View, StyleSheet, Image } from 'react-native';
import RNSplash from 'react-native-bootsplash';
import React, { useEffect } from 'react';
import { Routes } from '../navigation/routes';

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

  return (
    <View style={styles.container}>
      <Image
        resizeMode={'contain'}
        source={require('../../assets/twitter.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00A3FA',
  },
  image: {
    width: 100,
    height: 82,
  },
});

export default Splash;
