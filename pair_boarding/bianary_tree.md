given a binary tree
print out all paths from root to leaf nodes

basecase is that the node has no children
    return the [val]
map throught the recursive call of each side and append `->${node.val}` to each call.
return concatanated array

function printTree(root){
    if (!root){
        return [];
    }
    if(!root.left && !root.right){
        return [root.val]
    }

    let newLeft = printTree(root.left).map(path=>(path + `->${root.val}`)
    let newRight =  printTree(root.right).map(path=>(path + `->${root.val}`)

    return newLeft.concat(newRight);
}
left