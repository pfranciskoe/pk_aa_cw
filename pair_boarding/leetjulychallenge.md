given 2d array find edges of a single island
[
    [0,0,0,0,0],
    [0,1,0,0,0],
    [0,1,1,0,0],
    [0,1,1,0,0],
    [0,0,0,0,0]
] 

=> 10
set edge counter to 0
First find some part of the island by iterating through "entire" array
    Once I've found 1
    add to queue
    while queue not empty
        check how many bordering spaces(including no existant ones(aka off the grid)) === 0
            for each border I will increment the count;
            any values that equal 1 => put into a queue if they aren't in the hash
            then add them to the hash
        look at next item
return edge counter

function edgeCounter(ocean){
    let edges = 0;
    let queue = [];
    let visited = {};
    for(let i = 0; i < ocean.length; i++){
        let brake = false
        for(let j = 0; j < ocean[0].length; j++){
            if (ocean[i][j] === 1){
                queue.push([i,j]);
                visited[`${ij}`] = true;
                break;
            }
        }
        if (brake) {break;}
    }
    while (queue.length > 0){
        let y = queue[0][0];
        let x = queue[0][1];
        queue.shift();
        if (ocean[y + 1][x + 1] === 1){
            if (visited[`${y+1}${x+1}`]){
                queue.push([y+1,x+1]);
                visted[`${y+1}${x+1}`] = true;
            } 
        } else {
            edges++
        }
        if (ocean[y - 1][x - 1] === 1){
            if (visited[`${y-1}${x-1}`]){
                queue.push([y-1,x-1]);
                visted[`${y-1}${x-1}`] = true;
            } 
        } else {
            edges++
        }
        if (ocean[y + 1][x - 1] === 1){
            if (visited[`${y+1}${x+1}`]){
                queue.push([y+1,x+1]);
                visted[`${y+1}${x+1}`] = true;
            } 
        } else {
            edges++
        }
        if (ocean[y - 1][x + 1] === 1){
            edges++
        } else {
            edges++
        }
    }
    return edges
}

