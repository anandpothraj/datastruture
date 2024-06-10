const LinkedList = require('./linkedListWithTail');

class LinkedListStack{
    constructor(){
        this.list = new LinkedList();
    }
    push(value){
        this.list.prepend(value);
    }
    pop(){
        this.list.removeFromFront();
    }
    peek(){
        return this.list.head.value;
    }
    isEmpty(){
        return this.list.isEmpty();
    }
    getSize(){
        return this.list.getSize();
    }
    print(){
        return this.list.print();
    }
}

const stack = new LinkedListStack();
console.log(stack.isEmpty()); // true
console.log(stack.getSize()); // 0
stack.push(30);               // 30
stack.push(20);               // 20 30
stack.push(10);               // 10 20 30
stack.pop();                  // 20 30
console.log(stack.peek());    // 20
stack.print();                // 20 30
console.log(stack.isEmpty()); // false
console.log(stack.getSize()); // 2