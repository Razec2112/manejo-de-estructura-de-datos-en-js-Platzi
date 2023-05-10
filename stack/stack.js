class Node2 {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0
    }
    peek() {
       return this.top;
    }

    push(value) {
        const newNode = new Node2(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer
        }
        this.length ++;
        return this;
    }

    pop() {
        if (this.length === 0) {
            return this;
        } else if (this.length === 1){
            const last = this.top;
            this.top = null;
            this.bottom = null;
            this.length = 0;
            return last;
        } else {
            const last = this.bottom;
            const newLast = this.getIndex2(this.length - 2);
            newLast.next = null;
            this.bottom = newLast;
            this.length--
            return last;
        }
    }

    getIndex2(index){
        let nodeIndex = this.top;
        for (let i = 0; i < index; i++) {
                nodeIndex = nodeIndex.next
        }
        return nodeIndex
    }
}

const myStack = new Stack;