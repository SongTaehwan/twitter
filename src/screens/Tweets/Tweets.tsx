import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Colors } from '@constants';

interface Props {}

const Tweets = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>{'Try searching for people, topics, or keywords'}</Text>
      <ScrollView>
        <View style={{ height: 200 }}>
          <Text>History</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Tweets;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});
