class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
   constructor(node){
       this.root = new Node();
   }
   insertRecur(word,root=this.root){
        let letter = word[0]
        if (!root.children[letter]){
            root.children[letter] = new Node();
        }
        if (word.length === 1) {
            root.children[letter].isTerminal = true;
        } else {
            this.insertRecur(word.slice(1), root.children[letter])
        }
   }
   insertIter(word){
       let currentNode = this.root
        for(let i = 0; i < word.length; i++){
            let letter = word[i]
            if (!currentNode.children[letter]) {
                currentNode.children[letter] = new Node();
            }
            currentNode = currentNode.children[letter]
        }
       currentNode.isTerminal = true;
   }
}

module.exports = {
    Node,
    Trie
};