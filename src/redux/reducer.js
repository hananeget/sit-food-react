import { ADD_REMINDER } from '../component/Types';

const reminder = (state = [], action) => {
  let reminder = [];
  if (action.type === ADD_REMINDER) {
    reminder = [...state, { data: action.data, Num: action.Num }];
    console.log('from reduser', reminder);
    return reminder;
  } else {
    return state;
  }
};
export default reminder;
