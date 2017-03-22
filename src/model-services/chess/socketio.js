import { chessSocket } from '../server-apis';
import dispatcher from '../../routes/Chess/modules/functions/dispatcher';

chessSocket.on('allReady', (color) => {
  console.log('got allready' + color);
  dispatcher.allReady(color);
});


chessSocket.on('movedTile', (action) => {
  dispatcher.moveFigure(action);
});
