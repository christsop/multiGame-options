

const squares = new Array(8);

for(let i=0; i<8; i++){
  squares[i] = new Array(8);
}
squares[0][0] = 'wRook';
squares[1][0] = 'wKnight';
squares[2][0] = 'wBishop';
squares[3][0] = 'wQueen';
squares[4][0] = 'wKing';
squares[5][0] = 'wBishop';
squares[6][0] = 'wKnight';
squares[7][0] = 'wRook';
for(let i=0; i<8; i++){ squares[i][1] = 'wPawn'; }

squares[0][7] = 'bRook';
squares[1][7] = 'bKnight';
squares[2][7] = 'bBishop';
squares[3][7] = 'bQueen';
squares[4][7] = 'bKing';
squares[5][7] = 'bBishop';
squares[6][7] = 'bKnight';
squares[7][7] = 'bRook';
for(let i=0; i<8; i++){ squares[i][6] = 'bPawn'; }

for(let row=0; row<8; row++){
  for(let line=2; line<6; line++) {
    squares[row][line] = 'empty';
  }
}
export default squares;
