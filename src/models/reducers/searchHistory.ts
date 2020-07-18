export type History = {
  keyword: string;
  thumbnail: string;
};

export interface HistoryState {
  allIds: number[];
  byIds: {
    [key: number]: History;
  };
}
