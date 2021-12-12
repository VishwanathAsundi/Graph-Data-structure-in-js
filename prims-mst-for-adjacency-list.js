// Time complexity id O(V+E)*O(VLogV)
class Graph {
    constructor(v) {
        this.V = v;
        this.adj = new Array(v).fill().map(() => new Array());
    }
}

function addEdge(g, u, v, weight) {
    g.adj[u].push({
        dest: v,
        weight: weight
    });
    g.adj[v].push({
        dest: u,
        weight: weight
    });
}

function prims_mst(g) {
    // Space O(V)
    let mstSet = new Array(g.V).fill(false);

    let keys = new Array(g.V).fill().map((value, index) => {
        return {
            vertex: index,
            key: Number.MAX_VALUE
        }
    });

    let parent = new Array(g.V).fill(-1);


    keys[0].key = 0;
    console.log(keys, "keys");

    let q = [];

    for (let i = 0; i < g.V; i++) {
        q.push(keys[i]);
    }

    console.log(g.adj);
    // Time O(V+E)
    while (q.length > 0) {
        let front = q.shift();

        mstSet[front.vertex] = true;

        for (let j = 0; j < g.adj[front.vertex].length; j++) {
            let v = g.adj[front.vertex][j];

            if (mstSet[v.dest] == false) {
                if (keys[v.dest].key > v.weight) {
                    // Time O(LogV)
                    q.splice(q.indexOf(v.dest), 1);
                    keys[v.dest].key = v.weight;
                    q.push(keys[v.dest]);
                    //Time O(VLogV)
                    q.sort((a, b) => a.key - b.key);
                    parent[v.dest] = front.vertex;

                }
            }
        }

    }

    for (let i = 1; i < g.V; i++) {
        document.write(parent[i], " -- ", i, "<br/>");
    }


}
let V = 9;
let graph = new Graph(V);
addEdge(graph, 0, 1, 4);
addEdge(graph, 0, 7, 8);
addEdge(graph, 1, 2, 8);
addEdge(graph, 1, 7, 11);
addEdge(graph, 2, 3, 7);
addEdge(graph, 2, 8, 2);
addEdge(graph, 2, 5, 4);
addEdge(graph, 3, 4, 9);
addEdge(graph, 3, 5, 14);
addEdge(graph, 4, 5, 10);
addEdge(graph, 5, 6, 2);
addEdge(graph, 6, 7, 1);
addEdge(graph, 6, 8, 6);
addEdge(graph, 7, 8, 7);


prims_mst(graph);