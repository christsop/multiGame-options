import resetValidMoves from '../functions/resetValidMoves';

const Pawn = (state, rowId, lineId, readyToMove)=>{
  let validMoves = resetValidMoves();
  var OPPONENT, NEXT_LINE, NEXT_2LINES, RIGHT_ROW, LEFT_ROW, FIRST_MOVE;
  if(state.playerTurn === 'black'){
    console.log('black plays');
    OPPONENT = 'w';
    NEXT_LINE = lineId-1;
    NEXT_2LINES = lineId-2;
    RIGHT_ROW = rowId+1;
    LEFT_ROW = rowId-1;
    if(lineId === 6) FIRST_MOVE = true;
  }
  if(state.playerTurn === 'white'){
    console.log('white plays');
    OPPONENT = 'b';
    NEXT_LINE = lineId+1;
    NEXT_2LINES = lineId+2;
    RIGHT_ROW = rowId-1;
    LEFT_ROW = rowId+1;
    if(lineId === 1) FIRST_MOVE = true;
  }


  if((NEXT_LINE>=0) && ((state.squares[rowId][NEXT_LINE]).charAt(0) === 'e')){
    validMoves[rowId][NEXT_LINE] = true;
    if(FIRST_MOVE && (state.squares[rowId][NEXT_2LINES]).charAt(0) === 'e') validMoves[rowId][NEXT_2LINES] = true;
    readyToMove = {row: rowId, line: lineId};
  }
  if((LEFT_ROW>=0 && LEFT_ROW<=7 && NEXT_LINE>=0) && ((state.squares[LEFT_ROW][NEXT_LINE]).charAt(0) === OPPONENT)){
    validMoves[LEFT_ROW][NEXT_LINE] = true;
    readyToMove = {row: rowId, line: lineId};
  }
  if( (RIGHT_ROW<=7 && RIGHT_ROW>=0 && NEXT_LINE>=0) && ((state.squares[RIGHT_ROW][NEXT_LINE]).charAt(0) === OPPONENT)){
    validMoves[RIGHT_ROW][NEXT_LINE] = true;
    readyToMove = {row: rowId, line: lineId};
  }
  return {
    ...state,
    validMoves,
    readyToMove
  }
};

export default Pawn;
