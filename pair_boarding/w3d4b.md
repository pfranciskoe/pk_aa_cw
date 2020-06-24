reverse a linked list
    node class
        this.data = date
        this.next = next node

    [0]->[1]->[2]->[3]  
    Null<-[0] [1]->[2]->[3]  
    Null<-[0]<-[1]<-[2]<-[3]
    [0] [1]
    head->[0]
    return[3]

    newNext = null
        current = head
        temp = head.next
    while(head.next)
        {
        current.next = newNext
        newNext = current
        current = temp}
    return current


    function reverseList(head) {
        let newNext = null;
        let currentNode = head;
        while(currentNode){
            let temp = currentNode.next;
            currentNode.next = newNext;
            newNext = currentNode;
            currentNode = temp;
        }
        return newNext;
    }