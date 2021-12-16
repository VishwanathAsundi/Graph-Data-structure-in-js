class node {
    constructor() {
        this.color = 1;
        this.edges = new Set();
    }
}
var n = 4;

function canPaintColors(nodes, n, m) {
    var visited = [];

    for (var i = 0; i < n + 1; i++) {
        visited.push(0);
    }

    // maxColors used till now are 1 as
    // all nodes are painted color 1
    var maxColors = 1;

    // Do a full BFS traversal from
    // all unvisited starting points
    for (var sv = 1; sv <= n; sv++) {
        if (visited[sv] > 0)
            continue;

        // If the starting point is unvisited,
        // mark it visited and push it in queue
        visited[sv] = 1;
        var q = [];
        q.push(sv);

        // BFS Travel starts here
        while (q.length != 0) {
            var top = q[0];
            q.shift();

            // Checking all adjacent nodes
            // to "top" edge in our queue
            for (var it of nodes[top].edges) {

                // IMPORTANT: If the color of the
                // adjacent node is same, increase it by 1
                if (nodes[top].color == nodes[it].color)
                    nodes[it].color += 1;

                // If number of colors used shoots m, return
                // 0
                maxColors = Math.max(maxColors, Math.max(
                    nodes[top].color,
                    nodes[it].color));
                if (maxColors > m)
                    return 0;

                // If the adjacent node is not visited,
                // mark it visited and push it in queue
                if (visited[it] == 0) {
                    visited[it] = 1;
                    q.push(it);
                }
            }
        }
    }
    return 1;
}
var graph = [
    [0, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 1],
    [1, 0, 1, 0]
];

// Number of colors      
var m = 3;
var nodes = [];
for (var i = 0; i < n + 1; i++) {
    nodes.push(new node());
}

// Push edges to each node as per given input
for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
        if (graph[i, j] > 0) {

            // Connect the undirected graph
            nodes[i].edges.push(i);
            nodes[j].edges.push(j);
        }
    }
}
console.log(nodes, "n");
document.write(canPaintColors(nodes, n, m) ? "Can be colored" : "Solution doesn't exist");