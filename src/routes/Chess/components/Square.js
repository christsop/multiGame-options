import React from 'react';
import figures from '../modules/constructs';
import {chessSocket} from '../../../model-services/server-apis'


const Square = ( { selectFigure, moveFigure, rowId, lineId, squares, readyToMove, gameState, validMoves, playerTurn, victory })=> {
  const divStyle = {
    background: 'red',
  };

  if(validMoves[rowId][lineId] && !victory) { return <div style={divStyle} onClick={ () => (clickTile(rowId, lineId, readyToMove, moveFigure, gameState)) }> { figures(squares[rowId][lineId]) } </div> }
  if(squares[rowId][lineId].charAt(0) === playerTurn.charAt(0) && !victory) {
    return <div onClick={ () => (selectFigure(squares[rowId][lineId], rowId, lineId)) }> { figures(squares[rowId][lineId]) } </div>
  }
  return <div > { figures(squares[rowId][lineId]) } </div>
};


const clickTile = (rowId, lineId, readyToMove, moveFigure, gameState)=> {
  if(gameState === 'startedOnline') return chessSocket.emit('moveTile',{
    type: 'MOVE_FIGURE',
      payload: {rowId, lineId , readyToMove}
  });
  return moveFigure(rowId, lineId, readyToMove)
}
export default Square;
