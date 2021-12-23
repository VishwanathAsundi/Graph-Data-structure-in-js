const V = 4;
class Graph {
    constructor(v) {
        this.v = v;
        this.adj = new Array(2 * v).fill().map(() => new Array());
    }
    addEdge(u, v, weight) {
        if (weight == 2) {
            this.adj[u].push(u + V);
            this.adj[(u + V)].push(v);
        } else {
            this.adj[u].push(v);
        }
    }
    printShortestPath(parent, s, dest) {
        let level = 0;
        if (parent[s] == -1) {
            document.write("<br/>Shortest Path is ", s);
            return level;
        }

        this.printShortestPath(parent, parent[s], dest);
        level++;

        if (s < V) {
            document.write(" ", s);
        }
        return level;
    }
    findShortestPath(src, dest) {
        let parent = new Array(2 * V).fill(0);
        let visited = new Array(2 * V).fill(false);

        parent[src] = -1;
        visited[src] = true;

        let q = [];
        q.push(src);

        while (q.length > 0) {
            let s = q[0];

            if (s == dest) {
                return this.printShortestPath(parent, s, dest);
            }
            q.shift();

            for (let iterator of this.adj[s]) {
                if (!visited[iterator]) {
                    visited[iterator] = true;
                    q.push(iterator);
                    parent[iterator] = s;
                }
            }
        }
    }
}
const g = new Graph(V);


g.addEdge(0, 1, 2);
g.addEdge(0, 2, 2);
g.addEdge(1, 2, 1);
g.addEdge(1, 3, 1);
g.addEdge(2, 0, 1);
g.addEdge(2, 3, 2);
g.addEdge(3, 3, 2);

let src = 0,
    dest = 3;
document.write("<br/>Shortest Distance between ", src,
    " and ", dest, " is ", g.findShortestPath(src, dest));