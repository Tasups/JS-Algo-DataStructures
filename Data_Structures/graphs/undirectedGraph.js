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
    console.log(undefined)
    return undefined
  }
  // this is for a directed graph, where you would only make an edge connect from one to another and 
  // not both
  addDirectedEdge(v1, v2){
    if(this.adjacencyList[v1] && this.adjacencyList[v2]){
      this.adjacencyList[v1].push(v2)
    }
    console.log(undefined)
    return undefined
  }
  
  removeEdge(vertex1, vertex2){
    if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
    }
    console.log(undefined)
    return undefined
  }
  
  removeVertex(vertex){
    if(this.adjacencyList[vertex]){
      // loop over every key in the object if it does not match the vertex in the args
      while(this.adjacencyList[vertex].length){
        console.log(vertex)
        console.log(this.adjacencyList[vertex][0])
        // you could use the pop method as well
        this.removeEdge(vertex, this.adjacencyList[vertex][0])
      }
      delete this.adjacencyList[vertex]
    }
    console.log(undefined)
    return undefined
  }

}

let g = new Graph()
/*
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
*/

g.addVertex("Dallas")
g.addVertex("Tokyo")
g.addVertex("Aspen")
g.addVertex("Los Angeles")
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo")
g.addEdge("Dallas", "Aspen")
g.addEdge("Hong Kong", "Tokyo")
g.addEdge("Hong Kong", "Dallas")
g.addEdge("Los Angeles", "Hong Kong")
g.addEdge("Los Angeles", "Aspen")
console.log(g)
g.removeVertex("Shelby")
console.log(g)