class Graph {
    constructor(v) {
        this.v = v;
        this.adj = new Array(v).fill().map(() => new Array());
        this.visited = new Array(v).fill(false);
        this.time = 0;
        this.departure = new Array(v);
    }
    addEdge(src, dest) {
        this.adj[src].push(dest);
    }
    DFS(u) {
        this.visited[u] = true;
        for (let v = 0; v < this.adj[u].length; v++) {
            if (!this.visited[this.adj[u][v]]) {
                this.DFS(this.adj[u][v]);
            }
        }
        this.departure[this.time] = u;
        this.time++;
    }
    topologicalSort() {
        for (let i = 0; i < this.v; i++) {
            if (!this.visited[i]) {
                this.DFS(i);
            }
        }
        for (let i = this.v - 1; i >= 0; i--) {
            document.write(this.departure[i], " ");
        }
    }
}
const g = new Graph(6);
g.addEdge(5, 2);
g.addEdge(5, 0);
g.addEdge(4, 0);
g.addEdge(4, 1);
g.addEdge(2, 3);
g.addEdge(3, 1);
document.write(
    "Topological Sort of the given graph is<br>"
);
g.topologicalSort();