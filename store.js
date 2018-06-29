const { createStore, combineReducers } = require("redux");

const defaultReduers = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_POSITION":
      return {
        ...state,
        ...action.payload
      };
  }
  return state;
};

export default createStore(
  combineReducers({
    position: defaultReduers
  }),
  {}
);
