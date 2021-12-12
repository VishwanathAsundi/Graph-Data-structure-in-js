// Time Complexity of Prim's Minimum spanning tree algorithm is O(V^2)
// Where V is number of vertices in the graph
function findVertex(mstSet, key, V) {
    let min = Number.MAX_VALUE;
    let vertex;

    for (let i = 0; i < V; i++) {
        if (mstSet[i] == false && key[i] < min) {
            min = key[i];
            vertex = i;
        }
    }
    return vertex;
}

function printMST(parent, g, V) {
    document.write("Edge" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Weight<br/>");
    for (let i = 1; i < V; i++) {
        document.write(parent[i], "--", i, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", g[i][parent[i]]);
        document.write("<br/>");
    }
}

function primMST(g, V) {
    // Space O(V)
    let mstSet = new Array(V).fill(false);

    // Space O(V)
    let parent = new Array(V);

    // Space O(V)
    let key = new Array(V).fill(Number.MAX_VALUE);

    key[0] = 0; //starting node key value
    parent[0] = -1; // starting node of the spanning tree (So, There is no parent for this vertex)

    // Time O(V)
    for (let count = 0; count < V - 1; count++) {

        // Time O(V)
        let u = findVertex(mstSet, key, V);

        mstSet[u] = true;

        // Time O(V)
        for (let v = 0; v < V; v++) {
            if (g[u][v] && mstSet[v] == false && g[u][v] < key[v]) {
                key[v] = g[u][v];
                parent[v] = u;
            }
        }
    }
    printMST(parent, g, V);
}
let graph = [
    [0, 2, 0, 6, 0],
    [2, 0, 3, 8, 5],
    [0, 3, 0, 0, 7],
    [6, 8, 0, 0, 9],
    [0, 5, 7, 9, 0]
];
let V = 5;

// Print the solution
primMST(graph, V);