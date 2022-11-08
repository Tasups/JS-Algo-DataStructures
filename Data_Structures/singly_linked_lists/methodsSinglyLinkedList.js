// SINGLY LINKED LIST DATA STRUCTURE

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
  
  // push(val){
  //   let newNode = new Node(val)
  //   if (!this.head) {
  //     this.head = newNode
  //     this.tail = newNode // or this.tail = this.head
  //   } else {
  //     this.tail.next = newNode
  //     this.tail = newNode
  //   }
  //   this.length += 1
  //   return this
  // }
  
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
    if (index < 0 || index > this.length) return false
    if (index === this.length) return !!this.push(value)
    if (index === 0) return !!this.unshift(value)
    
    let newNode = new Node(value)
    let prevNode = this.get(index - 1)
    let temp = prevNode.next
    prevNode.next = newNode
    newNode.next = temp
    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === this.length - 1) return this.pop()
    if (index === 0) return this.shift()
    
    let previousNode = this.get(index - 1)
    let removedNode = previousNode.next
    previousNode.next = removedNode.next
    this.length--
    console.log(removedNode)
    return removedNode
  }

  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node;
    let next
    let prev = null
    for (let i = 0; i < this.length; i++){
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }

  print() {
    let arr = []
    let current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }
  
}

let list = new SinglyLinkedList();
list.push("ONE");
list.push("TWO");
list.push("THREE")
list.traverse()
list.reverse()
list.traverse()
console.log(list.head)
console.log(list.tail)

