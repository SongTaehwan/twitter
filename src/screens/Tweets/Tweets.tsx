import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

interface Props {}

const Tweets = (props: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ height: 200 }}>
          <Text>History</Text>
        </View>
        <View style={{ height: 200 }}>
          <Text>History</Text>
        </View>
        <View style={{ height: 200 }}>
          <Text>History</Text>
        </View>
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
  },
});
