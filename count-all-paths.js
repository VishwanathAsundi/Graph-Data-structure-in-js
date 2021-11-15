// Time Complexity: O(N!).
// If the graph is complete then there can be around N! recursive calls, so the time Complexity is O(N!)
// Space Complexity: O(1).
// Since no extra space is required.
class Graph {
  constructor(v) {
    this.v = v;
    this.adj = new Array(v).fill().map(() => new Array());
  }
  addEdge(src, dest) {
    this.adj[src].push(dest);
  }
  countPathsUtil(u, d, pathCount) {
    if (u == d) {
      pathCount++;
    } else {
      for (let i = 0; i < this.adj[u].length; i++) {
        let n = this.adj[u][i];
        pathCount = this.countPathsUtil(n, d, pathCount);
      }
    }
    return pathCount;
  }
  countPaths(s, d) {
    let pathsCount = 0;
    pathsCount = this.countPathsUtil(s, d, pathsCount);
    return pathsCount;
  }
}
const g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(0, 3);
g.addEdge(1, 3);
g.addEdge(2, 3);
g.addEdge(1, 4);
g.addEdge(2, 4);

let s = 0,
  d = 3;
document.write("No of paths between ", s, " ", d, " is ", g.countPaths(s, d));
