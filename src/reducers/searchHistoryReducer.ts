import { HistoryState } from '@models/reducers/searchHistory';
import createReducer from './createReducer';
import * as ActionType from '../actions/types';
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
    { id, keyword }: HistoryAdditionAction,
  ) {
    return {
      allIds: [...state.allIds, id],
      byIds: {
        ...state.byIds,
        [id]: {
          keyword,
        },
      },
    };
  },
  [ActionType.REMOVE_HISTORY](
    state: HistoryState,
    action: HistoryRemovalAction,
  ) {
    const { [action.id]: _, ...withoutTargetItem } = state.byIds;
    return {
      allIds: state.allIds.filter((id) => id !== action.id),
      byIds: {
        ...withoutTargetItem,
      },
    };
  },
  [ActionType.RESET_HISTORY]() {
    return initialState;
  },
});
