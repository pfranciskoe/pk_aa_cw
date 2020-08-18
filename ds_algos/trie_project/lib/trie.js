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
   searchRecur(word,root=this.root){
        if (word.length === 0){
            if (root.isTerminal){
                return true;
            } else {
                return false
            }
        }
        let letter = word[0]
        if (root.children[letter]){
            return this.searchRecur(word.slice(1), root.children[letter])
        } else {
            return false
        }
   }
    searchIter(word){
        root = this.root
        for (let i=0; i<word.length; i++){
            let letter = word[i]
            if (!root || !root.children[letter]){
                return false
            } else {
                root = root.children[letter]
            }
        }
        if (root.isTerminal){
            return false
        } else {
            return true;
        }
    }
}

module.exports = {
    Node,
    Trie
};