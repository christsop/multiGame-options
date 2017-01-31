import { simonSocket } from '../../../../model-services/server-apis';
import { store } from 'main.js'

export const waitPlayers = (state)=>{
  simonSocket.emit('ready');
  return{
    ...state,
    gameState: 'waitUsers',
  }
};
simonSocket.on('allReady', (move)=>{
  store.dispatch(
    {
      type: 'START_GAME_ONLINE',
      payload: {
        move
      }
    }
  )
});
