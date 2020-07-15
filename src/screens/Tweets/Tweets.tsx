import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

interface Props {}

const Tweets = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode={'contain'}
        source={require('../../../assets/twitter.png')}
        style={{ widht: 100, height: 82 }}
      />
    </View>
  );
};

export default Tweets;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00a3fa',
  },
});
