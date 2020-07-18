import createReducer from './createReducer';
import * as ActionType from '../actions/types';

type History = {
  keyword: string;
  thumbnail: string;
};

interface HistoryState {
  allIds: number[];
  byIds: {
    [key: number]: History;
  };
}

interface HistoryAdditionAction {
  id: number;
  keyword: string;
  thumbnail: string;
}

interface HistoryRemovalAction {
  id: number;
}

const initialState: HistoryState = {
  allIds: [],
  byIds: {},
};

export const searchHistoryReducer = createReducer(initialState, {
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
