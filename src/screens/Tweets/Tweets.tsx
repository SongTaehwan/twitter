import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {}

const Tweets = (props: Props) => {
  return (
    <View>
      <Text>123</Text>
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
