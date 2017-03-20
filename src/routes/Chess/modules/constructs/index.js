import * as img from '../../components/chessPieces'

const figures = new Map([
  ['wKing', img.wKing],
  ['bKing', img.bKing],
  ['wQueen', img.wQueen],
  ['bQueen', img.bQueen],
  ['wRook', img.wRook],
  ['bRook', img.bRook],
  ['wBishop', img.wBishop],
  ['bBishop', img.bBishop],
  ['wKnight', img.wKnight],
  ['bKnight', img.bKnight],
  ['wPawn', img.wPawn],
  ['bPawn', img.bPawn],
]);

export default (key)=> (figures.get(key));