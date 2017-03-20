import { simonSocket } from '../../../../model-services/server-apis';

export const waitPlayers = (state) => {
  simonSocket.emit('ready');
  console.log('emit ready');
  return {
    ...state,
    gameState: 'waitUsers',
  };
};
