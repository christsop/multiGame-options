import React from 'react'
import Started from '../containers/Started'

const buttonStyle = {
  border: '2px solid #a1a1a1',
  padding: '10px 40px',
  background: '#dddddd',
  width: '250px',
  borderRadius: '25px',
};

const style = {
  fontFamily: 'Times New Roman',
  color: 'black',
};

export const PlayingView = ({ offlineGame, reset, waitPlayers, gameState }) => {
  switch (gameState) {
    case 'started':
      return (
        <Started />
      );

    case 'startedOnline':
      return (
        <Started />
      );

    case 'lose':
      return (
        <div style={style}>
          <div className='buttons'>
            <h1>Try again!</h1>
            <button type='start' onClick={offlineGame} style={buttonStyle}>New game!</button>
          </div>
        </div>
      );

    case 'waitUsers':
      return (
        <div style={style}>
          <h1>Wait opponent to connect...</h1>
        </div>
      );

    case 'reset':
      return (
        <div style={style}>
          <div className='buttons'>
            <button type='start' onClick={offlineGame} style={buttonStyle}>Start game!</button>
          </div>
        </div>
      );

    default:
      return (
        <div style={style}>
          <div className='buttons'>
            <button type='start' onClick={offlineGame} style={buttonStyle}>Start game!</button>
            <button type='start' onClick={waitPlayers} style={buttonStyle}>Start game online!</button>
          </div>
        </div>
      );
  }
};
