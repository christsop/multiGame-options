import { lighten } from './Lighten';

var options = ['first', 'second', 'third', 'fourth'];
export const PlayNextLevel = (state, move) => {
  let history = state.history;
  let newCheckHistory = [];
  const rand = options[Math.floor(Math.random() * options.length)];
  let newHistory = history.concat([rand]);
  setTimeout(() => {
    for (let i = 0; i < state.score + 1; i++) {
      ((x) => {
        setTimeout(() => { lighten(x); }, i * 600);
        newCheckHistory.push(x);
      })(newHistory[i]);
    }
  }, 1500);
  return {
    ...state,
    gameState: 'started',
    history: newHistory,
    score: state.score + 1,
    checkHistory: newCheckHistory,
    highScore: state.highScore + 1,
  };
};
