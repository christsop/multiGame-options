
const resetValidMoves = () => {
  let validMoves = [];
  for(let i=0; i<8; i++){
    validMoves[i] = new Array(8);
  }
  for(let rows=0; rows<8; rows++){
    for(let lines=0; lines<8; lines++){
      validMoves[rows][lines] = false;
    }
  }
  return validMoves;
};

export default resetValidMoves;
