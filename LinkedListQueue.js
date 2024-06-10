const LinkedList = require('./linkedListWithTail');

class LinkedListQueue{
    constructor(){
        this.list = new LinkedList();
    }
    enqueue(value){
        this.list.append(value);
    }
    dequeue(){
        this.list.removeFromFront();
    }
    peek(){
        this.list.head.value;
    }
    isEmpty(){
        return this.list.isEmpty();
    }
    getSize(){
        return this.list.getSize();
    }
    print(){
        this.list.print();
    }

}

let queue = new LinkedListQueue();
console.log(queue.isEmpty());         // true
console.log(queue.getSize());         // 0
queue.enqueue(10);                    // 10
queue.enqueue(20);                    // 10 20
queue.enqueue(30);                    // 10 20 30
queue.dequeue();                      // 20 30
queue.print();                        // 20 30
console.log(queue.isEmpty());         // false
console.log(queue.getSize());         // 2