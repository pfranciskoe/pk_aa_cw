class MaxHeap {
    constructor(){
        this.array = [null]
    }
    getParent(idx){
        return Math.floor(idx/2)
    }
    getLeftChild(idx){
        return idx * 2
    }
    getRightChild(idx){
        return (idx*2)+1
    }
    siftUp(idx){
        if (idx === 1) return;
        let parentIdx = this.getParent(idx);
        if (this.array[parentIdx] < this.array[idx]){
            [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]]
            this.siftUp(parentIdx);
        }
    }
    insert(val){
        this.array.push(val);
        this.siftUp(this.array.length-1)
    }
    siftDown(idx){
        let arr = this.array

        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);

        let leftVal = this.array[leftIdx];
        let rightVal = this.array[rightIdx];

        if (rightVal === undefined){ rightVal = -Infinity};
        if (leftVal === undefined){ leftVal = -Infinity};

        if (arr[idx] > leftVal && arr[idx] > rightVal) return;

        if (leftVal < rightVal){
            var swapIdx = rightIdx;
        } else {
            var swapIdx = leftIdx;
        }
        [arr[idx], arr[swapIdx]] = [arr[swapIdx], arr[idx]]

        this.siftDown(swapIdx);
    }
    deleteMax(){
        let arr = this.array;
        if (arr.length === 1) return null;
        if (arr.length === 2) return this.array.pop()
        let max = this.array[1]
        this.array[1] = this.array.pop();
        this.siftDown(1)
        return max
    }
}

module.exports = {
    MaxHeap
};

// [null,top1,left2,right3,leftleft4,right5,right6]