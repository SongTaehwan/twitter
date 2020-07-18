import createReducer from './createReducer';
import * as ActionType from '../actions/types';
import { LoadingState } from '@models/reducers/loading';

const initialState: LoadingState = {
  isLoading: false,
};

export const loadingState = createReducer(initialState, {
  [ActionType.ENABLE_LOADER](state: LoadingState) {
    return { ...state, isLoading: true };
  },
  [ActionType.DISABLE_LOADER](state: LoadingState) {
    return { ...state, isLoading: false };
  },
});
