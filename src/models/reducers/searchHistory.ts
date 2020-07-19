export type History = {
  keyword: string;
};

export interface HistoryState {
  allIds: number[];
  byIds: {
    [key: string]: History;
  };
}
