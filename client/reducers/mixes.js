// users reducer
export default function mixes(state = {}, action) {
  switch (action.type) {
    case 'MIXES_LIST_SAVE':
      console.log("redux list save", action.mixes);
      return action.mixes;

    case 'MIXES_ADD_SAVE':
      const mix = action.mix;
      mix.id = mix.id || Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
      return [...state, mix];

    case 'MIXES_EDIT_SAVE':
      return state.map(mix =>
        Number(mix.id) === Number(action.mix.id) ? {...action.mix} : mix
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