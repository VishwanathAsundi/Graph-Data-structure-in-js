//Time complexity is O(V+E)
// Space Complexity is O(V)
class Graph {
    constructor(vertices) {
        this.v = vertices;
        this.adj = new Array(vertices).fill().map(() => new Array());
    }
}
const addEdge = (g, src, dest) => {
    g.adj[src].push(dest);
}
const isCyclicUtil = (g, u, colors) => {
    colors[u] = "GRAY";

    for (let value of g.adj[u]) {
        if (colors[value] == 'GRAY') {
            return true;
        }

        if (colors[value] == "WHITE" && isCyclicUtil(g, value, colors)) {
            return true;
        }
    }
    colors[value] = "BLACK";
    return false;

}
const isCyclic = (g) => {
    let colors = new Array(g.v).fill("WHITE");

    for (let u = 0; u < g.v; u++) {
        if (colors[u] == 'WHITE') {
            if (isCyclicUtil(g, u, colors)) {
                return true;
            }
        }
    }
    return false;
}

var g = new Graph(4);
addEdge(g, 0, 1);
addEdge(g, 0, 2);
addEdge(g, 1, 2);
addEdge(g, 2, 0);
addEdge(g, 2, 3);
addEdge(g, 3, 3);

if (isCyclic(g))
    document.write("Graph contains cycle");
else
    document.write("Graph doesn't contain cycle");