import { NEW_GAME_CHESS, RESET_GAME, MOVE_FIGURE, SELECT_TILE, NEW_ONLINE_GAME_CHESS } from '../constants';

export const options = {

  newGame:{
    offline: ()=>({
      type: NEW_GAME_CHESS
    }),
    online: ()=>({
      type: NEW_ONLINE_GAME_CHESS
    }),
  },

  resetGame:{
    offline: ()=> ({
      type: RESET_GAME
    })
  },

  selectFigure:{
    offline: (figure, rowID, lineID)=>({
      type: SELECT_TILE,
      payload: {figure, rowID, lineID}
    })
  },

  moveFigure:{
    offline: (rowID, lineID, readyToMove)=>({
      type: MOVE_FIGURE,
      payload: {rowID, lineID, readyToMove}
    })
  }
};
