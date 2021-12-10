// Topological sort is a linear representation of vertices in a such way that every directed edge u-v u should come befor v in the ordering.

// Topological sorting cannot be used on any non DAG(Directed acyclic graph )

// Time complexity is O(V+E)
// Space complexity is O(V)+O(V)=O(V)

class Graph {
    constructor(v) {
        this.v = v;
        this.adj = new Array(v).fill().map(() => new Array());
        this.visited = new Array(v).fill(false);
        this.stack = [];
    }
    addEdge(u, v) {
        this.adj[u].push(v);
    }
    topologicalSortUtil(u) {
        this.visited[u] = true;

        let children = this.adj[u];

        for (let v = 0; v < children.length; v++) {
            if (!this.visited[children[v]]) {
                this.topologicalSortUtil(children[v]);
            }
        }
        this.stack.push(u);

    }
    topologicalSort() {
        for (let i = 0; i < this.v; i++) {
            if (!this.visited[i]) {
                this.topologicalSortUtil(i);
            }
        }

        while (this.stack.length > 0) {
            document.write(this.stack.pop(), ", ");
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

document.write("Topological sort of the given graph is :", );
g.topologicalSort();