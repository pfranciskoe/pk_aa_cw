/**
 * Initializes the Piece with its color.
 */
function Piece (color) {
    this.color = color;
}

/**
 * Returns the color opposite the current piece.
 */
Piece.prototype.oppColor = function() {
    
    let cl = this.color
    if (cl === "white") {
        return "black";
    };
    return 'white';
};

/**
 * Changes the piece's color to the opposite color.
 */
Piece.prototype.flip = function() {
    this.color = this.oppColor();
};

/**
 * Returns a string representation of the string
 * based on its color.
 */
Piece.prototype.toString = function () {
    if (this.color === "white") {
        return "W"
    };
    return "B";
};

module.exports = Piece;
