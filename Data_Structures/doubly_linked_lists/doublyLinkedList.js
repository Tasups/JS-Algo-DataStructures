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
  
  set(index, value) {
    let updatedNode = this.get(index)
    if(updatedNode !== null){
      updatedNode.val = value
      return true
    }
    return false
  }
  
  insert(index, value) {
    if (index < 0 || index > this.length) return null
    if (index === 0) return !!this.unshift(value)
    if (index === this.length) return !!this.push(value)

    let newNode = new Node(value)
    let beforeNode = this.get(index - 1)
    let afterNode = beforeNode.next
    
    beforeNode.next = newNode
    newNode.prev = beforeNode
    newNode.next = afterNode
    afterNode.prev = newNode
    this.length++
    return true
  }
  
   forwardTraverse(){
    let current = this.head
    while(current){
      console.log(current.val)
      current = current.next
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null
    if (index === 0) return !!this.shift()
    if (index === this.length - 1) return !!this.pop()
    
    let nodeToRemove = this.get(index)
    let beforeNode = nodeToRemove.prev 
    let nextNode = nodeToRemove.next

    beforeNode.next = nextNode
    nextNode.prev = beforeNode
    nodeToRemove.next = null
    nodeToRemove.prev = null
    this.length--
    return nodeToRemove;
  }

}

let list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron");
list.push("Hermione");
list.push("Dumbledore");
console.log(list.remove(1))


