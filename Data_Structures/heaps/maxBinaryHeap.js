// DATA HEAP STRUCTURE, FIRST THE MAX BINARY HEAP
// AS EXPRESSED IN AN ARRAY THE FIRST CHILD IS AT 2N + 1 AND THE SECOND AT 2N + 2
// ALSO, AS EXPRESSED IN AN ARRAY, THE PARENT CAN BE FOUND BY THE FIRST CHILD AT MATH.FLOOR(N - 1 / 2), 
// AND THE SECOND CHILD AT MATH.FLOOR(N - 2 / 2)

class MaxBinaryHeap{
  constructor(){
    this.values = [41,39,33,18,27,12]
  }
  
  insert(element){
    this.values.push(element)
    this.bubbleUp()
  }
  
  bubbleUp(){
    let idx = this.values.length - 1
    const element = this.values[idx]
    while(idx > 0){
      let parentIdx = Math.floor((idx - 1) / 2)
      let parentVal = this.values[parentIdx]
      if(element <= parentVal) break
      this.values[parentIdx] = element
      this.values[idx] = parentVal
      idx = parentIdx
    }
    console.log(this)
  }
  
}

let heap = new MaxBinaryHeap()
heap.insert(55)
heap.insert(1)
heap.insert(45)
const bigInsert = heap.insert(11111)
