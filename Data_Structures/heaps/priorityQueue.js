// PRIORITY QUEUE STRUCTURE, THIS IS VERY SIMILAR TO THE MAX BINARY HEAP BUT I WILL USE MIN BINARY HEAP
// AS EXPRESSED IN AN ARRAY THE FIRST CHILD IS AT 2N + 1 AND THE SECOND AT 2N + 2
// ALSO, AS EXPRESSED IN AN ARRAY, THE PARENT CAN BE FOUND BY THE FIRST CHILD AT MATH.FLOOR(N - 1 / 2), 
// AND THE SECOND CHILD AT MATH.FLOOR(N - 2 / 2)

class Node{
  constructor(val, priority){
    this.value = val
    this.priority = priority
  }
}

class PriorityQueue{
  constructor(){
    this.values = []
  }
  
  enqueue(val, priority){
    let newNode = new Node(val, priority)
    this.values.push(newNode)
    this.bubbleUp()
  }
  
  bubbleUp(){
    let idx = this.values.length - 1
    const element = this.values[idx]
    while(idx > 0){
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]
      if(element.priority >= parent.priority) break
      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
    //console.log(this)
  }
  
  dequeue(){
    const min = this.values[0]
    const end = this.values.pop()
    if(this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }
    console.log(min)
    return min
  }
  
  sinkDown(){
    let idx = 0
    const length = this.values.length
    const element = this.values[0] 
    while(true){
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild, rightChild
      let swap = null
      
      if(leftChildIdx < length){
        leftChild = this.values[leftChildIdx]
        if(leftChild.priority < element.priority){
          swap = leftChildIdx
        }
      }
      if(rightChildIdx < length){
        rightChild = this.values[rightChildIdx]
        if(
          (swap === null && rightChild.priority < element.priority) || 
          (swap !== null && rightChild.priority < leftChild.priority)
          ){
          swap = rightChildIdx
        }
      }
      if(swap === null) break
      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
    }
  }
}


let ER = new PriorityQueue()
ER.enqueue("common cold", 5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever", 4)
ER.enqueue("broken arm", 2)
ER.enqueue("glass in foot", 3)

console.log(ER)
ER.dequeue()
console.log(ER)
console.log("*************************************************")
ER.dequeue()
console.log(ER)
console.log("*************************************************")
ER.dequeue()
console.log(ER)
console.log("*************************************************")
ER.dequeue()
console.log(ER)
console.log("*************************************************")
ER.dequeue()
console.log(ER)