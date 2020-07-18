import { HistoryAdditionAction } from '@models/actions/searchHistory';
import { ADD_HISTORY, REMOVE_HISTORY } from './types';

export const addHistory = ({
  thumbnail,
  keyword,
  id,
}: HistoryAdditionAction) => ({
  type: ADD_HISTORY,
  thumbnail,
  keyword,
  id,
});

export const removeHistory = (id: number) => ({
  type: REMOVE_HISTORY,
  id,
});
