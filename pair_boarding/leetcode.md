Given and array of integers
input
[-1,10,2,3,4,2,9]
output

O(nlog(n))

function quickSort(array){
    if array length is 0 or 1{
        return array
    }
    pivot = array[0]
    left = []
    right []
    for(i=0;i<array.length;i++){
        if greater{
            right.push
        } else {
            left.push
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}    
array = [3,2,2,-1,4,9,10]
pivot = 3
left = [2,2,-1]
right = [4,9,10]

left{
    pivot = 2
    left = [-1]
    right [2]
} => [-1,2,2]

right{
    pivot = 4
    left = []
    right = [9,10]
    {pivot = 9
    left = []
    right = [10]}
} => [4,9,10]
function quickSort(array){
    if(array.length < 2){
        return array
    };
    let pivot = array[0];
    let left = [];
    let right = [];
    for(let i=1; i < array.length; i++){
        if (array[i] < pivot ){
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return [...quicksort(left),pivot,...quicksort(right)]
}
=>[-1,2,2,3,4,9,10]
done