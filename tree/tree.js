//       10
//   4        20
// 2   8   17   170

class Node4 {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node4(value)
        if(!this.root){
            this.root = newNode
        } else {
            let currentNode = this.root;
            while(true) {
                if(value < currentNode.value) {
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    search(value) {
        let currentNode = this.root;
        if (!this.root) {
            return "Este tree esta vacio";
        }
        if (value === this.root.value) {
            return this.root;
        }
        while (true) {
            if (!currentNode) {
                return "Este numero no se encuentra en el tree"
            }
            if (value === currentNode.value) {
                return currentNode;
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right
            }
        }
    }
}

const tree = new BinarySearchTree();