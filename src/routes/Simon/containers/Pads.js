import React from 'react';
import { connect } from 'react-redux';
import { onlinePad, offlinePad } from '../constants';
import { Pads } from '../components/Pads';

const mapStateToProps = ({ Simon: { gameState } }) => ({
  gameState,
});

export default connect(mapStateToProps, { onlinePad, offlinePad })(Pads);
