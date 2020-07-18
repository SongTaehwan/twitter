export interface HistoryAdditionAction {
  id: number;
  keyword: string;
  thumbnail: string;
}

export interface HistoryRemovalAction {
  id: number;
}
