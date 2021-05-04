import { ADD_REMINDER } from '../Types';

export const add_reminder = (data, Num = 0) => {
  const action = {
    type: ADD_REMINDER,
    data,
    Num: Num + 1,
  };
  console.log('add', action);
  return action;
};
