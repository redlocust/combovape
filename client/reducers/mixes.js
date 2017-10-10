// users reducer
export default function mixes(state = {}, action) {
  switch (action.type) {
    case 'MIXES_LIST_GET':
      return action.mixes;

    case 'USERS_ADD_SAVE':
      const user = action.user;
      user.id = user.id || Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
      return [...state, user];

    case 'USERS_EDIT_SAVE':
      return state.map(user =>
        Number(user.id) === Number(action.user.id) ? {...action.user} : user
      );
      break;

    case 'USERS_DELETE_SAVE':
      return state.filter(user =>
        Number(user.id) !== Number(action.user_id)
      );

    // initial state
    default:
      return state;
  }
}