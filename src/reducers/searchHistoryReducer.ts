import createReducer from './createReducer';
import * as ActionType from '../actions/types';
import { HistoryState } from '@models/reducers/searchHistory';
import {
  HistoryAdditionAction,
  HistoryRemovalAction,
} from '@models/actions/searchHistory';

const initialState: HistoryState = {
  allIds: [],
  byIds: {},
};

export const searchHistories = createReducer(initialState, {
  [ActionType.ADD_HISTORY](
    state: HistoryState,
    { id, keyword, thumbnail }: HistoryAdditionAction,
  ) {
    return {
      allIds: [...state.allIds, id],
      byIds: {
        ...state.byIds,
        [id]: {
          keyword,
          thumbnail,
        },
      },
    };
  },
  [ActionType.REMOVE_HISTORY](
    state: HistoryState,
    action: HistoryRemovalAction,
  ) {
    return {
      allIds: state.allIds.filter((id) => id !== action.id),
    };
  },
});
