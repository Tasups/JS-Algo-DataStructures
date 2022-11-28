// SINGLY LINKED LIST EXERCISES

//  GOT IT PRETTY EASILY, HOWEVER, I NEED TO REMEMBER TO USE ELSE!!!!!

class Node{
  constructor(val){
    this.val = val
    this.next = null;      
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // PUSH EXERCISE
  // PUSH WAS EASY BUT FORGOT TO IMPLEMENT ELSE AFTER IF STATEMENT
  push(val){
    let newNode = new Node(val)
    if(!this.head){
      this.head = newNode
      this.tail = newNode
      this.length++
    } else {
        let oldTail = this.tail
        this.tail = newNode
        oldTail.next = newNode
        this.length++
    }
    return this
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
  // POP EXERCISE -- return the node removed
  // THERE IS A SLIGHTLY DIFFERENT SOLUTION IN THE SLL UNDER DATASTRUCTURES FILE BUT THIS WORKS!
  pop(){
    if(!this.head) return undefined
    if(this.length === 1){
      let oldHead = this.head
      this.head = null
      this.tail = null
      this.length--
      return oldHead
    } else {
      let current = this.head
      let newTail = current.next
      while(current.next){
        newTail = current
        current = current.next
      }
      this.tail = newTail
      this.tail.next = null
      this.length--
      return current
    }
  }
  // get exercise actually evaluated out to what is a set exercise, seems that there may be a problem with the tests
  get(index){
    if(index < 0 || index > this.length) return undefined
    let counter = 0
    let current = this.head
    while(current !== index){
      current = current.next
      counter++
    }
    return current
  }
  
  insert(index, value){
    if(index < 0 || index > this.length) return false
    if(this.length === index) return !!this.push(value)
    
    let newNode = new Node(value)
    let prevNode = this.head
    
  }
}
