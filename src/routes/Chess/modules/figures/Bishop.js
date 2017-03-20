import { checkDiagonal } from './tools/checkDiagonal';
import resetValidMoves from '../functions/resetValidMoves';

const Bishop = (state, rowId, lineId, readyToMove)=>{
  let validMoves = resetValidMoves();

  const checkedDiagonal = checkDiagonal(rowId, lineId, validMoves, readyToMove, state.squares, state.playerTurn);
  validMoves = checkedDiagonal.validMoves;
  readyToMove = checkedDiagonal.readyToMove;
  console.log(readyToMove);
  return {
    ...state,
    validMoves,
    readyToMove,
  }
};

export default Bishop;
