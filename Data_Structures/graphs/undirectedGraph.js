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
  
  // this is for an undirected graph
  addEdge(v1, v2) {
    if(v1 && v2){
      this.adjacencyList[v1].push(v2)
      this.adjacencyList[v2].push(v1)
    }
    return undefined
  }
  // this is for a directed graph, where you would only make an edge connect from one to another and 
  // not both
  addDirectedEdge(v1, v2){
    if(this.adjacencyList[v1] && this.adjacencyList[v2]){
      this.adjacencyList[v1].push(v2)
    }
    return undefined
  }
  
  removeEdge(vertex1, vertex2){
    if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
    }
    return undefined
  }

}

let g = new Graph()
g.addVertex("Tokyo")
g.addVertex("San Francisco")
g.addVertex("Fresno")
console.log(g)
g.addEdge("Tokyo", "San Francisco")
console.log(g)
g.addDirectedEdge("Fresno", "San Francisco")
console.log(g.addDirectedEdge("Shelby", "San Francisco"))
console.log(g)
g.removeEdge("Tokyo", "San Francisco")
console.log(g)
g.removeEdge("San Francisco", "Fresno")
console.log(g)
console.log(g.removeEdge("Vienna", "Austria"))