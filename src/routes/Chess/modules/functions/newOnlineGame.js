
const newGameOnline = (state, playerColor) => {

  return {
    ...state,
    playerTurn: playerColor,
    gameState: 'startedOnline',
  }
};

export default newGameOnline;
