const initState = {
  connt: 4,
};
const reducer = (state = initState, acticon) => {
  if (acticon.type === 'INC') {
    return { connt: state.connt + 1 };
  }

  return state;
};
export default reducer;
