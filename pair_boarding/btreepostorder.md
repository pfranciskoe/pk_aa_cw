post order traversal of a binary tree
class Node {
    left
    right
    val
}
       1
   2     3
4   5   6   7
[4,5,2,6,7,3,1]

output = []
stack = [node]
while (stack.length > 0){
    currentNode = stack.pop()
    output.unshift(Currentnode.val)
    if currentNode.left {
        stack.push(currentNode.left)
    }
     if currentNode.right {
        stack.push(currentNode.right)
    }
}
return output