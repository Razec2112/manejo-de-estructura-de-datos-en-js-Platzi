// 1 --> 2 --> 3 --> 4 --> 5 --> null

// let singlyLinkedList = {
//     head: {
//         value: 1,
//         next: {
//             value: 2,
//             next: {
//                 value: 3,
//                 next: {
//                     value: 4,
//                     next : null
//                 }
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value,
        this.next = null;
        this.prev = null;
    }
}

class MyDoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null,
        }
        this.tail = this.head;

        this.length = 1
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this
    }

    prepend(value) {
        const newNode = new Node(value);

        this.head.prev = newNode
        newNode.next = this.head;
        this.head = newNode;

        this.length++;

        return this;
    }

    insert (index,value) {
        const newNode = new Node(value);
        let actualNode = this.head
        let previusNode = this.head
        if (index == 0) {
            this.prepend(value)
            return this
        }
        if (index >= this.length) {
            return this.append(value)
        }
        for (let i = 0; i < index; i++) {
            if (i == index - 1) {
                previusNode = actualNode
            }
            
            if (actualNode.next) {
                actualNode = actualNode.next
            } else {
                return
            }
        }
        
        newNode.next = actualNode
        previusNode.next = newNode
        this.length++
        return this;
    }

    insert2 (index, value) {
        if (index == 0) {
            this.prepend(value)
            return this
        }
        if (index >= this.length) {
            return this.append(value)
        }

        const newNode = new Node(value);
        const firstPointer = this.getIndex(index-1);
        const holdingPointer = firstPointer.next;

        newNode.prev = firstPointer;
        holdingPointer.prev = newNode;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;

        this.length++;
        return this;
    }

    getIndex(index){
        let nodeIndex = this.head;
        for (let i = 0; i < index; i++) {
                nodeIndex = nodeIndex.next
        }
        return nodeIndex
    }

    remove(index) {
        const beforeNode = this.getIndex(index - 1);
        const afterNode = this.getIndex(index + 1);

        if (index == 0) {
            this.head = afterNode;
            afterNode.prev = null;
        } else {
            beforeNode.next = afterNode;
            afterNode.prev = beforeNode
        }  
        this.length--;
        return this
    }


}

let myDoublyLinkedList = new MyDoublyLinkedList (1)


class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;

        this.length = 1
    }

    append(value) {
        const newNode = new Node(value);
        
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;

        this.length++;

        return this;
    }

    insert (index,value) {
        const newNode = new Node(value);
        let actualNode = this.head
        let previusNode = this.head
        if (index == 0) {
            this.prepend(value)
            return this
        }
        if (index >= this.length) {
            return this.append(value)
        }
        for (let i = 0; i < index; i++) {
            if (i == index - 1) {
                previusNode = actualNode
            }
            
            if (actualNode.next) {
                actualNode = actualNode.next
            } else {
                return
            }
        }
        
        newNode.next = actualNode
        previusNode.next = newNode
        this.length++
        return this;
    }

    insert2 (index, value) {
        if (index == 0) {
            this.prepend(value)
            return this
        }
        if (index >= this.length) {
            return this.append(value)
        }

        const newNode = new Node(value);
        const firstPointer = this.getIndex(index-1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;

        this.length++;
        return this;
    }

    getIndex(index){
        let nodeIndex = this.head;
        for (let i = 0; i < index; i++) {
                nodeIndex = nodeIndex.next
        }
        return nodeIndex
    }

    remove(index) {
        const beforeNode = this.getIndex(index - 1);
        const afterNode = this.getIndex(index + 1);

        if (index == 0) {
            this.head = afterNode;
        } else {
            beforeNode.next = afterNode;
        }  
        this.length--;
        return this
    }


}

let myLinkedList = new MySinglyLinkedList(1)