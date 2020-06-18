W1D4b

MergeSort()
Takes in an array of Integers;
Outputs a different array with integers sorted from low to high;

mergeSort(array)
    check array length
    if 0 return array
    if 1 return array
    left = array(0,midpoint)
    right = array(midpoint+1,end)
    mergeSort(left) 
    mergeSort(right)
    return merge(leftsored,rightsorted)
end

[2,3,0,4,-11]
[2,3] [0,4,-11]
[2][3] [0] 
[2,3]     [0]   [-11,4]
[2,3]  [-11,0,4]
[-11,0,2,3,4]
function mergeSort(array){
    if(array.length <= 1){
        return array
    }
    let left = array.slice(0,Math.floor(array.length/2));
    let right = array.slice(Math.floor(array.length/2));
    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);
    return merge(sortedLeft,sortedRight);
}

function merge(left,right){
    let sorted = [];
    while (left.length > 0 || right.length > 0){
        let currentLeft = left.length ? left[0] : Infinity;
        let currentRight = right.length ? right[0] : Infinity;
        if (currentLeft >= currentRight){
            sorted.push(right.shift())
        } else {
            sorted.push(left.shift())
        }
    }
    return sorted;
}

Two Matchsticks
    each takes an hour to burn
    they do not burn uniformly 
    Breaking doesn't make sense.
    45 Minutes

    !--#-------!
    !-----#--!


Input= Array
make a empty object
let output = []
for Element in Array{
    object[element] +=1
}
keys in Object{
    if value >= 2
    for (value amount of timet){
        push key into output
    }
}
return the output