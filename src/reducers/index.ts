import * as searchHistory from './searchHistoryReducer';
import * as loading from './loadingReducer';
import * as tweet from './tweetReducer';

export default Object.assign(loading, searchHistory, tweet);
