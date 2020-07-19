import { FETCH_DATA_LOADING, FETCH_DATA_FAILURE } from './types';

export const fetchDataLoading = (status: boolean) => ({
  type: FETCH_DATA_LOADING,
  status,
});

export const fetchDataFailure = (message: string) => ({
  type: FETCH_DATA_FAILURE,
  message,
});
