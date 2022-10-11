// SINGLY LINKED LIST DATA STRUCTURE
// PUSH METHOD? ADDED

class Node {
  constructor(val){
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }
  
  push(val){
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode // or this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length += 1
    return this
  }
  
}

let list = new SinglyLinkedList()
console.log(list)
list.push(10)
console.log(list)
list.push(11)
console.log(list)