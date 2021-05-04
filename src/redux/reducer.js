import { ADD_REMINDER ,REMOVE_REMINDER } from '../component/Types';

const reminder = (state = [], action) => {
  let reminder = [];
  if (action.type === ADD_REMINDER) {
    reminder = [...state,{ data: action.data, Num: action.Num ,id: Math.random()}];
    console.log('from reduser', reminder);
    return reminder;
  }else if (action.type === REMOVE_REMINDER) {
    reminder =state.filter(reminder => reminder.id !== action.id);
    return reminder;
  }
  else {
    return state;
  }
};
export default reminder;
