class Graph {
  constructor(size) {
    this.v = size;
    this.adj = new Array(size).fill().map(() => new Array());
    this.visited = new Array(size).fill(false);
  }
  addEdge(v, w) {
    this.adj[v].push(w);
  }
  BFS(s) {
    this.visited[s] = true;
    let q = [s];

    while (q.length > 0) {
      let front = q.shift();
      document.write(front, ", ");

      for (let i = 0; i < this.adj[front].length; i++) {
        if (!this.visited[this.adj[front][i]]) {
          this.visited[this.adj[front][i]] = true;
          q.push(this.adj[front][i]);
        }
      }
    }
  }
}

const g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

document.write(
  "Following is Breadth First Traversal (starting from vertex 2) : "
);
g.BFS(2);
