
const waitOpponent = (state) => {

  return {
    ...state,
    gameState: 'waitingOpponent',
  }
};

export default waitOpponent;
