search a two d matrix

if nodes in list were an array
output is alternating first then last element.


1 -> 2 -> 3 -> 4 -> 5
1 -> 5 -> 2 -> 4 -> 3

in order to find next element to attach head
    need to iterated through entire list(O(n))
three variables
iterate to find current End
    currentHead(i)
    currentHeadNext(i+1)
    currentEnd(-i)
    currentEndPrev(-i-1)
while CurrentHead.next != null{
    set currentEndPrev next to null
    set currentEnd next to currentHeadNext
    set currentHead next to current End
    set currentEnd to currentEndPrev
    set currentHead to currentEnd
} 
array[nodes]
start = 0
end = array.length - 1
while start <
[1,2,3,4]
0->4->2->3->null
<!-- head     1->5
headNext 2->3
3->4
end 4->null
5->2

1->5->2->3->4 -->7