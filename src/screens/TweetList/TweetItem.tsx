import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

interface Props {}

const TweetItem = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image />
        <View>
          <View>Full Text</View>
          <View>Tag</View>
        </View>
      </View>
      <Viiew>
        <Image />
      </Viiew>
      <View style={styles.iconCover}></View>
    </View>
  );
};

export default TweetItem;

const styles = StyleSheet.create({
  container: {},
  content: {
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  iconCover: {
    paddingHorizontal: 15,
  },
});
