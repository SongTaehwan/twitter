import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@constants';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';

interface TweetListProps {}

const TweetList = ({}: TweetListProps) => {
  const dispatch = useDispatch();
  const tweets = useSelector(() => null);

  const renderTweetItem = ({ item, index }) => {
    return (
      <View>
        <Text>Test {index}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.emptyTitle}>
        {'Try searching for people, topics, or keywords'}
      </Text>
      <FlatList data={[]} renderItem={renderTweetItem} />
    </View>
  );
};

export default TweetList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  emptyTitle: {
    color: Colors.grey,
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    paddingTop: 20,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
