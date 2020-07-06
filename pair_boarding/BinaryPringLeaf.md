binary tree from top up
input is root node
    root node can have {left,right,value}
function that takes the root and an array that defaults to [];
output=[[4,5,6,7],[2,3],[1]]

function(root){
    output=[[root]];
    finished = false;
    while(!finished){
        level = []
        finished = true
        output[0].forEach(node=>{
            if node.left{
                level.push(node.left)
                finished = false
            }   shohi9j uk k jr
            if node.right{
                level.push(node.right)
                finished = false
            }
        })
        if !finished{
            output.unshift(level)
        }
    }
    output.forEach(level=>{
        level.map((node)=>(node.val));
    })
    return output;
}
refactor1