given input:
    singly linked list(head_node)

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5



 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }

Input:  1->2->1->3->4->5, val = 1
Output: 2->3->4->5
head = 2
previousNode = 5
currentNode = null
 function removeFromLinked(val,head){
    while head.val === val{head = head.next}
    previousNode = head;
    currentNode = head.next;
    while (currentNode){
        if currentNode.val === val {
            previousNode.next = currentNode.next
        } else {
            previousNode = previousNode.next
        }
        currentNode = currentNode.next
    }
    return head
 }

function removeFromLinkedList(val,head){
    while (head && head.val === val){
        head = head.next;
    }
    if (!head) return head;
    let previousNode = head;
    let currentNode = head.next;
    while (currentNode){
        if(currentNode.val === val){
            previousNode.next = currentNode.next;
        } else {
            previousNode = previousNode.next
        }
        currentNode = currentNode.next
    }
    return head;
}