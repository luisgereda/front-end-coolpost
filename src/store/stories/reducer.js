const initialState = { stories: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case "stories/detail":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
