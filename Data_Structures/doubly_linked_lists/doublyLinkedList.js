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

}

let list = new DoublyLinkedList()
list.push("ONE")
list.push("TWO");
list.push("THREE");
list.push("GO!!!");
console.log(list)
console.log(list.pop())
console.log(list)