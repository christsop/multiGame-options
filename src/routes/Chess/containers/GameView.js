import React from 'react';
import { connect } from 'react-redux';
import GameView from '../components/GameView'
import { newGame, resetGame, newGameOnline } from '../modules/constants'

const mapStateToProps = (state)=> ({
  victory: state.chess.victory,
  playerTurn: state.chess.playerTurn,
  gameState: state.chess.gameState,
});

export default connect(mapStateToProps, { newGame, resetGame, newGameOnline } )(GameView);

