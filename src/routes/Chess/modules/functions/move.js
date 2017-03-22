import resetValidMoves from './resetValidMoves';
import revertPlayerTurn from './revertPlayerTurn';

const move = (state, toRow, toLine, readyToMove)=>{
  console.log(readyToMove);
  console.log('moved');
  const newSquares = state.squares.slice(0, 8);
  const FROM_ROW = readyToMove.row;
  const FROM_LINE = readyToMove.line;
  let newPlayerTurn;
  let newValidMoves = resetValidMoves();
  const figureToMove = state.squares[FROM_ROW][FROM_LINE];
  let victory;
  let newGameState;

  if(state.squares[toRow][toLine].substring(1) === 'King') {
    victory = state.playerTurn;
    newGameState = 'finished';
  }
  if(true){
    newSquares[FROM_ROW][FROM_LINE] = 'empty';
    newSquares[toRow][toLine] = figureToMove;
    newPlayerTurn = revertPlayerTurn(state.playerTurn);
  }else{
    newPlayerTurn = state.playerTurn;
  }

  return {
    ...state,
    squares: newSquares,
    readyToMove: false,
    playerTurn: newPlayerTurn,
    validMoves: newValidMoves,
    victory,
    gameState: newGameState,
  }
};

export default move;
