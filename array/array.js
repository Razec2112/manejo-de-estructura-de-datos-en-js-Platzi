const array = ["Diego", "Karen", "Razec"];

class MyArray {
    constructor () {
        this.length = 0;
        this.data = {};
    }
    get(index){
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop() {
        if(this.length > 0){
            this.length--;
            const lastElement = this.data[this.length];
            delete this.data[this.length];
            return lastElement
        } else {
            return this.data;
        }
    }
    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }
    shiftIndex(index) {
        for (let i = index; i < this.length -1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length-1];
        this.length--;
    }

    shift(){
        return this.delete(0);
    }

    add(item, index) {
        this.pushIndex(index);
        this.data[index] = item;
        return this.data;
    }

    unshift(item) {
        this.add(item,0)
        return this.data;
    }

    pushIndex(index) {
        let indexOrder = this.length - 1
        for (let i = index; i < this.length; i++) {
            this.data[indexOrder + 1] = this.data[indexOrder];
            indexOrder--;
        }
        this.length++;
    }
}

const myArray = new MyArray();