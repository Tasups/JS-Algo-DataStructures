// QUEUE DATA STRUCTURE
// push(Enqueue) to add on the end and shift(Dequeue) to remove from the beginning

class Node {
  constructor(value){
    this.next = null
    this.value = value
  }
}

class Queue {
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }
  enqueue(val){
    let newNode = new Node(val)
    if(!this.first){
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.size++
    return this.size
  }
  dequeue(){
    if(!this.first) return null
    let oldFirst = this.first
    if(this.size === 1){
      this.first = null
      this.last = null
    } else {
      let newFirst = oldFirst.next
      oldFirst.next = null
      this.first = newFirst
    }
    this.size--
    return oldFirst.value
  }
}

let q = new Queue()

console.log(q.enqueue(1))
console.log(q.enqueue(2))
console.log(q.enqueue(3))
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q)
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q)