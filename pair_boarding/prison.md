[1,0,1,1,0,0,1,0]
[0,1,0,0,0,0,1,0]
[0,1,0,1,1,0,1,0]
[0,1,1,0,0,1,1,0]
[0,0,0,0,0,0,0,0]
[0,1,1,1,1,1,1,0]
[]
take the array
    N times
        iterate checking left and right and then setting cells occupied or unoccupied

thats slow ^

make a memo
check if joined array is in memo
iterate left to right checking neighbors
    if current state is in memo => then some form of modulus operation involving i(current iteration) and value in memo
    find key in memo that is associated with remainder of modulus operaton.

    Object.key(value)

function prisonCells(prison,n){
    let memo = {};
    let cycleRepeatIndex = 0;
    for(let i = 0; i < n; i++){
        if (memo[prison.join()]){
            i = (n - (n % i))
        }
        let newPrison = new Array(8)
        memo[prison.join()]=i;
        for(let j = 0; j < 8; j++){
            if (prison[j-1] === prison[j+1]){
                newPrison[j] = 1;
            } else {
                newPrison[j] = 0;
            }
        }
        prison = newPrison
    }

    return prison;
}

