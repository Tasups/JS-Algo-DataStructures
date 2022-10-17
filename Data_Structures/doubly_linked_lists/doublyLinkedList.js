// DOUBLY LINKED LIST DATA STRUCTURE

class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (!this.tail) return undefined
    let poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
       this.tail = poppedNode.prev;
       this.tail.next = null;
       poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  
  shift() {
    if (this.length === 0) return undefined
    let oldHead = this.head
    if (this.length === 1){
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next
      this.head.prev = null
      oldHead.next = null
    }
    this.length--
    return oldHead
  }
  
  unshift(val) {
    let newNode = new Node(val)
    if (!this.head){
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  
  get(index) {
    if (index < 0 || index >= this.length) return null
    if (index <= (this.length / 2)){
      let counter = 0
      let current = this.head
      while(counter !== index) {
        current = current.next
        counter++
      }
      return current
    } 
    if (index > (this.length / 2)){
      let counter = this.length - 1
      let current = this.tail
      while(counter !== index){
        current = current.prev
        counter--
      }
      return current
    }
  }
  
  set(index, val) {
    if (index < 0 || index >= this.length) return null
  }

}

let list = new DoublyLinkedList()
list.push("ONE")
list.push("TWO");
list.push("THREE");
list.push("GO!!!");
