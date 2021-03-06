import { ADD_REMINDER, REMOVE_REMINDER } from '../component/Types';
import { bake_cookie, read_cookie } from 'sfcookies';

const reminder = (state = [], action) => {
  let reminder = [];
  state = read_cookie('x');
  if (action.type === ADD_REMINDER) {
    reminder = [...state, { data: action.data }];
    bake_cookie('x', reminder);

    console.log('from reduser', reminder);
    return reminder;
  } else if (action.type === REMOVE_REMINDER) {
    reminder = state.filter((reminder) => reminder.data.idMeal !== action.id);
    bake_cookie('x', reminder);
    console.log('ihhh', reminder);
    return reminder;
  } else {
    return state;
  }
};
export default reminder;
