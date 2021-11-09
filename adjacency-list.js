function addEdge(adj, u, v) {
  adj[u].push(v);
  adj[v].push(u);
}

function printGraph(adj) {
  for (let i = 0; i < adj.length; i++) {
    document.write("<br>Adjacency list of vertex " + i + "<br>");
    document.write("head");
    for (let j = 0; j < adj[i].length; j++) {
      document.write(" -> " + adj[i][j]);
    }
    document.write("<br>");
  }
}
let V = 5;
let adj = [];

for (let i = 0; i < V; i++) adj.push([]);

// Adding edges one by one
addEdge(adj, 0, 1);
addEdge(adj, 0, 4);
addEdge(adj, 1, 2);
addEdge(adj, 1, 3);
addEdge(adj, 1, 4);
addEdge(adj, 2, 3);
addEdge(adj, 3, 4);

printGraph(adj);
