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

  allReady: (playerColor) => {
    console.log('------------');
    store.dispatch({
      type: 'START_ONLINE_GAME_CHESS',
      payload: {
        playerColor,
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
