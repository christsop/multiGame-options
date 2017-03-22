import React from 'react';
import { connect } from 'react-redux';
import Square from '../components/Square'
import { selectFigure, moveFigure } from '../modules/constants'

const mapStateToProps = (state)=> ({
  squares: state.chess.squares,
  victory: state.chess.victory,
  validMoves: state.chess.validMoves,
  playerTurn: state.chess.playerTurn,
  readyToMove:state.chess.readyToMove,
  gameState:state.chess.gameState,
});

export default connect(mapStateToProps, { selectFigure, moveFigure } )(Square);

