let color;
let V = 4;
// Backtracking solution
// Time complexity is O(m^V)
// Space is O(V)
function isSafe(graph, color, c, v) {
    for (let i = 0; i < V; i++) {
        if (graph[v][i] == 1 && color[i] == c) {
            return false;
        }
    }
    return true;
}

function graphColoringUtil(graph, m, v) {
    if (v == V) return true;

    for (let c = 1; c <= m; c++) {
        if (isSafe(graph, color, c, v)) {
            color[v] = c;
            if (graphColoringUtil(graph, m, v + 1)) {
                return true;
            }
            // if the coloring vertex v did not lead to a solution
            // Undo the step by backtracking
            color[v] = 0;
        }
    }
    return false;

}

function printSolution(color) {
    for (let i = 0; i < V; i++) {
        document.write(color[i], " ");
    }
}

function graphColoring(graph, m) {
    color = new Array(4).fill(0);

    if (graphColoringUtil(graph, m, 0)) {
        printSolution(color);
        return;
    }
    document.write("Solution doesn't exist!");
}
let graph = [
    [0, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 1],
    [1, 0, 1, 0],
];
let m = 3; // Number of colors
graphColoring(graph, m);