let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let brd = [
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,], 
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,], 
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,], 
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,], 
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,], 
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,]
  ];
  brd[3][4] = new Piece("black");
  brd[4][3] = new Piece("black");
  brd[3][3] = new Piece("white");
  brd[4][4] = new Piece("white");
  return brd;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  let x = pos[0];
  let y = pos[1];
  if (x > 7 || x < 0 || y > 7 || y < 0 ){
    throw Error("Not valid pos!");
  };
  return this.grid[x][y];
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {

};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  let x = pos[0];
  let y = pos[1];
  if (this.isOccupied(pos)){
    return this.grid[x][y].color === color;
  }
  return undefined;
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  let x = pos[0];
  let y = pos[1];
  return this.grid[x][y] !== undefined;
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  let x = pos[0];
  let y = pos[1];
  if (x > 7 || x < 0 || y > 7 || y < 0){
    return false;
  }
  return true;
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
_positionsToFlip = function(board, pos, color, dir, piecesToFlip=[]) {
    let x = pos[0];
    let y = pos[1];
   
    let nextPos = [x + dir[0], y + dir[1]];
    let x1 = nextPos[0];
    let y1 = nextPos[1];
 
  if (!board.isValidPos(nextPos)||!board.isOccupied(nextPos)) {
      return null;
    };
   
    if (board.grid[x1][y1].oppColor() === color){
      piecesToFlip.push(nextPos)
      return _positionsToFlip(board, nextPos, color, dir, piecesToFlip);
    };
    if (board.grid[x1][y1].color === color && piecesToFlip.length === 0) {
      return null;
    };
    return piecesToFlip;
};

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  let moves = this.validMoves(pos,color);
  if (moves.length === 0) {
    throw Error("Invalid Move")
  }
  let b = this.grid[pos[0],pos[1]];
  b.flip();
  let positions = [];
  for (i = 0; i < 8; i++) {
    if (_positionsToFlip(this, pos, color, Board.DIRS[i], [])){
      _positionsToFlip(this, pos, color, Board.DIRS[i], [])
      positions.concat(_positionsToFlip(this, pos, color, Board.DIRS[i], []));
    };
  };
  for(z = 0; z<positions.length; z++){
    this.grid[positions[z][0], positions[z][1]].flip();
  }
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  let x = pos[0];
  let y = pos[1];
  if (this.isOccupied(pos)){
    return false;
  };
  for(i = 0; i < 8; i++) {
   if(_positionsToFlip(this, pos, color, Board.DIRS[i],[])) {
     return true;
   };
  };
  return false;
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  let results = [];
  let b = this;
  for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
      if (b.isValidPos([i,j])) {
        results.push([i, j]);
      };
    };
  };
  let result = [];
  for (z = 0; z < results.length; z++){
    if (b.validMove(results[z], color)) {
      result.push(results[z]);
    };
  };
  return result;
};

module.exports = Board;
