import * as searchHistories from './searchHistoryReducer';
import * as loadingState from './loadingReducer';
import * as tweets from './tweetReducer';

export default Object.assign(loadingState, searchHistories, tweets);
