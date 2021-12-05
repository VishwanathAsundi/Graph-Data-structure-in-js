class Graph {
  constructor(v) {
    this.v = v;
    this.adj = new Array(v).fill().map(() => new Array());
    this.visited = new Array(v).fill(false);
  }
  addEdge(u, v) {
    this.adj[u].push(v);
  }
  dfsUtil(node) {
    this.visited[node] = true;

    let queue = [node];

    while (queue.length > 0) {
      let front = queue.shift();
      document.write(node, ", ");

      for (let i = 0; i < this.adj[front].length; i++) {
        if (!this.visited[this.adj[front][i]]) {
          this.visited[this.adj[front][i]] = true;
          this.dfsUtil(this.adj[front][i]);
        }
      }
    }
  }
  dfs() {
    console.log(this.adj);
    for (let i = 0; i < this.v; i++) {
      if (this.visited[i] == false) this.dfsUtil(i);
    }
  }
}
const g = new Graph(5);

g.addEdge(0, 4);
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(2, 3);
g.addEdge(3, 4);

g.dfs();
