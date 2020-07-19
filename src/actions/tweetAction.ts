import { ADD_TWEETS } from './types';
import client from '../api/client';
import { fetchDataLoading, fetchDataFailure } from './loadingAction';

export const fetchTweet = (url: string) => {
  // TODO: Reducer Separate?
  return async (dispatch) => {
    dispatch(fetchDataLoading(true));

    try {
      const result = await client.get(url, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      const { data } = result;
      console.log(data.search_metadata.query);
      console.log(data);
      // dispatch(addTweets());
      dispatch(fetchDataLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(fetchDataFailure(error.message));
    }
  };
};

export const addTweets = (data) => {
  return {
    type: ADD_TWEETS,
  };
};
