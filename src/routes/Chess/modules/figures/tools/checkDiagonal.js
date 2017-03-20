export const checkDiagonal = (rowId, lineId, validMoves, readyToMove, squares, playerTurn)=>{

  let OPPONENT;
  if(playerTurn === 'black')  OPPONENT = 'w';
  if(playerTurn === 'white')  OPPONENT = 'b';


  for(let dist=1; dist<8; dist++){
    if( (rowId+dist>=0) && (rowId+dist<=7) && (lineId+dist>=0) && (lineId+dist<=7)){
      if(((squares[rowId+dist][lineId+dist]).charAt(0) === OPPONENT)){
        validMoves[rowId+dist][lineId+dist] = true;
        readyToMove = {row: rowId, line: lineId};
        dist = 8;
      }else if((squares[rowId+dist][lineId+dist]).charAt(0) === playerTurn.charAt(0)){
        dist = 8;
      }else if((squares[rowId+dist][lineId+dist]).charAt(0) === 'e'){
        validMoves[rowId+dist][lineId+dist] = true;
        readyToMove = {row: rowId, line: lineId};
      }
    }
  }

  for(let dist=1; dist<8; dist++){
    if( (rowId-dist>=0) && (rowId-dist<=7) && (lineId-dist>=0) && (lineId-dist<=7)){
      if(((squares[rowId-dist][lineId-dist]).charAt(0) === OPPONENT)) {
        validMoves[rowId-dist][lineId-dist] = true;
        readyToMove = {row: rowId, line: lineId};
        dist=8;
      }else if((squares[rowId-dist][lineId-dist]).charAt(0) === playerTurn.charAt(0)){
        dist =8;
      }else if((squares[rowId-dist][lineId-dist]).charAt(0) === 'e'){
        validMoves[rowId-dist][lineId-dist] = true;
        readyToMove = {row: rowId, line: lineId};
      }
    }
  }

  for(let dist=1; dist<8; dist++){
    if( (rowId-dist>=0) && (rowId-dist<=7) && (lineId+dist>=0) && (lineId+dist<=7)){
      if(((squares[rowId-dist][lineId+dist]).charAt(0) === OPPONENT)) {
        validMoves[rowId-dist][lineId+dist] = true;
        readyToMove = {row: rowId, line: lineId};
        dist =8;
      }else if((squares[rowId-dist][lineId+dist]).charAt(0) === playerTurn.charAt(0)){
        dist =8;
      }else if((squares[rowId-dist][lineId+dist]).charAt(0) === 'e'){
        validMoves[rowId-dist][lineId+dist] = true;
        readyToMove = {row: rowId, line: lineId};
      }
    }
  }

  for(let dist=1; dist<8; dist++){
    if( (rowId+dist>=0) && (rowId+dist<=7) && (lineId-dist>=0) && (lineId-dist<=7)){
      if(((squares[rowId+dist][lineId-dist]).charAt(0) === OPPONENT)){
        validMoves[rowId+dist][lineId-dist] = true;
        readyToMove = {row: rowId, line: lineId};
      }else if((squares[rowId+dist][lineId-dist]).charAt(0) === playerTurn.charAt(0)){
        dist =8;
      }else if((squares[rowId+dist][lineId-dist]).charAt(0) === 'e'){
        validMoves[rowId+dist][lineId-dist] = true;
        readyToMove = {row: rowId, line: lineId};
      }
    }
  }
  return {
    validMoves,
    readyToMove
  };
};
