// Bellman-Ford detects and return if there is a negative weight cycle exists and it does not compute path distance for negative weight cycle graph

//Bellman-Ford does not work with undirected graph with negative edges as it will declared as negative cycle.

// Time complexity is O(VE)
// Space is O(V)
class Edge {
    constructor(s, d, w) {
        this.src = s;
        this.dest = d;
        this.weight = w;
    }
}
class createGraph {
    constructor(V, E) {
        this.V = V;
        this.E = E;
        this.edge = [];
    }
}

function printResult(dist, V) {
    document.write("Vertex &nbsp;&nbsp; Distance from source<br/>");
    for (let i = 0; i < V; i++) {
        document.write(i, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", dist[i], "<br/>");
    }
}

function BellmanFord(g, src) {
    console.log(g.edge);
    let dist = new Array(g.V).fill(Number.MAX_VALUE);

    dist[src] = 0;

    //Time O(V)
    for (let i = 0; i < g.V - 1; i++) {
        // Time O(E)
        for (let j = 0; j < g.E; j++) {
            let u = g.edge[j].src;
            let v = g.edge[j].dest;
            let weight = g.edge[j].weight;
            if (dist[u] != Number.MAX_VALUE && dist[v] > dist[u] + weight) {
                dist[v] = dist[u] + weight;
            }
        }
    }

    for (let j = 0; j < E; j++) {
        let u = g.edge[j].src;
        let v = g.edge[j].dest;
        let weight = g.edge[j].weight;
        if (dist[u] != Number.MAX_VALUE && dist[v] > dist[u] + weight) {
            document.write("There exist a negative weight cycle");
            return;
        }
    }
    printResult(dist, g.V);
}

let V = 5,
    E = 8;
const graph = new createGraph(V, E);
console.log(graph);

// add edge 0-1 (or A-B in above figure)
// graph.edge[0].src = 0;
// graph.edge[0].dest = 1;
// graph.edge[0].weight = -1;
graph.edge.push(new Edge(0, 1, -1));

// add edge 0-2 (or A-C in above figure)
// graph.edge[1].src = 0;
// graph.edge[1].dest = 2;
// graph.edge[1].weight = 4;
graph.edge.push(new Edge(0, 2, 4));

// // add edge 1-2 (or B-C in above figure)
// graph.edge[2].src = 1;
// graph.edge[2].dest = 2;
// graph.edge[2].weight = 3;
graph.edge.push(new Edge(1, 2, 3));

// // add edge 1-3 (or B-D in above figure)
// graph.edge[3].src = 1;
// graph.edge[3].dest = 3;
// graph.edge[3].weight = 2;
graph.edge.push(new Edge(1, 3, 2));

// // add edge 1-4 (or B-E in above figure)
// graph.edge[4].src = 1;
// graph.edge[4].dest = 4;
// graph.edge[4].weight = 2;
graph.edge.push(new Edge(1, 4, 2));

// // add edge 3-2 (or D-C in above figure)
// graph.edge[5].src = 3;
// graph.edge[5].dest = 2;
// graph.edge[5].weight = 5;
graph.edge.push(new Edge(3, 2, 5));

// // add edge 3-1 (or D-B in above figure)
// graph.edge[6].src = 3;
// graph.edge[6].dest = 1;
// graph.edge[6].weight = 1;
graph.edge.push(new Edge(3, 1, 1));

// // add edge 4-3 (or E-D in above figure)
// graph.edge[7].src = 4;
// graph.edge[7].dest = 3;
// graph.edge[7].weight = -3;
graph.edge.push(new Edge(4, 3, -3));

BellmanFord(graph, 0);