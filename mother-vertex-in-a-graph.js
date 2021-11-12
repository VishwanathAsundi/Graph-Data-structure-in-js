// Time complexity is O(V+E) + O(V+E)
class Graph {
  constructor(v) {
    this.v = v;
    this.adj = new Array(v).fill().map(() => new Array());
    this.visited = new Array(v).fill(false);
    console.log(this.adj);
  }
  addEdge(src, dest) {
    this.adj[src].push(dest);
  }
  DFSUtil(n, visited) {
    visited[n] = true;
    for (let i of this.adj[n].values()) {
      if (!visited[i]) {
        this.DFSUtil(i, visited);
      }
    }
  }
  findMother() {
    let v = 0;
    for (let i = 0; i < this.v; i++) {
      if (!this.visited[i]) {
        this.DFSUtil(i, this.visited);
        v = i;
      }
    }

    this.visited = this.visited.map(item => false);
    this.DFSUtil(v, this.visited);

    for (let i = 0; i < this.v; i++) {
      if (!this.visited[i]) {
        return -1;
      }
    }
    return v;
  }
}
const g = new Graph(7);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(4, 1);
g.addEdge(6, 4);
g.addEdge(5, 6);
g.addEdge(5, 2);
g.addEdge(6, 0);

document.write("A mother vertex is ", g.findMother());
