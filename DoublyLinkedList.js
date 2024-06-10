class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }
        else{
            node.next = this.head;
            this.head.prev = node;
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
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }
    removeFromFront(){
        if(this.isEmpty()){
            return null;
        }
        let value = this.head.value;
        this.head = this.head.next;
        if(this.head){
            this.head.prev = null;
        }
        else{
            this.tail = null;
        }
        this.size--;
        return value;
    }
    removeFromEnd(){
        if(this.isEmpty()){
            return null;
        }
        let value = this.tail.value;
        this.tail = this.tail.prev;
        if(this.tail){
            this.tail.next = null;
        }
        else{
            this.head = null;
        }
        this.size--;
        return value;
    }
    print(){
        if(this.isEmpty()){
            console.log("The list is empty!!");
            return null;
        }
        let listValue = '';
        let curr = this.head;
        while(curr){
            listValue += `${curr.value} `;
            curr = curr.next;
        }
        console.log(listValue);
    }
    printReverse(){
        if(this.isEmpty()){
            console.log("The list is empty!!");
            return null;
        }
        let listValue = '';
        let curr = this.tail;
        while(curr){
            listValue += `${curr.value} `;
            curr = curr.prev;
        }
        console.log(listValue);
    }
}

let list = new DoublyLinkedList();
list.prepend(3);
list.prepend(2);
list.prepend(1);
list.prepend(0);
list.append(4);
list.removeFromFront();
list.removeFromEnd();
list.print();
list.printReverse();