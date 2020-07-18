import { HistoryState } from './reducers/searchHistory';
import { LoadingState } from './reducers/loading';
import { TweetState } from './reducers/tweet';

export interface Store {
  searchHistories: HistoryState;
  loadingState: LoadingState;
  tweets: TweetState;
}
