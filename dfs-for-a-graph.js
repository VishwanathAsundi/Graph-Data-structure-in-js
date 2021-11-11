class Graph {
  constructor(v) {
    this.v = v;
    this.adj = new Array(v).fill().map(() => new Array());
    this.visited = new Array(v).fill(false);
  }
  addEdge(v, w) {
    this.adj[v].push(w);
  }
  DFSUtil(n, visited) {
    this.visited[n] = true;
    document.write(n, " ");
    for (let i of this.adj[n].values()) {
      if (!visited[i]) this.DFSUtil(i, visited);
    }
  }
  DFS(s) {
    this.DFSUtil(s, this.visited);
  }
}
g = new Graph(4);

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

document.write(
  "Following is Depth First Traversal " + "(starting from vertex 2)<br>"
);

g.DFS(2);
