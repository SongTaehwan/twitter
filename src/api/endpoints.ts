type ResultType = 'recent' | 'popular';

export const getTopSearchURL = (query: string): string => {
  const encoded = encodeURIComponent(`${query}`);
  return `search/tweets.json?q=${encoded}&result_type=popular`;
};

export const getLatestSearchURL = (query: string): string => {
  const encoded = encodeURIComponent(`${query} AND -filter:retweets`);
  return `search/tweets.json?q=${encoded}&result_type=popular`;
};

export const getPeopleSearchURL = (query: string): string => {
  const encoded = encodeURIComponent(`${query}`);
  return `users/search.json?q=${encoded}`;
};

export const getPhotoSearchURL = (query: string): string => {
  const encoded = encodeURIComponent(`${query} AND filter:images`);
  return `search/tweets.json?q=${encoded}&result_type=popular`;
};

export const getVideoSearchURL = (query: string): string => {
  const encoded = encodeURIComponent(`${query} AND filter:native_video`);
  return `search/tweets.json?q=${encoded}&result_type=popular`;
};
