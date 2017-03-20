const revertPlayerTurn = (playerTurn) => {
  if(playerTurn === 'black'){
    return 'white';
  }
  return 'black';
};

export default revertPlayerTurn;
