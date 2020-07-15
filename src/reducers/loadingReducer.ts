import createReducer from './createReducer';
import * as ActionType from '../actions/types';

interface LoadingReducerState {
  isLoading: boolean;
}

const initialState: LoadingReducerState = {
  isLoading: false,
};

export const loadingReducer = createReducer(initialState, {
  [ActionType.ENABLE_LOADER](state: LoadingReducerState) {
    return { ...state, isLoading: true };
  },
  [ActionType.DISABLE_LOADER](state: LoadingReducerState) {
    return { ...state, isLoading: false };
  },
});
