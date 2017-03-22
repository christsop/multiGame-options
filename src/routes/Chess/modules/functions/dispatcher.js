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
    console.log('------------'+playerColor);
    store.dispatch({
      type: 'START_ONLINE_GAME_CHESS',
      payload: {
        playerColor,
      },
    });
  },

  moveFigure: (action) => {
    store.dispatch({
      type: action.type,
      payload: {
        rowID: action.payload.rowId, lineID: action.payload.lineId, readyToMove: action.payload.readyToMove
      },
    });
  },
};

export default dispatcher;
