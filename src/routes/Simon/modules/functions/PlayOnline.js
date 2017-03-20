import { lighten } from './Lighten';

var options = ['first', 'second', 'third', 'fourth'];
export const PlayOnline = (state, move) => {
  let score = state.score;
  let checkHistory = state.checkHistory;
  let history = state.history;
  score++;
  checkHistory = [];
  var rand = options[move];
  history.push(rand);
  setTimeout(() => {
    for (let i = 0; i < score; i++) {
      ((x) => {
        setTimeout(() => { lighten(x); }, i * 600);
        checkHistory.push(x);
      })(history[i]);
    }
  }, 1500);

  return {
    ...state,
    score,
    checkHistory,
    history,
    gameState: 'startedOnline',
  };
};
