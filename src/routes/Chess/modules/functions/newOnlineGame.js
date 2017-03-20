
const newOnlineGame = (playerColor) => {

  return {
    ...state,
    playerTurn: playerColor,
    gameState: 'startedOnline',
  }
};

export default newOnlineGame;
