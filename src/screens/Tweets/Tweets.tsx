import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {}

const Tweets = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Try searching for people, topics, or keywords</Text>
    </View>
  );
};

export default Tweets;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
