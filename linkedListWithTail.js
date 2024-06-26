class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedListWithTail{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size;
    }
    print(){
        if(this.isEmpty()){
            console.log("The list is empty!!");
            return null;
        }
        else{
            let curr = this.head;
            let listValues = '';
            while(curr){
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues);
        }
    }
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }
        else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }
        else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    removeFromFront(){
        if(this.isEmpty()){
            return null;
        }
        else{
            const value = this.head.value;
            this.head = this.head.next;
            this.size--;
            return value;
        }
    }
    removeFromEnd(){
        if(this.isEmpty()){
            return null;
        }
        const value = this.tail.value;
        if(this.getSize === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            let prev = this.head;
            while(prev.next !== this.tail){
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size--;
        return value;
    }
}

// let list = new LinkedListWithTail();
// console.log(list.isEmpty());             // true
// console.log(list.getSize());             // 0
// list.append(20);                         // 20
// list.append(30);                         // 20 30
// list.append(40);                         // 20 30 40
// list.prepend(10);                        // 10 20 30 40
// list.removeFromFront();                  // 20 30 40
// list.removeFromEnd();                    // 20 30
// list.print();                            // 20 30
// console.log(list.isEmpty());             // false
// console.log(list.getSize());             // 2

module.exports = LinkedListWithTail;