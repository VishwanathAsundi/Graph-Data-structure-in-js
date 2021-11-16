// Time complexity is O(V+E)
class Graph {
  constructor(v) {
    this.v = v;
    this.adj = new Array(v).fill().map(() => new Array());
  }
  addEdge(src, dest) {
    this.adj[src].push(dest);
  }
  DFSUtil(n, visited) {
    visited[n] = true;

    for (let node of this.adj[n]) {
      if (!visited[node]) {
        this.DFSUtil(node, visited);
      }
    }
  }
  countTrees() {
    let visited = new Array(this.v).fill(false);

    let ans = 0;
    for (let i = 0; i < this.v; i++) {
      if (!visited[i]) {
        this.DFSUtil(i, visited);
        ans++;
      }
    }
    return ans;
  }
}
const g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(3, 4);
document.write("No of trees :", g.countTrees());
