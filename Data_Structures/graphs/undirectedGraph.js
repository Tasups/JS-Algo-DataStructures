// GRAPH DATA STRUCTURE, THIS ONE IS UNDIRECTED

class Graph{
  constructor(){
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
       this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    
  }

}

let g = new Graph()
g.addVertex("Tokyo")
g.addVertex("San Francisco")
console.log(g)