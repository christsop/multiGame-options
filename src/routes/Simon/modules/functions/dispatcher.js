import { store } from 'main.js'

let dispatcher = {
  nextLevel: (move) => {
    store.dispatch({
      type: 'START_GAME_ONLINE',
      payload: {
        move,
      },
    });
  },

  allReady: (move) => {
    store.dispatch({
      type: 'START_GAME_ONLINE',
      payload: {
        move,
      },
    });
  },
  leaveGame: () => {
    alert('your opponent left');
    store.dispatch({
      type: 'LEAVE_GAME',
    });
  },
};

export default dispatcher;
