// Time complexity is O(V+E)
// Space O(V)
class Graph {
    constructor(v) {
        this.v = v;
        this.adj = new Array(v).fill().map(() => new Array());
    }
    addEdge(src, dest, weight) {
        this.adj[src].push({
            dest: dest,
            weight: weight
        });
    }
    topologicalSortUtil(u, visited, stack) {
        visited[u] = true;

        for (let iterator of this.adj[u]) {
            if (!visited[iterator.dest]) {
                this.topologicalSortUtil(iterator.dest, visited, stack);
            }
        }
        stack.push(u);
    }
    shortestPath(s) {
        console.log(this.adj, "adj");
        let visited = new Array(this.v).fill(false);
        let dist = new Array(this.v).fill(Number.MAX_VALUE);

        dist[s] = 0;

        let stack = [];
        // Time O(V+E)
        for (let i = 0; i < this.v; i++)
            this.topologicalSortUtil(i, visited, stack);

        while (stack.length > 0) {
            let top = stack.pop();

            if (dist[top] != Number.MAX_VALUE) {
                for (let iterator of this.adj[top]) {
                    if (dist[iterator.dest] > dist[top] + iterator.weight) {
                        dist[iterator.dest] = dist[top] + iterator.weight
                    }
                }
            }
        }

        document.write("<br/>")
        for (let i = 0; i < this.v; i++) {
            document.write(dist[i] == Number.MAX_VALUE ? " INF " : dist[i] + " ");
        }
    }
}
const g = new Graph(6);
g.addEdge(0, 1, 5);
g.addEdge(0, 2, 3);
g.addEdge(1, 3, 6);
g.addEdge(1, 2, 2);
g.addEdge(2, 4, 4);
g.addEdge(2, 5, 2);
g.addEdge(2, 3, 7);
g.addEdge(3, 4, -1);
g.addEdge(4, 5, -2);

let s = 1;
document.write("Following are shortest distances from source ", s);
g.shortestPath(s);