
class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }
  
  push(val){
    let newNode = new Node(val)
    if(!this.head){
      this.head = newNode
      this.tail = newNode
      this.length++
    } else {
      let oldTail = this.tail
      this.tail = newNode
      oldTail.next = this.tail
      this.length++
    }
   return this
  }
  
  unshift(val){
    let newNode = new Node(val)
    if(!this.head){
      this.head = newNode
      this.tail = newNode
      this.length++
    } else {
      let oldHead = this.head
      this.head = newNode
      this.head.next = oldHead
      this.length++
    }
    return this
  }
  
  get(index){
    if(index < 0 || index > this.length) return false
    let counter = 0
    let current = this.head
    while(counter !== index){
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
  
  set(index, value){
    let foundNode = this.get(index)
    if(foundNode){
      foundNode.val = value
      return true
    }
    return false
  }
  
  traverse(){
    let current = this.head
    while(current){
      console.log(current.val)
      current = current.next
    }
    console.log("TRAVERSAL COMPLETE")
    return "TRAVERSAL COMPLETE"
  }
  
  rotate(num){
    let counter = 0
    if(num > 0){
      while(counter !== num){
      let newTail = this.head
      let newHead = newTail.next
      newTail.next = null
      this.tail.next = newTail
      this.head = newHead
      this.tail = newTail
      counter++
      } 
    } else {
      while(counter !== num){
        let newHead = this.tail
        let newTail = this.get(this.length - 2)
        newTail.next = null
        newHead.next = this.head
        this.head = newHead
        this.tail = newTail
        counter--
      }
    }
    return this
  }
  
}

let singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.traverse()

singlyLinkedList.set(1, 100)
singlyLinkedList.traverse()