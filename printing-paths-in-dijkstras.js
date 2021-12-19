function dijkstra(g, src) {
    let V = g[0].length;

    let sptSet = new Array(V).fill(false);

    let dist = new Array(V).fill(Number.MAX_VALUE);

    dist[src] = 0;

    let parent = new Array(V);

    parent[src] = -1;

    for (let v = 1; v < V; v++) {
        let nearestVertex = -1;
        let shortestDistance = Number.MAX_VALUE;

        for (let vertex = 0; vertex < V; vertex++) {
            if (!sptSet[vertex] && dist[vertex] < shortestDistance) {
                nearestVertex = vertex;
                shortestDistance = dist[vertex];
            }
        }

        sptSet[nearestVertex] = true;

        for (let vertex = 0; vertex < V; vertex++) {
            let edgeDistance = g[nearestVertex][vertex];

            if (edgeDistance > 0 && (edgeDistance + shortestDistance) < dist[vertex]) {
                parent[vertex] = nearestVertex;
                dist[vertex] = edgeDistance + shortestDistance;

            }
        }

    }
    printSolution(dist, V, parent);
}

function printSolution(dist, V, parent) {
    document.write("Vertex &nbsp;&nbsp; Shortest Distance from source &nbsp;&nbsp; Path<br/>");
    for (let i = 0; i < V; i++) {
        document.write(i, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ", dist[i]);
        document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        printPath(parent, i);
        document.write("<br/>")
    }
}

function printPath(parent, i) {
    if (parent[i] == -1) {
        document.write(i, " ");
        return;
    }
    printPath(parent, parent[i]);
    document.write("->", i);
}

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
];
dijkstra(graph, 0)