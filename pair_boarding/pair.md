make a grid of n(height)x m(width)
fill grid 0,0 with a 1
iterate through a nested loop first one being < n
    second being < m
        => i,j
        check if there is a top or left value
            if yes add them to eachother and assign the coordinates i,j in grid to that value
tabulation approach
n = 3
m = 4
[
    [1,1,1,1],
    [1,2,3,4],
    [1,3,6,10]
]
return 10
function uniquePaths(n,m){
    let matrix = new Array(n).fill(1).map(ele=>(new Array(m)));
    for(let i = 1; i < n; i++){
        for(let j = 1; j < m; j++){
            matrix[i][j] = matrix[i-1][j] + matrix[i-1][j]
        }
    }
    return matrix[n-1][m-1]
}

[1][1][1]
[1][2][3]
next