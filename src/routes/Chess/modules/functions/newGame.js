import squares from '../functions/resetBoard'
import { initialState } from '../constants'
const newGame = (state) => {
  console.log(squares);
  return {
    ...state,
    squares,
    playerTurn: initialState.playerTurn,
    gameState: 'startedOffline',
  };
};

export default newGame;
