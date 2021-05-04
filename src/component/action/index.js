import { ADD_REMINDER ,REMOVE_REMINDER } from '../Types';
import {bake_cookis , read_cookie} from "sfcookies"
export const add_reminder = (data, Num = 0) => {
  const action = {
    type: ADD_REMINDER,
    data,
    Num,
  };
  console.log('add', action);
  return action;
};

export const remove_reminder = (id) => {
  const action = {
    type: REMOVE_REMINDER,
   id,
  };
  console.log('remove', action);
  return action;
};