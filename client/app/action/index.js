import { ADD_SELECTED_DATE, ADD_DATES } from "../constants";

export function addSelectedDate(payload) {
  return { type: ADD_SELECTED_DATE, payload }
};

export function addDates(payload) {
  return {type: ADD_DATES, payload}
}
