// src/js/reducers/index.js
const initialState = {
  dates: [],
  selectedDate: '',
};

import { ADD_SELECTED_DATE, ADD_DATES } from "../constants";

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_SELECTED_DATE:
      return Object.assign({}, state, {
        selectedDate: action.payload
      })
    case ADD_DATES:
      return Object.assign({}, state, {
        dates: action.payload
      });
    default:
      return state;
  }
};
export default rootReducer;
