const initialState = {};

export default function(state = initialState, action){
  switch(action.type) {
    case 'LOG_IN':
      return {...state , username: action.payload.username };
    case 'LOG_OUT':
      return initialState;
    default:
      return state;
  }
}
