export const rootReducer = (state = [], action) => {
  switch (action.type) {
    case "init":
      return (state = action.payload);
    case "newUser":
      let stateCopy = { ...state };
      stateCopy.users.push(action.payload);
      return stateCopy;
    default:
      break;
  }
  return state;
};
