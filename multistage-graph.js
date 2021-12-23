const V = 8;
const INF = Number.MAX_VALUE;

function shortestDist(g) {
    let dist = new Array(V).fill(INF);

    dist[V - 1] = 0;

    // Time complexity is O(V^2)
    for (let i = V - 2; i >= 0; i--) {
        for (let j = i; j < V; j++) {
            if (g[i][j] == INF) {
                continue;
            }
            dist[i] = Math.min(dist[i], g[i][j] + dist[j]);
        }
    }
    return dist[0];
}
let graph = [
    [INF, 1, 2, 5, INF, INF, INF, INF],
    [INF, INF, INF, INF, 4, 11, INF, INF],
    [INF, INF, INF, INF, 9, 5, 16, INF],
    [INF, INF, INF, INF, INF, INF, 2, INF],
    [INF, INF, INF, INF, INF, INF, INF, 18],
    [INF, INF, INF, INF, INF, INF, INF, 13],
    [INF, INF, INF, INF, INF, INF, INF, 2]
];
document.write(shortestDist(graph));