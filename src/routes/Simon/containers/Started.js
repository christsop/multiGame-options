import React from 'react';
import { connect } from 'react-redux';
import { reset, leaveGame } from '../constants';
import { Started } from '../components/Started';

const mapStateToProps = ({ Simon: { score, highScore, gameState } }) => ({
  score,
  highScore,
  gameState,
});

export default connect(mapStateToProps, { reset, leaveGame })(Started);
