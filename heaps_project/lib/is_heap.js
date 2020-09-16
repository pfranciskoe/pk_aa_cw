// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    if (idx >= array.length) return true;
    let left = array[idx*2];
    let right = array[(idx*2)+1];
    let current = array[idx];
    if(left < current){
        return false;
    }
    if(right < current){
        return false
    }
    return isMaxHeap(array, idx * 2) && isMaxHeap(array, (idx * 2)+1)
}


module.exports = {
    isMaxHeap
};
//ishea?