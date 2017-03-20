import React from 'react';
import figures from '../modules/constructs';
const Square = ( { selectFigure, moveFigure, rowId, lineId, squares, validMoves, playerTurn, victory })=> {
  const divStyle = {
    background: 'red',
  };

  if(validMoves[rowId][lineId] && !victory) { return <div style={divStyle} onClick={ () => (moveFigure(rowId, lineId)) }> { figures(squares[rowId][lineId]) } </div> }
  if(squares[rowId][lineId].charAt(0) === playerTurn.charAt(0) && !victory) {
    return <div onClick={ () => (selectFigure(squares[rowId][lineId], rowId, lineId)) }> { figures(squares[rowId][lineId]) } </div>
  }
  return <div > { figures(squares[rowId][lineId]) } </div>
};

export default Square;
