var V = 5;
var count = 0;

function countCycles(graph, n) {
    var marked = Array(V).fill(false);

    // Searching for cycle by using
    // v-n+1 vertices
    for (var i = 0; i < V - (n - 1); i++) {
        DFS(graph, marked, n - 1, i, i);

        // ith vertex is marked as visited
        // and will not be visited again
        marked[i] = true;
    }

    return parseInt(count / 2);
}

function DFS(graph, marked, n, vert, start) {

    // mark the vertex vert as visited
    marked[vert] = true;

    // if the path of length (n-1) is found
    if (n == 0) {

        // mark vert as un-visited to
        // make it usable again
        marked[vert] = false;

        // Check if vertex vert end
        // with vertex start
        if (graph[vert][start] == 1) {
            count++;
            return;
        } else
            return;
    }

    // For searching every possible
    // path of length (n-1)
    for (var i = 0; i < V; i++)
        if (!marked[i] && graph[vert][i] == 1)

            // DFS for searching path by
            // decreasing length by 1
            DFS(graph, marked, n - 1, i, start);

    // marking vert as unvisited to make it
    // usable again
    marked[vert] = false;
}
var graph = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0]
];

var n = 4;

document.write("Total cycles of length " +
    n + " are " +
    countCycles(graph, n));