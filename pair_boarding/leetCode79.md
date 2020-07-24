input is a matrix and a string
output is bool

iterate through 2d array and find first letter if it exists
    when we find the first letter pass it off to a hunting algorithm.
    keep track of visited coordinates
        check if any neighbors are matching the next letter
        if found last letter return true;
return false

function wordSearch(board,word){
    function hunterAlgorithm(row,column,nextIndex,visited={}){
        add [row,col] to visted duplicate
        if nextIndex === word.length
            return true
        if (board[row+1][col] === word[nextIndex] && !visted[board[row +1, column]]){  
            if hunterAlgorithm(row+,column,nextIndex+1,duplicate) return true
        }
        !visted[board[row +1, column]] = false
        return false
    }
    for(rows){
        for(columns){
            if(board[row][column] === word[0]){
                if hunterAlgorithm(row,board,column,1)
                    return true
            }
        }
    }
    return false
}