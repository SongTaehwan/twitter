import { HistoryAdditionAction } from '@models/actions/searchHistory';
import { ADD_HISTORY, REMOVE_HISTORY, RESET_HISTORY } from './types';

export const addHistory = ({ keyword, id }: HistoryAdditionAction) => ({
  type: ADD_HISTORY,
  keyword,
  id,
});

export const removeHistory = (id: number) => ({
  type: REMOVE_HISTORY,
  id,
});

export const resetHistory = () => ({
  type: RESET_HISTORY,
});
