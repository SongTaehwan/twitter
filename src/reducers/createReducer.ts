export default function createReducer(initialState: any, handler: any) {
  return function reducer(state = initialState, action: any) {
    if (handler.hasOwnProperty(action.type)) {
      return handler[action.type](state, action);
    } else {
      return state;
    }
  };
}
