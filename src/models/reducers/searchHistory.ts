export type History = {
  keyword: string;
};

export interface HistoryState {
  searchWord: string;
  allIds: string[];
  byIds: {
    [id: string]: History;
  };
}
