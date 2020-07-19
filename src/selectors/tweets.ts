import { Store } from '@models/store';

export const getTweetState = (store: Store) => store.tweets;
export const getTopTweetState = (store: Store) => store.tweets.allTopTweetIds;
export const getLatestTweetState = (store: Store) =>
  store.tweets.allLatestTweetIds;
export const getPeopleTweetState = (store: Store) =>
  store.tweets.allPeopleTweetIds;
export const getPhotosTweetState = (store: Store) =>
  store.tweets.allPhotosTweetIds;
export const getVideoTweetState = (store: Store) =>
  store.tweets.allVideoTweetIds;

export const getTweetById = (store: Store, id: string) => ({
  id,
  ...getTweetState(store).tweetByIds[id],
});

export const getTopTweets = (store: Store) =>
  getTopTweetState(store).map((id) => getTweetById(store, id));

export const getLatestTweets = (store: Store) =>
  getTopTweetState(store).map((id) => getTweetById(store, id));

export const getPeopleTweets = (store: Store) =>
  getTopTweetState(store).map((id) => getTweetById(store, id));

export const getPhotosTweets = (store: Store) =>
  getTopTweetState(store).map((id) => getTweetById(store, id));

export const getVideoTweets = (store: Store) =>
  getTopTweetState(store).map((id) => getTweetById(store, id));
