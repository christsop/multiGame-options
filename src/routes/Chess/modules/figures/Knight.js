import resetValidMoves from '../functions/resetValidMoves';

const Knight = (state, rowId, lineId, readyToMove)=>{
  let validMoves = resetValidMoves();

  let OPPONENT;
  if(state.playerTurn === 'black')  OPPONENT = 'w';
  if(state.playerTurn === 'white')  OPPONENT = 'b';

  for(let row=-2; row<3; row++){
    for(let line=-2; line<3; line++){
      if( (!(row===0)) && (!(line===0)) && (!((line+row)===0)) && !(line===row)){
        if( (rowId+row>=0) && (rowId+row<=7) && (lineId+line>=0) && (lineId+line<=7) ) {
          if (((state.squares[rowId + row][lineId + line]).charAt(0) === OPPONENT) || ((state.squares[rowId + row][lineId + line]).charAt(0) === 'e')) {
            validMoves[rowId + row][lineId + line] = true;
            readyToMove = {row: rowId, line: lineId};
          }
        }
      }
    }
  }

  return {
    ...state,
    validMoves,
    readyToMove,
  }
};

export default Knight;
