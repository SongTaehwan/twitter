import createReducer from './createReducer';
import * as ActionType from '../actions/types';
import { TweetState } from '@models/reducers/tweet';
import { TopTweetAction } from '@models/actions/tweet';

const initialState: TweetState = {
  allTopTweetIds: [],
  allLatestTweetIds: [],
  allPeopleTweetIds: [],
  allPhotosTweetIds: [],
  allVideoTweetIds: [],
  allUserIds: [],
  tweetByIds: {},
  userByIds: {},
};

export const tweets = createReducer(initialState, {
  [ActionType.ADD_TOP_TWEETS](
    state: TweetState,
    { data }: TopTweetAction,
  ): TweetState {
    const updatedTopIds = [...state.allTopTweetIds];
    const updatedUserIds = [...state.allUserIds];
    const updatedTweets = JSON.parse(JSON.stringify(state.tweetByIds));
    const updatedUsers = JSON.parse(JSON.stringify(state.userByIds));

    data.forEach((tweet) => {
      const {
        id_str,
        created_at,
        retweet_count,
        favorite_count,
        text,
        user,
        extended_entities,
        entities,
      } = tweet;

      if (!updatedTopIds.includes(id_str)) {
        updatedTopIds.push(id_str);
      }

      updatedTweets[id_str] = {
        text,
        createdAt: created_at,
        retweetCount: retweet_count,
        favoriteCount: favorite_count,
        hashTags: entities.hashtags.map((hashTag) => hashTag.text),
        user: user.id_str,
        images:
          extended_entities?.media.map((image) => image.media_url_https) ?? [],
      };

      if (!updatedUserIds.includes(user.id_str)) {
        updatedUserIds.push(user.id_str);
      }

      updatedUsers[user.id_str] = {
        name: user.name,
        screenName: user.screen_name,
        thumbnail: user.profile_image_url_https,
      };
    });

    return {
      ...state,
      allTopTweetIds: updatedTopIds,
      allUserIds: updatedUserIds,
      tweetByIds: updatedTweets,
      userByIds: updatedUsers,
    };
  },
  [ActionType.ADD_LATEST_TWEETS](
    state: TweetState,
    { data }: TopTweetAction,
  ): TweetState {
    const updatedTopIds = [...state.allTopTweetIds];
    const updatedUserIds = [...state.allUserIds];
    const updatedTweets = JSON.parse(JSON.stringify(state.tweetByIds));
    const updatedUsers = JSON.parse(JSON.stringify(state.userByIds));

    data.forEach((tweet) => {
      const {
        id_str,
        created_at,
        retweet_count,
        favorite_count,
        text,
        user,
        extended_entities,
        entities,
      } = tweet;

      if (!updatedTopIds.includes(id_str)) {
        updatedTopIds.push(id_str);
      }

      updatedTweets[id_str] = {
        text,
        createdAt: created_at,
        retweetCount: retweet_count,
        favoriteCount: favorite_count,
        hashTags: entities.hashtags.map((hashTag) => hashTag.text),
        user: user.id_str,
        images:
          extended_entities?.media.map((image) => image.media_url_https) ?? [],
      };

      if (!updatedUserIds.includes(user.id_str)) {
        updatedUserIds.push(user.id_str);
      }

      updatedUsers[user.id_str] = {
        name: user.name,
        screenName: user.screen_name,
        thumbnail: user.profile_image_url_https,
      };
    });

    return {
      ...state,
      allTopTweetIds: updatedTopIds,
      allUserIds: updatedUserIds,
      tweetByIds: updatedTweets,
      userByIds: updatedUsers,
    };
  },
  [ActionType.ADD_PEOPLE_TWEETS](
    state: TweetState,
    { data }: TopTweetAction,
  ): TweetState {
    const updatedTopIds = [...state.allTopTweetIds];
    const updatedUserIds = [...state.allUserIds];
    const updatedTweets = JSON.parse(JSON.stringify(state.tweetByIds));
    const updatedUsers = JSON.parse(JSON.stringify(state.userByIds));

    data.forEach((tweet) => {
      const {
        id_str,
        created_at,
        retweet_count,
        favorite_count,
        text,
        user,
        extended_entities,
        entities,
      } = tweet;

      if (!updatedTopIds.includes(id_str)) {
        updatedTopIds.push(id_str);
      }

      updatedTweets[id_str] = {
        text,
        createdAt: created_at,
        retweetCount: retweet_count,
        favoriteCount: favorite_count,
        hashTags: entities.hashtags.map((hashTag) => hashTag.text),
        user: user.id_str,
        images:
          extended_entities?.media.map((image) => image.media_url_https) ?? [],
      };

      if (!updatedUserIds.includes(user.id_str)) {
        updatedUserIds.push(user.id_str);
      }

      updatedUsers[user.id_str] = {
        name: user.name,
        screenName: user.screen_name,
        thumbnail: user.profile_image_url_https,
      };
    });

    return {
      ...state,
      allTopTweetIds: updatedTopIds,
      allUserIds: updatedUserIds,
      tweetByIds: updatedTweets,
      userByIds: updatedUsers,
    };
  },
  [ActionType.ADD_PHOTOS_TWEETS](
    state: TweetState,
    { data }: TopTweetAction,
  ): TweetState {
    const updatedTopIds = [...state.allTopTweetIds];
    const updatedUserIds = [...state.allUserIds];
    const updatedTweets = JSON.parse(JSON.stringify(state.tweetByIds));
    const updatedUsers = JSON.parse(JSON.stringify(state.userByIds));

    data.forEach((tweet) => {
      const {
        id_str,
        created_at,
        retweet_count,
        favorite_count,
        text,
        user,
        extended_entities,
        entities,
      } = tweet;

      if (!updatedTopIds.includes(id_str)) {
        updatedTopIds.push(id_str);
      }

      updatedTweets[id_str] = {
        text,
        createdAt: created_at,
        retweetCount: retweet_count,
        favoriteCount: favorite_count,
        hashTags: entities.hashtags.map((hashTag) => hashTag.text),
        user: user.id_str,
        images:
          extended_entities?.media.map((image) => image.media_url_https) ?? [],
      };

      if (!updatedUserIds.includes(user.id_str)) {
        updatedUserIds.push(user.id_str);
      }

      updatedUsers[user.id_str] = {
        name: user.name,
        screenName: user.screen_name,
        thumbnail: user.profile_image_url_https,
      };
    });

    return {
      ...state,
      allTopTweetIds: updatedTopIds,
      allUserIds: updatedUserIds,
      tweetByIds: updatedTweets,
      userByIds: updatedUsers,
    };
  },
  [ActionType.ADD_VIDEOS_TWEETS](
    state: TweetState,
    { data }: TopTweetAction,
  ): TweetState {
    const updatedTopIds = [...state.allTopTweetIds];
    const updatedUserIds = [...state.allUserIds];
    const updatedTweets = JSON.parse(JSON.stringify(state.tweetByIds));
    const updatedUsers = JSON.parse(JSON.stringify(state.userByIds));

    data.forEach((tweet) => {
      const {
        id_str,
        created_at,
        retweet_count,
        favorite_count,
        text,
        user,
        extended_entities,
        entities,
      } = tweet;

      if (!updatedTopIds.includes(id_str)) {
        updatedTopIds.push(id_str);
      }

      updatedTweets[id_str] = {
        text,
        createdAt: created_at,
        retweetCount: retweet_count,
        favoriteCount: favorite_count,
        hashTags: entities.hashtags.map((hashTag) => hashTag.text),
        user: user.id_str,
        images:
          extended_entities?.media.map((image) => image.media_url_https) ?? [],
      };

      if (!updatedUserIds.includes(user.id_str)) {
        updatedUserIds.push(user.id_str);
      }

      updatedUsers[user.id_str] = {
        name: user.name,
        screenName: user.screen_name,
        thumbnail: user.profile_image_url_https,
      };
    });

    return {
      ...state,
      allTopTweetIds: updatedTopIds,
      allUserIds: updatedUserIds,
      tweetByIds: updatedTweets,
      userByIds: updatedUsers,
    };
  },
});
