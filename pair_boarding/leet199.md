given binary tree
return right most node at any given level

    1
   2 3
  4   5
 6
=>
1356
var myName = (function(){
  var name = 'Andy';
  return name; 
})();
console.log(name); // Will throw an error.
console.log(myName); // Will output "Andy" to the console


function binaryTreeRight(root){
    const rightNodes = [root.val];
    let currentNodes = [root];
    while(currentNodes.length > 0){
        let nextNodes = [];
        for(let i = 0; i < currentNodes.length; i++){
            if(currentNodes[i].right !== null){
                nextNodes.push(right)
            }
            if(currentNodes[i].left !== null){
                nextNodes.push(left)
            }
        }
        if(nextNodes.length > 0){
            rightNodes.push(nextNodes[0].val)
        }
        currentNodes = nextNodes;
    } 
    return rightNodes
}
