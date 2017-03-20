import { lighten } from './Lighten'
import { simonSocket } from '../../../../model-services/server-apis';

export const PadOnline = (state, pad) => {
  let checkHistory = state.checkHistory;
  let score = state.score;
  let history = state.history;
  if (checkHistory[0] === pad) {
    lighten(pad);
    if (checkHistory.length === 1) {
      simonSocket.emit('nextLevel');
      return {
        ...state,
      };
    }
    checkHistory.shift();
    return {
      ...state,
      checkHistory,
    };
  } else {
    score = 0;
    history = [];
    return {
      ...state,
      score,
      history,
      gameState: 'lose',
    };
  }
};
