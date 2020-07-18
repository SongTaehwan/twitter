export const getSearchEndpoint = (query: string) => {
  return `search/tweets.json?q=${query}`;
};
