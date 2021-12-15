 // Time complexity is O(m^V)
 // Since there are m colors need to be filled with V vertices that leads m^V combinations
 // Space is O(V) for storing the result and for the recursive stack

 let V = 4;

 function printSolution(color) {
     document.write("Solution exists!<br/>");
     for (let i = 0; i < V; i++) {
         document.write(color[i], " ");
     }
 }

 function isSafe(graph) {
     for (let i = 0; i < V; i++) {
         for (let j = i + 1; j < V; j++) {
             if (graph[i][j] && color[i] == color[j]) return false;
         }
     }
     return true;
 }

 function graphColoring(graph, m, i, color) {
     // reached end of coloring
     if (i == V) {
         if (isSafe(graph, color)) {
             printSolution(color);
             return true;
         }
         return false;
     }
     for (let j = 1; j <= m; j++) {
         color[i] = j;
         if (graphColoring(graph, m, i + 1, color)) {
             return true;
         }
         color[i] = 0;
     }
     return false;
 }

 let graph = [
     [false, true, true, true],
     [true, false, true, false],
     [true, true, false, true],
     [true, false, true, false]
 ];

 let m = 3; // Number of colors

 // Initialize all color values as 0.
 // This initialization is needed
 // correct functioning of isSafe()
 let color = new Array(V);
 for (let i = 0; i < V; i++)
     color[i] = 0;

 if (!graphColoring(graph, m, 0, color))
     document.write("Solution does not exist");