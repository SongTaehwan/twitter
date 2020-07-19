import { fetchDataLoading, fetchDataFailure } from './loadingAction';
import {
  ADD_TOP_TWEETS,
  ADD_LATEST_TWEETS,
  ADD_PEOPLE_TWEETS,
  ADD_PHOTOS_TWEETS,
  ADD_VIDEOS_TWEETS,
} from './types';
import { Tabs } from '@screens/TabHeader/TabHeader';
import client from '../api/client';

const createAction = (handler: any) => {
  return (data: any, category: Tabs) => {
    if (handler.hasOwnProperty(`addTweetsFrom${category}`)) {
      return handler[`addTweetsFrom${category}`](data);
    }
  };
};

const tweetActions = createAction({
  addTweetsFromTop(data: any) {
    return {
      type: ADD_TOP_TWEETS,
      data,
    };
  },
  addTweetsFromLatest(data: any) {
    return {
      type: ADD_LATEST_TWEETS,
      data,
    };
  },
  addTweetsFromPeople(data: any) {
    return {
      type: ADD_PEOPLE_TWEETS,
      data,
    };
  },
  addTweetsFromPhotos(data: any) {
    return {
      type: ADD_PHOTOS_TWEETS,
      data,
    };
  },
  addTweetsFromVideos(data: any) {
    return {
      type: ADD_VIDEOS_TWEETS,
      data,
    };
  },
});

export const fetchTweet = (url: string, category: Tabs) => {
  // TODO: Reducer Separate?
  return async (dispatch) => {
    dispatch(fetchDataLoading(true));

    try {
      const result = await client.get(url);
      const { data } = result;
      // console.log(data.search_metadata.query);
      console.log(data.statuses);
      dispatch(tweetActions(data.statuses, category));
      dispatch(fetchDataLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(fetchDataFailure(error.message));
    }
  };
};
