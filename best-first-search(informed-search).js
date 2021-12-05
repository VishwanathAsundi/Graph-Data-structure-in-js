//Time complexity is O(n*Logn)
class Graph {
  constructor(v) {
    this.v = v;
    this.adj = new Array(v).fill().map(() => new Array());
    this.visited = new Array(v).fill(false);
  }
  addedge(u, v, cost) {
    this.adj[u].push([cost, v]);
    this.adj[v].push([cost, u]);
  }
  bestFirstSearch(source, target) {
    this.visited[source] = true;

    let q = [[0, source]];

    while (q.length > 0) {
      let front = q.shift();

      if (front[1] == target) {
        document.write("Target found ", target);
        return;
      }
      for (let i = 0; i < this.adj[front[1]].length; i++) {
        let currentNode = this.adj[front[1]];
        if (!this.visited[currentNode[i][1]]) {
          this.visited[currentNode[i][1]] = true;
          q.push([currentNode[i][0], currentNode[i][1]]);
        }
      }
    }
    document.write("Target not found ", target);
  }
}
const g = new Graph(14);

g.addedge(0, 1, 3);
g.addedge(0, 2, 6);
g.addedge(0, 3, 5);
g.addedge(1, 4, 9);
g.addedge(1, 5, 8);
g.addedge(2, 6, 12);
g.addedge(2, 7, 14);
g.addedge(3, 8, 7);
g.addedge(8, 9, 5);
g.addedge(8, 10, 6);
g.addedge(9, 11, 1);
g.addedge(9, 12, 10);
g.addedge(9, 13, 2);

let source = 0,
  target = 13;
g.bestFirstSearch(source, target);
