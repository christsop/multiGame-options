import { Pad, PadOnline, PlayNextLevel, PlayOnline, waitPlayers, leave } from '../routes/Simon/modules/functions';
import '../model-services/simon/socketio';

export const initialState = { history: [], score: 0, highScore: 0, onlinePlayers: 56 };

const Simon = (state = initialState, action) => {
  switch (action.type) {

    case 'START_GAME' :
      return PlayNextLevel(state);

    case 'START_GAME_ONLINE' :
      return PlayOnline(state, action.payload.move);

    case 'RESET':
      return { ...initialState, gameState: 'reset' };

    case 'CLICK_PAD_ONLINE' :
      return PadOnline(state, action.payload.pad);

    case 'CLICK_PAD' :
      return Pad(state, action.payload.pad);

    case 'WAIT_PLAYERS' :
      return waitPlayers(state);

    case 'LEAVE_GAME' :
      return leave(initialState);

    default :
      return state;
  }
};

export { Simon };
