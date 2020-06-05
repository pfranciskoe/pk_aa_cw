// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

function minPathSum(grid) {
    let m = grid.length
    let n = grid[0].length
    let table = new Array(m).fill().map(()=>new Array(n).fill(Infinity))
    table[0][0] = grid[0][0]
        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                Math.min(table[j-1][i])
            }
        }
}