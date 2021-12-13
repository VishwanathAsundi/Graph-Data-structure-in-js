class Graph {
    constructor(v) {
        this.V = v;
        this.adj = new Array(v).fill().map(() => new Array());
    }
    addEdge(src, dest, weight) {
        this.adj[src].push({
            dest: dest,
            weight: weight
        });
        this.adj[dest].push({
            dest: src,
            weight: weight
        });
    }
    pathMoreThankUtil(src, k, path) {

        if (k <= 0) return true;

        let children = this.adj[src];

        for (let i = 0; i < children.length; i++) {
            let current = children[i];

            if (path[current.dest]) {
                continue;
            }

            path[current.dest] = true;

            if (current.weight >= k) {
                return true;
            }

            if (this.pathMoreThankUtil(current.dest, k - current.weight, path)) {
                return true;
            }

            path[current.dest] = false;

        }
        return false;
    }
    pathMoreThanK(src, k) {

        // Create a path for backtracking
        let path = new Array(this.V).fill(false);

        // start from the given src vertex
        path[src] = true;

        return this.pathMoreThankUtil(src, k, path);
    }
}
const g = new Graph(9);
g.addEdge(0, 1, 4);
g.addEdge(0, 7, 8);
g.addEdge(1, 2, 8);
g.addEdge(1, 7, 11);
g.addEdge(2, 3, 7);
g.addEdge(2, 8, 2);
g.addEdge(2, 5, 4);
g.addEdge(3, 4, 9);
g.addEdge(3, 5, 14);
g.addEdge(4, 5, 10);
g.addEdge(5, 6, 2);
g.addEdge(6, 7, 1);
g.addEdge(6, 8, 6);
g.addEdge(7, 8, 7);

let src = 0;
let k = 62;
g.pathMoreThanK(src, k) ? document.write("Yes") : document.write("No");
document.write("<br/>");
k = 60;
g.pathMoreThanK(src, k) ? document.write("Yes") : document.write("No");