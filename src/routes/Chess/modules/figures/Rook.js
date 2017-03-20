import { checkHorAndVer } from './tools/checkHorAndVer';
import resetValidMoves from '../functions/resetValidMoves';

const Rook = (state, rowId, lineId, readyToMove)=>{
  let validMoves = resetValidMoves();

  const checkedHorAndVer = checkHorAndVer(rowId, lineId, validMoves, readyToMove, state.squares, state.playerTurn);

  validMoves = checkedHorAndVer.validMoves;
  readyToMove = checkedHorAndVer.readyToMove;

  return {
    ...state,
    validMoves,
    readyToMove,
  }
};

export default Rook;
