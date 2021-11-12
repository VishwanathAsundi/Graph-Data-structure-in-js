class Graph {
  constructor(v) {
    this.v = v;
    this.adj = new Array(v).fill().map(() => new Set());
  }
  addEdge(src, dest) {
    this.adj[src].add(dest);
    this.adj[dest].add(src);
  }
  printGraph() {
    for (let i = 0; i < this.v; i++) {
      let current = this.adj[i];
      document.write("<br/>Adjaceny list of vertex : ", i, " is ");
      for (let j of [...current].reverse()) {
        document.write(j, " ");
      }
    }
  }
  searchEdge(src, dest) {
    if (!this.adj[src].has(dest)) {
      document.write("<br/><br/>Edge not found from ", src, " to ", dest);
    } else {
      document.write("<br/><br/>Edge found from ", src, " to ", dest);
    }
  }
}
const graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(2, 3);
graph.addEdge(3, 4);

// Print the adjacency list representation of
// the above graph
graph.printGraph();

// Search the given edge in the graph
graph.searchEdge(2, 1);
graph.searchEdge(0, 3);
