import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@constants';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { Store } from '@models/store';
import { getTopTweets } from '@selectors/tweets';
import TweetItem from './TweetItem';

interface TweetListProps {}

const TweetList = ({}: TweetListProps) => {
  const dispatch = useDispatch();
  const tweets = useSelector((state: Store) => getTopTweets(state));
  console.log(tweets);

  const renderTweetItem = ({ item }) => {
    return <TweetItem data={item} />;
  };

  return (
    <View style={styles.container}>
      {!tweets.length && (
        <Text style={styles.emptyTitle}>
          {'Try searching for people, topics, or keywords'}
        </Text>
      )}
      <FlatList data={tweets} renderItem={renderTweetItem} />
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
