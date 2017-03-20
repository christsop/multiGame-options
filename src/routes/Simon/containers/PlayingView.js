import React from 'react';
import { connect } from 'react-redux';
import { onlineGame, offlineGame, onlinePad, offlinePad, reset, waitPlayers } from '../constants';
import { PlayingView } from '../components/PlayingView';

const mapStateToProps = ({ Simon: { gameState, score, highScore } }) => ({
  gameState,
  score,
  highScore,
});

export default connect(
  mapStateToProps,
  { onlineGame, offlineGame, onlinePad, offlinePad, reset, waitPlayers },
)(PlayingView);
