import { chessSocket } from '../../../../model-services/server-apis';

const waitOpponent = (state) => {
  chessSocket.emit('ready');

  return {
    ...state,
    gameState: 'waitingOpponent',
  }
};

export default waitOpponent;
