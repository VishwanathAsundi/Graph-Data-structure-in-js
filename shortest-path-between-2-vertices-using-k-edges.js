const INF = Number.MAX_VALUE;
let V = 4;

function shortestPath(g, u, v, k) {
    if (u == v) return 0;
    if (k == 1 && g[u][v] != INF) return g[u][v];
    if (k <= 0) return INF;

    let res = INF;

    // Time O(V^k)
    for (let i = 0; i < V; i++) {
        if (u != i && v != i && g[u][i] != INF) {
            let temp = g[u][i] + shortestPath(g, i, v, k - 1);
            if (temp != INF) {
                res = Math.min(res, temp)
            }
        }
    }
    return res;

}
let graph = [
    [0, 10, 3, 2],
    [INF, 0, INF, 7],
    [INF, INF, 0, 6],
    [INF, INF, INF, 0]
];

let u = 0,
    v = 3,
    k = 2;
document.write("Weight of the shortest path is " +
    shortestPath(graph, u, v, k));