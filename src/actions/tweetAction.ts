import {
  FETCH_DATA_LOADING,
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
} from './types';
import client from '../api/client';

export const fetchTweet = (url: string) => {
  // TODO: Reducer Separate?
  fetchDataLoading(true);

  return async (dispatch) => {
    try {
      const result = await client.get(url);
      const { data } = result;
    } catch (error) {
      console.log(error);
      fetchDataFailure(error.message);
    }
  };
};

export const fetchDataLoading = (status: boolean) => ({
  type: FETCH_DATA_LOADING,
  status,
});

export const fetchDataSuccess = (data: any) => ({
  type: FETCH_DATA_SUCCESS,
  data,
});

export const fetchDataFailure = (message: string) => ({
  type: FETCH_DATA_FAILURE,
  message,
});
