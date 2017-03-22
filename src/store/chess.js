import {initialState} from '../routes/Chess/modules/constants'
import {selectedTile} from '../routes/Chess/modules/functions/selectedTile'
import move from '../routes/Chess/modules/functions/move'
import newGame from '../routes/Chess/modules/functions/newGame'
import newGameOnline from '../routes/Chess/modules/functions/newOnlineGame'
import '../model-services/chess/socketio';

export default function chess(state = initialState, action) {
  switch (action.type){
    case 'SELECT_TILE':
      return selectedTile(state, action.payload.figure, action.payload.rowID, action.payload.lineID)
    case 'MOVE_FIGURE':
      return move(state, action.payload.rowID, action.payload.lineID, action.payload.readyToMove);
    case 'NEW_GAME_CHESS':
      return newGame(state);
    case 'RESET_GAME':
      return newGame(state);
    case 'START_ONLINE_GAME_CHESS':
      return newGameOnline(state, action.payload.playerColor);
    default:
      return state;
  }
}
