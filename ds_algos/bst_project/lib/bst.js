class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor(){
       this.root = null;
    }
    insert(val,root=this.root){
        if (!this.root){
           this.root = new TreeNode(val)
           return;
        }
        if (val < root.val){
            if (root.left){
                this.insert(val, root.left)
            } else{
                root.left = new TreeNode(val)
            }
        } else {
            if (root.right) {
                this.insert(val, root.right)
            } else {
                root.right = new TreeNode(val)
            }
        }
    }
    searchRecur(val,root=this.root){
        if (!root) {
            return false
        }
        if (root.val = val) return true;
        if (root.val < val){
            return searchRecur(val,root.left)
        } else {
            return searchRecur(val, root.right)
        }
    }
}

module.exports = {
    TreeNode,
    BST
};