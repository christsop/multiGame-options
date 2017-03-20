import resetValidMoves from './resetValidMoves';
import { King, Knight, Pawn, Rook, Bishop, Queen } from '../figures';
import move from './move'

export const selectedTile = (state, figure, rowId, lineId) => {
  if(state.readyToMove) return  move(state, rowId, lineId);
  const newValidMoves = resetValidMoves();
  const readyToMove = false;

  switch (figure.substring(1)) {
    case 'King' :
      return King(state, rowId, lineId, readyToMove);
    case 'Pawn' :
      return Pawn(state, rowId, lineId, readyToMove);
    case 'Knight' :
      return Knight(state, rowId, lineId, readyToMove);
    case 'Rook' :
      return Rook(state, rowId, lineId, readyToMove);
    case 'Bishop' :
      return Bishop(state, rowId, lineId, readyToMove);
    case 'Queen' :
      return Queen(state, rowId, lineId, readyToMove);
  }

  return {
    ...state,
    newValidMoves,
    readyToMove,
  }
};
