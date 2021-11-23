class Graph {
  constructor(v) {
    this.v = v;
    this.adj = new Array(v).fill().map(() => new Array());
  }
  addEdge(u, v) {
    this.adj[u].push(v);
    this.adj[v].push(u);
  }
  minEdgeBFS(u, v) {
    let distance = new Array(this.v).fill(0);
    let visited = new Array(this.v).fill(false);
    console.log(visited);

    let queue = [];
    queue.push(u);
    visited[u] = true;

    console.log(this.adj);

    while (queue.length > 0) {
      console.log(queue);
      let front = queue.shift();
      //   console.log(front);

      for (let i = 0; i < this.adj[front].length; i++) {
        console.log(this.adj[front][i]);
        if (visited[this.adj[front][i]]) continue;

        distance[this.adj[front][i]] = distance[front] + 1;
        queue.push(this.adj[front][i]);
        console.log(queue);
        visited[this.adj[front][i]] = true;
      }
    }
    console.log(distance);
    return distance[v];
  }
}
let g = new Graph(9);
g.addEdge(0, 1);
g.addEdge(0, 7);
g.addEdge(1, 7);
g.addEdge(1, 2);
g.addEdge(2, 3);
g.addEdge(2, 5);
g.addEdge(2, 8);
g.addEdge(3, 4);
g.addEdge(3, 5);
g.addEdge(4, 5);
g.addEdge(5, 6);
g.addEdge(6, 7);
g.addEdge(7, 8);
let u = 0;
let v = 5;
document.write(g.minEdgeBFS(u, v));
