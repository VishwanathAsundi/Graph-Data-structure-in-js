let V = 5;


function minKey(key, mstSet) {

    let min = Number.MAX_VALUE,
        min_index = 0;

    for (let v = 0; v < V; v++) {
        if (mstSet[v] == false && key[v] < min) {
            min = key[v];
            min_index = v;
        }
    }
    return min_index;
}

function printMST(parent, n, graph) {
    document.write("Edge Weight<br>");
    let minProduct = 1;
    for (let i = 1; i < V; i++) {
        document.write(parent[i] + " - " + i + " " + graph[i][parent[i]] + "<br>");

        minProduct *= graph[i][parent[i]];
    }
    document.write("Minimum Obtainable product is ",
        minProduct + "<br>");
}


function primMST(inputGraph, logGraph) {
    let parent = new Array(V);
    let key = new Array(V).fill(Number.MAX_VALUE);
    let mstSet = new Array(V).fill(false);

    // Always include first 1st vertex in MST.
    key[0] = 0; // Make key 0 so that this vertex is

    parent[0] = -1; // First node is always root of MST

    for (let count = 0; count < V - 1; count++) {

        let u = minKey(key, mstSet);

        mstSet[u] = true;

        for (let v = 0; v < V; v++)

        {
            if (logGraph[u][v] > 0 &&
                mstSet[v] == false &&
                logGraph[u][v] < key[v]) {

                parent[v] = u;
                key[v] = logGraph[u][v];
            }
        }
    }

    printMST(parent, V, inputGraph);
}


function minimumProductMST(graph) {
    let logGraph = new Array(V);

    // Constructing logGraph from original graph
    for (let i = 0; i < V; i++) {
        logGraph[i] = new Array(V);
        for (let j = 0; j < V; j++) {
            if (graph[i][j] > 0) {
                logGraph[i][j] = Math.log(graph[i][j]);
            } else {
                logGraph[i][j] = 0;
            }
        }
    }
    primMST(graph, logGraph);
}
let graph = [
    [0, 2, 0, 6, 0],
    [2, 0, 3, 8, 5],
    [0, 3, 0, 0, 7],
    [6, 8, 0, 0, 9],
    [0, 5, 7, 9, 0],
];

minimumProductMST(graph);