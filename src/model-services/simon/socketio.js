import { simonSocket } from '../server-apis';
import dispatcher from '../../routes/Simon/modules/functions/dispatcher';
  simonSocket.on('nextLevel', (move) => {
    console.log('dispatchen new move');
    dispatcher.nextLevel(move);
  });

  simonSocket.on('allReady', (move) => {
    console.log('ALL READYYYY');
    dispatcher.allReady(move);
  });

  simonSocket.on('leaveGame', () => {
    dispatcher.leaveGame();
  });
