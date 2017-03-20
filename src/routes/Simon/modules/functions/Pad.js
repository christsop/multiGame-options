import { PlayNextLevel, lighten } from '../functions';
import { initialState } from 'store/simonReducer'
export const Pad = (state, pad) => {
  let highScore = 1;
  if (state.checkHistory[0] === pad) {
    lighten(pad);
    if (state.checkHistory.length === 1) {
      return PlayNextLevel(state);
    };
    const newCheckHistory = state.checkHistory.slice(1);
    return {
      ...state,
      checkHistory: newCheckHistory,
    };
  };
  if (state.highScore < state.score) {
    return {
      ...initialState,
      gameState: 'lose',
      highScore: state.score - 1,
    };
  };
  console.log(state);
  return {
    ...initialState,
    highScore: state.highScore,
    gameState: 'lose',
  };
};
