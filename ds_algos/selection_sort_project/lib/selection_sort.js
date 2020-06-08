function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length - 1; i++){
        let minIdx = i
        for(j = i; j < arr.length; j++){
            if (arr[j] < arr[minIdx]){
                minIdx = j
            }
        }
        swap(arr,i,minIdx)
    }
    return arr
}

module.exports = {
    selectionSort,
    swap
};