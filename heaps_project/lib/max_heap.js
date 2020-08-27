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
        
    }
}

module.exports = {
    MaxHeap
};

// [null,top1,left2,right3,leftleft4,right5,right6]