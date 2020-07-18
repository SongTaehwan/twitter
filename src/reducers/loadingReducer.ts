import createReducer from './createReducer';
import * as ActionType from '../actions/types';
import { LoadingState, LoadingAction } from '@models/reducers/loading';

const initialState: LoadingState = {
  isLoading: false,
};

export const loadingState = createReducer(initialState, {
  [ActionType.FETCH_DATA_LOADING](state: LoadingState, action: LoadingAction) {
    return { ...state, isLoading: action.status };
  },
  [ActionType.FETCH_DATA_FAILURE](state: LoadingState) {
    return { ...state, isLoading: false };
  },
});
