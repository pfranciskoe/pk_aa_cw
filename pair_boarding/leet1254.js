var closedIsland = function (ocean) {
    let numIslands = 0;
    const cardinals = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    function checkClosed(row, col) {
        if (row < 0 || row >= ocean.length || col < 0 || col >= ocean[0].length) {
            return false
        }
        let result = true;
        if (ocean[row][col] === 0) {
            ocean[row][col] = 2;
            for (let card of cardinals) {
                let row1 = row + card[0];
                let col1 = col + card[1];
                if (!checkClosed(row1, col1)) {
                    result = false;
                }
            }
        }
        return result;
    }
    for (let i = 1; i < ocean.length - 1; i++) {
        for (let j = 1; j < ocean[0].length - 1; j++) {
            if (ocean[i][j] === 0) {
                if (i === 3 && j === 6){
                    console.log(checkClosed(i, j))
                }
                if (checkClosed(i, j)) {
                    numIslands++;
                    console.log('yes')
                }
            }
        }
    }
    console.log(ocean)
    return numIslands
};
// console.log(closedIsland([[1,1,1],[1,0,1],[1,1,1]]))
console.log(closedIsland([[1, 1, 1, 1, 1, 1, 1, 0], [1, 0, 0, 0