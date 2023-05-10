class Queue {
    constructor() {
        this.start = null;
        this.end = null;
        this.length = 0
    }
    peek() {
       return this.start;
    }

    enqueue(value) {
        const newNode = new Node2(value);
        if (this.length === 0) {
            this.start = newNode;
            this.end = newNode;
        } else {
            const holdingPointer = this.end;
            this.end = newNode;
            holdingPointer.next = this.end
        }
        this.length ++;
        return this;
    }

    dequeue() {
        if (this.length === 0) {
            return this;
        } else if (this.length === 1){
            const last = this.start;
            this.start = null;
            this.end = null;
            this.length = 0;
            return last;
        } else {
            const startPoint = this.start;
            const newStart = this.getIndex2(1);
            this.start = newStart;
            this.length--
            return startPoint;
        }
    }

    getIndex2(index){
        let nodeIndex = this.start;
        for (let i = 0; i < index; i++) {
                nodeIndex = nodeIndex.next
        }
        return nodeIndex
    }
}

const myQueue = new Queue;