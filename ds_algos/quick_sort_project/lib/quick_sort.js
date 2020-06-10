function quickSort(array) {
    if (array.length <= 1){
        return array;
    }
    let pivot = array.shift();
    let left = [];
    let right = [];
    console.log(array)
    array.forEach(num=>{
        if (num < pivot) {left.push(num)}
        else {right.push(num) }
    })
    let leftSorted = quickSort(left)
    let rightSorted = quickSort(right)
    return [...leftSorted,pivot,...rightSorted]
}


module.exports = {
    quickSort
};