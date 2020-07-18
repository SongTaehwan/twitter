import { Store } from '@models/store';

export const getHistoryState = (store: Store) => store.searchHistories;
export const getHistoryIds = (store: Store) => getHistoryState(store).allIds;
export const getHistoryById = (store: Store, id: number) => ({
  id,
  ...getHistoryState(store).byIds[id],
});

export const getHistory = (store: Store) => {
  return getHistoryIds(store).map((id) => getHistoryById(store, id));
};
