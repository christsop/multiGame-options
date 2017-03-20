export const checkHorAndVer = (rowId, lineId, validMoves, readyToMove, squares, playerTurn)=>{


  let OPPONENT;
  if(playerTurn === 'black')  OPPONENT = 'w';
  if(playerTurn === 'white')  OPPONENT = 'b';
  console.log('---');
  console.log(squares);
  for(let row=1; row<8; row++){
    if( (rowId+row>=0) && (rowId+row<=7)){
      if(((squares[rowId+row][lineId]).charAt(0) === OPPONENT)){
        validMoves[rowId+row][lineId] = true;
        readyToMove = {row: rowId, line: lineId};
        row = 8;
      }else if((squares[rowId+row][lineId]).charAt(0) === playerTurn.charAt(0)){
        row = 8;
      }else if((squares[rowId+row][lineId]).charAt(0) === 'e'){
        validMoves[rowId+row][lineId] = true;
        readyToMove = {row: rowId, line: lineId};
      }
    }
  }

  for(let row=1; row<8; row++){
    if( (rowId-row>=0) && (rowId-row<=7)){
      if(((squares[rowId-row][lineId]).charAt(0) === OPPONENT)) {
        validMoves[rowId-row][lineId] = true;
        readyToMove = {row: rowId, line: lineId};
        row=8;
      }else if((squares[rowId-row][lineId]).charAt(0) === playerTurn.charAt(0)){
        row =8;
      }else if((squares[rowId-row][lineId]).charAt(0) === 'e'){
        validMoves[rowId-row][lineId] = true;
        readyToMove = {row: rowId, line: lineId};
      }
    }
  }

  for(let line=1; line<8; line++){
    if( (lineId+line>=0) && (lineId+line<=7)){
      if(((squares[rowId][lineId+line]).charAt(0) === OPPONENT)) {
        validMoves[rowId][lineId+line] = true;
        readyToMove = {row: rowId, line: lineId};
        line =8;
      }else if((squares[rowId][lineId+line]).charAt(0) === playerTurn.charAt(0)){
        line =8;
      }else if((squares[rowId][lineId+line]).charAt(0) === 'e'){
        validMoves[rowId][lineId+line] = true;
        readyToMove = {row: rowId, line: lineId};
      }
    }
  }

  for(let line=1; line<8; line++){
    if( (lineId-line>=0) && (lineId-line<=7)){
      if(((squares[rowId][lineId-line]).charAt(0) === OPPONENT)){
        validMoves[rowId][lineId-line] = true;
        readyToMove = {row: rowId, line: lineId};
      }else if((squares[rowId][lineId-line]).charAt(0) === playerTurn.charAt(0)){
        line =8;
      }else if((squares[rowId][lineId-line]).charAt(0) === 'e'){
        validMoves[rowId][lineId-line] = true;
        readyToMove = {row: rowId, line: lineId};
      }
    }
  }
  return {
    validMoves,
    readyToMove
  };
};
