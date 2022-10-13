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
  
  set(index, value){
    let foundNode = this.get(index)
    if(foundNode){
      foundNode.val = value
      return true
    }
    return false
    // another way of doing it without using the get method
    // if(index < 0 || index > this.length) return null
    // let counter = 0
    // let current = this.head
    // while(counter !== index){
    //   current = current.next
    //   counter++
    // }
    // current.val = value
    // return true
  }
  
  get(index){
    if(index < 0 || index > this.length) return null
    let counter = 0
    let current = this.head
    while(counter < index){ // Colt Steele uses while(counter !== index), which is better?
      current = current.next
      counter++
    }
    return current
  }
  
  insert(index, value){
    if(index < 0 || index > this.length) return false
    if(index === this.length) return !!this.push(value)
    if(index === 0) return !!this.unshift(value)
    
    let newNode = new Node(value)
    let prevNode = this.get(index - 1)
    let temp = prevNode.next
    prevNode.next = newNode
    newNode.next = temp
    this.length++
    return true
  }
  
}

let list = new SinglyLinkedList();
list.push("TWO");
list.push("ONE");
list.push("LIFTOFF!!!")
console.log(list.insert(10,"GOBBLE!!! GOBBLE!!!"))
console.log(list)
