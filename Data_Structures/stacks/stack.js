// SINGLY LINKED LIST DATA STRUCTURE


class Node{
  constructor(val){
    this.value = val
    this.next = null
  }
}

class Stack {
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }
  push(val){
    let newNode = new Node(val)
    if(!this.first){
      this.first = newNode
      this.last = newNode
    } else {
      let oldFirst = this.first
      newNode.next = oldFirst
      this.first = newNode
    }
    this.size++
    return this.size
  }
  pop(){
    if(this.size === 0) return null
    let removedNode = this.first
    if(this.size === 1){
      this.first = null
      this.last = null
    }
    if(this.size > 1){
      this.first = this.first.next
      removedNode.next = null
    }
    this.size--
    return removedNode.value
  }

}

let stack = new Stack()
stack.push("ONE")
stack.push("TWO")
stack.push("THREE")
console.log(stack.pop())
console.log("next")
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
