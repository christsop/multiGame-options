import { checkDiagonal } from './tools/checkDiagonal';
import { checkHorAndVer } from './tools/checkHorAndVer';
import resetValidMoves from '../functions/resetValidMoves';

const Queen = (state, rowId, lineId, readyToMove)=>{
  let validMoves = resetValidMoves();

  const checkedDiagonal = checkDiagonal(rowId, lineId, validMoves, readyToMove, state.squares, state.playerTurn);
  const checkedHorAndVer = checkHorAndVer(rowId, lineId, validMoves, readyToMove, state.squares, state.playerTurn);

  for(let row=0; row<8; row++){
    for(let line=0; line<8; line++){
      validMoves[row][line] = checkedDiagonal.validMoves[row][line] || checkedHorAndVer.validMoves[row][line];
    }
  }
  readyToMove = checkedDiagonal.readyToMove || checkedHorAndVer.readyToMove;
  return {
    ...state,
    validMoves,
    readyToMove,
  }
};

export default Queen;
