// users reducer
export default function mixes(state = {}, action) {
  switch (action.type) {
    case 'CHANGE_ACTIVE_PAGE':
      //console.log("redux list save", action.mixes);
      return action.activePage;
    // initial state
    default:
      return state;
  }
}