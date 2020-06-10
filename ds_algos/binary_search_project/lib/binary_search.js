function binarySearch(array, target) {
    if (array.length === 0) {return false};
    let pivotIdx = Math.floor(array.length / 2)
    if (target === array[pivotIdx]) {
        return true
    } else if (array[pivotIdx] < target) {
        return binarySearch(array.slice(pivotIdx+1),target)
    } else {
        return binarySearch(array.slice(0,pivotIdx),target)
    }
}

function binarySearchIndex(array, target) {
    if (array.length === 0) return -1;
    let pivotIdx = Math.floor(array.length / 2)
    if (array[pivotIdx] < target) {
        let result = binarySearchIndex(array.slice(pivotIdx + 1), target)
        if (result === -1) {
            return -1
        } else return result + pivotIdx + 1 
    } else if (array[pivotIdx] > target) {
        return binarySearchIndex(array.slice(0, pivotIdx), target)
    } else {
        return pivotIdx
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};