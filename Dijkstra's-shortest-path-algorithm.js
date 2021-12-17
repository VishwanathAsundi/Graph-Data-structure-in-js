// Time complexity of dijkstra shortest path algo is O(V^2)
// Space is O(V)

// dijkstra is similar to Prim's Minimum spanning tree algorithm
let V = 9;

function minDistance(sptSet, dist) {
    let minIndex, min = Number.MAX_VALUE;

    for (let v = 0; v < V; v++) {
        if (sptSet[v] == false && dist[v] < min) {
            min = dist[v];
            minIndex = v;
        }
    }
    return minIndex;
}

function dijkstra(g, src) {
    // Space O(V)
    let sptSet = new Array(V).fill(false);
    let dist = new Array(V).fill(Number.MAX_VALUE);

    // distance from the source to itself is 0
    dist[src] = 0;

    // Time O(V)
    for (let count = 0; count < V - 1; count++) {

        // Time O(V)
        let u = minDistance(sptSet, dist);

        // Add the vertes to shortest path tree set
        sptSet[u] = true;

        // Look for adjacent vertices of u and which are not added to sptSet and their distacnce from src vertex is greater than  distance u-v + dist[v]
        // Time O(V)
        for (let v = 0; v < V; v++) {
            if (!sptSet[v] && g[u][v] != 0 &&
                dist[u] != Number.MAX_VALUE &&
                dist[u] + g[u][v] < dist[v]) {
                dist[v] = dist[u] + g[u][v];
            }
        }
    }
    printSolution(dist);
}

function printSolution(dist) {
    document.write("From - To   Distance <br/>");
    for (let i = 0; i < V; i++) {
        document.write(0, " - ", i, " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;", dist[i], "<br/>");
    }
}
// adjacency matrix representation of the graph
let graph = [
    [0, 4, 0, 0, 0, 0, 0, 8, 0],
    [4, 0, 8, 0, 0, 0, 0, 11, 0],
    [0, 8, 0, 7, 0, 4, 0, 0, 2],
    [0, 0, 7, 0, 9, 14, 0, 0, 0],
    [0, 0, 0, 9, 0, 10, 0, 0, 0],
    [0, 0, 4, 14, 10, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 1, 6],
    [8, 11, 0, 0, 0, 0, 1, 0, 7],
    [0, 0, 2, 0, 0, 0, 6, 7, 0]
]
// Find the shortest distance to all vertices from vertex 0
dijkstra(graph, 0);