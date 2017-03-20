export const BcheckHorAndVer = (figureId, squareId, validMoves, readyToMove, squares)=>{
  for(let row=1; row<8; row++){
    if( (squareId+row>=0) && (squareId+row<=7)){
      if(((squares[squareId+row][figureId]).charAt(0) === 'w')){
        validMoves[squareId+row][figureId] = true;
        readyToMove = {row: squareId, line: figureId};
        row = 8;
      }else if((squares[squareId+row][figureId]).charAt(0) === 'b'){
        row = 8;
      }else if((squares[squareId+row][figureId]).charAt(0) === 'e'){
        validMoves[squareId+row][figureId] = true;
        readyToMove = {row: squareId, line: figureId};
      }
    }
  }

  for(let row=1; row<8; row++){
    if( (squareId-row>=0) && (squareId-row<=7)){
      if(((squares[squareId-row][figureId]).charAt(0) === 'w')) {
        validMoves[squareId-row][figureId] = true;
        readyToMove = {row: squareId, line: figureId};
        row=8;
      }else if((squares[squareId-row][figureId]).charAt(0) === 'b'){
        row =8;
      }else if((squares[squareId-row][figureId]).charAt(0) === 'e'){
        validMoves[squareId-row][figureId] = true;
        readyToMove = {row: squareId, line: figureId};
      }
    }
  }

  for(let line=1; line<8; line++){
    if( (figureId+line>=0) && (figureId+line<=7)){
      if(((squares[squareId][figureId+line]).charAt(0) === 'w')) {
        validMoves[squareId][figureId+line] = true;
        readyToMove = {row: squareId, line: figureId};
        line =8;
      }else if((squares[squareId][figureId+line]).charAt(0) === 'b'){
        line =8;
      }else if((squares[squareId][figureId+line]).charAt(0) === 'e'){
        validMoves[squareId][figureId+line] = true;
        readyToMove = {row: squareId, line: figureId};
      }
    }
  }

  for(let line=1; line<8; line++){
    if( (figureId-line>=0) && (figureId-line<=7)){
      if(((squares[squareId][figureId-line]).charAt(0) === 'w')){
        validMoves[squareId][figureId-line] = true;
        readyToMove = {row: squareId, line: figureId};
      }else if((squares[squareId][figureId-line]).charAt(0) === 'b'){
        line =8;
      }else if((squares[squareId][figureId-line]).charAt(0) === 'e'){
        validMoves[squareId][figureId-line] = true;
        readyToMove = {row: squareId, line: figureId};
      }
    }
  }
  return {
    validMoves,
    readyToMove
  };
};
