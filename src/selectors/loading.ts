import { Store } from '@models/store';

export const getLoadingState = (store: Store) => store.loadingState;
export const getLoadingStatus = (store: Store) =>
  getLoadingState(store).isLoading;
