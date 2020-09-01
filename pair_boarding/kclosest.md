given an array of coordinates, on a cartisian plane

coord = [[0,1],[1,1],[2,3],[-4,-4]]
k = 2
heap

maxHeap
(top of heap is highest) 

check dif between last item and heap and new item
if distance < largest item in heap
    add to heap(involves filtering down)
print heap

distanceFromOrigin(coord){

}


function(coords,k){
    heap = new Heap
    let i = 0
    while i < k + 1
        add in coords to heap
    end
    //now i have a k sized heap
    while i < coord.length
        if (distance(coords[i]) < distance(heap.max)){
            heap.removeHead
            heap.add(coors[i])
        }
        i++
    }
    return heap.print
}