class HashTable{
    constructor(size){
        this.data = new Array(size);
    }
    hashMethod(key){
        let hash = 0;
        for(let i = 0; i < key.length;i++){
            hash = (hash + key.charCodeAt(i)*i) % this.data.length;
        }
        return hash;
    }
    set(key, value) {
        const address = this.hashMethod(key);
        if(!this.data[address]) {
            this.data[address] = []
        }
        this.data[address].push([key,value])
        return this.data
    }

    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    delete(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key){
                    const deletedValue = currentBucket[i];
                    this.data[address].splice(i, 1);
                    return deletedValue;
                }
            }
        }
        return undefined;
    }

    getAllKeys () {
        const keys = [];
        for (let i = 0; i < this.data.length; i++) {
            const element = this.data[i];
            if (element) {
                for (let i = 0; i < element.length; i++) {
                    keys.push(element[i][0])
                }
            }
        }
        return keys
    }


}
const myHashTable = new HashTable(50);