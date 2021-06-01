const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "spaces/fecthed":
      return [...state, ...action.payload];

    default:
      return state;
  }
};
