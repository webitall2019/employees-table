export const rootReducer = (state = [], action) => {
  switch (action.type) {
    case "init":
      return (state = action.payload);
    case "newUser":
      return [...state, action.payload];
    default:
      break;
  }
  return state;
};
