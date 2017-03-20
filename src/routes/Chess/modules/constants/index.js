'use strict';

import {options} from '../actions';
import initialSquares from '../functions'
import resetValidMoves from '../functions/resetValidMoves'

// action constants
export const NEW_GAME_CHESS = 'NEW_GAME_CHESS';
export const RESET_GAME = 'RESET_GAME';
export const MOVE_FIGURE = 'MOVE_FIGURE';
export const SELECT_TILE = 'SELECT_TILE';
export const NEW_ONLINE_GAME_CHESS = 'NEW_ONLINE_GAME_CHESS';
// action creators
export const newGame = options.newGame.offline;
export const newGameOnline = options.newGame.online;
export const resetGame = options.resetGame.offline;
export const selectFigure = options.selectFigure.offline;
export const moveFigure = options.moveFigure.offline;

// initial state
const validMoves = resetValidMoves();
export const initialState = {
  playerTurn: 'white',
  squares: initialSquares,
  readyToMove: false,
  validMoves,
  victory: false,
  gameState: 'initial',
};

