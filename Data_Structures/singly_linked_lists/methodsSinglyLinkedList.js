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
  
  traverse(){
    let current = this.head
    while(current){
      console.log(current.val)
      current = current.next
    }
  }
  
  pop(){
    if(!this.head) return undefined
    let current = this.head
    let newTail = current
    while(current.next){
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if(this.length === 0){
      this.head = null
      this.tail = null
    }
    return current
  }
  
  shift(){
    if(!this.head) return undefined
    let oldHead = this.head
    this.head = oldHead.next
    this.length--
    if(this.length === 0){
      this.head = null
      this.tail =null
    }
    return oldHead
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
  
  unshift(val){
    let newNode = new Node(val)
    if(!this.head){
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
      this.length++
    }
    return this
  }
  
}

let list = new SinglyLinkedList();
list.push("I want to go back");
list.push("and woo those women");
list.push("whom I missed.");
list.unshift("One wish for me...")
list.traverse()
console.log(list)