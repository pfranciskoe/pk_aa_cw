class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor(){
       this.root = null
    }
    insert(val,root=this.root){
        if (!this.root){
           this.root = new TreeNode(val)
           return;
        }
        if (val < root.val){
            if (this.left){
                insert(val, this.left)
            } else{
                root.left = new TreeNode(val)
            }
        } else {
            if (root.right) {
                insert(val, this.right)
            } else {
                root.right = new TreeNode(val)
            }
        }

    }
}

module.exports = {
    TreeNode,
    BST
};