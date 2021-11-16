function printLevels(graph, V, x) {
  // array to store level of each node
  var level = Array(V);
  var marked = Array(V).fill(false);

  // create a queue
  var que = [];

  // enqueue element x
  que.push(x);

  // initialize level of source node to 0
  level[x] = 0;

  // marked it as visited
  marked[x] = true;

  // do until queue is empty
  while (que.length > 0) {
    // get the first element of queue
    x = que[0];

    // dequeue element
    que.shift();

    // traverse neighbors of node x
    for (var i = 0; i < graph[x].length; i++) {
      // b is neighbor of node x
      var b = graph[x][i];

      // if b is not marked already
      if (!marked[b]) {
        // enqueue b in queue
        que.push(b);

        // level of b is level of x + 1
        level[b] = level[x] + 1;

        // mark b
        marked[b] = true;
      }
    }
  }

  // display all nodes and their levels
  document.write("Nodes" + " " + "Level<br>");
  for (var i = 0; i < V; i++)
    document.write(" " + i + " --> " + level[i] + "<br>");
}

// Driver Code
// adjacency graph for tree
var V = 8;
var graph = Array.from(Array(V + 1), () => Array());

graph[0].push(1);
graph[0].push(2);
graph[1].push(3);
graph[1].push(4);
graph[1].push(5);
graph[2].push(5);
graph[2].push(6);
graph[6].push(7);
// call levels function with source as 0
printLevels(graph, V, 0);
