const INF = Number.MAX_VALUE;
class AllPairShortestPath {
    constructor(v) {
        this.v = v;
    }
    floydWarshall(g) {
        let dist = new Array(this.v).fill().map(() => new Array(this.v).fill(0));
        // Space O(V^2)
        for (let i = 0; i < this.v; i++) {
            for (let j = 0; j < this.v; j++) {
                dist[i][j] = g[i][j];
            }
        }
        // Time O(V^3)
        for (let k = 0; k < this.v; k++) {
            for (let i = 0; i < this.v; i++) {
                for (let j = 0; j < this.v; j++) {
                    if (dist[i][k] != INF && dist[k][j] != INF && dist[i][k] + dist[k][j] < dist[i][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j];
                    }
                }
            }
        }
        this.printShortestDistance(dist);
    }
    printShortestDistance(dist) {
        for (let i = 0; i < this.v; i++) {
            for (let j = 0; j < this.v; j++) {
                if (dist[i][j] == INF) {
                    document.write(" INF   ");
                } else
                    document.write(" ", dist[i][j], " ");
            }
            document.write("<br/>");
        }
    }

}

var graph = [
    [0, 5, INF, 10],
    [INF, 0, 3, INF],
    [INF, INF, 0, 1],
    [INF, INF, INF, 0],
];

var a = new AllPairShortestPath(graph.length);

// Print the solution
a.floydWarshall(graph);