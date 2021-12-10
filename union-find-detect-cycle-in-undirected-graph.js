class Edge {
    constructor(src, dest) {
        this.src = src;
        this.dest = dest;
    }
}
const V = 3,
    E = 3;

function find(parent, i) {
    if (parent[i] == -1) {
        return i;
    }
    return find(parent, parent[i]);
}

function isCycle(edges) {
    let parent = new Array(E).fill(-1);

    for (let i = 0; i < E; i++) {
        let x = find(parent, edges[i].src);
        let y = find(parent, edges[i].dest);

        if (x == y) return 1;
        parent[x] = y;
    }
}

let edges = new Array(V).fill().map(() => new Edge(0, 0));

//edge 0-1
edges[0].src = 0;
edges[1].dest = 1;

//edge 1-2
edges[1].src = 1;
edges[1].dest = 2;

//edge 0-2
edges[2].src = 0;
edges[2].dest = 2;
if (isCycle(edges) == 1) {
    document.write("Cycle exists");
} else {
    document.write("Cyce does not exist");
}