import React, { Component } from 'react';
import Chess from './Chess';
import styles from './styles.scss';

const GameView = ( {victory, playerTurn, gameState,  newGame, newGameOnline, resetGame} )=> {

  switch(gameState) {
    case 'initial':
      return (
        <div>
          <h1> <button type="button" onClick={ () => (newGame()) }>New Game</button></h1>
          <h1> <button type="button" onClick={ () => (newGameOnline()) }>New Game Online</button></h1>
        </div>
      );

    case 'finished':
      return (
        <div>
          <h1> WINNER: { victory } </h1>
          <button type="button" onClick={ () => (newGame()) }>New Game</button>
        </div>
      );
    case 'startedOffline':
      return (
        <div>
          <button type="button" onClick={ () => (resetGame()) }>Reset game</button>
          <h5> PLAYER'S TURN: <span>{ playerTurn }</span></h5>
          <Chess />
        </div>
      );
    case 'startedOnline':
      return (
        <div>
          <button type="button" onClick={ () => (resetGame()) }>Reset game</button>
          <h5> PLAYER'S TURN: <span>{ playerTurn }</span></h5>
          <Chess />
        </div>
      );
    case 'waitingOpponent':
      return (
        <div>
          <h2>Waiting opponent</h2>
        </div>
      );
    default :
      return (
        <div>
          <Chess />
        </div>
      )
  }
};

export default GameView;

