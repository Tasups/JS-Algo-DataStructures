// DIJKSTRA'S ALGORITHM USING A WEIGHTED GRAPH AND A PRIORITY QUEUE 

class PriorityQueue{
  constructor(){
    this.values = []
  }
  enqueue(val, priority){
    this.values.push({val, priority})
    this.sort()
  }
  dequeue(){
    return this.values.shift()
  }
  sort(){
    this.values.sort((a,b) => a.priority - b.priority)
  }
}

class WeightedGraph{
  constructor(){
    this.adjacencyList = {}
  }
  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }
  addEdge(vertex1, vertex2, weight){
    this.adjacencyList[vertex1].push({node: vertex2, weight})
    this.adjacencyList[vertex2].push({node: vertex1, weight})
  }
  Dijkstra(start, finish){
    const nodes = new PriorityQueue()
    const distances = {}
    const previous = {}
    
    
    //build initial state
  }
}

var graph =  new WeightedGraph()

graph.addVertext("A")
graph.addVertext("B")
graph.addVertext("C")
graph.addVertext("D")
graph.addVertext("E")
graph.addVertext("F")

graph.addEdge("A", "B", 4)
graph.addEdge("A", "C", 2)
graph.addEdge("B", "E", 3)
graph.addEdge("C", "D", 2)
graph.addEdge("C", "F", 4)
graph.addEdge("D", "E", 3)
graph.addEdge("D", "F", 1)
graph.addEdge("E", "F", 1)

graph.Dijkstra("A", "E")