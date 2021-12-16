// Hamiltonian cycle: Hamiltonian path in an undirected graph is visits each vertex only once.

class Hamiltonian {
    constructor(v) {
        this.v = v;
        // Space O(V) Where V is number of vertices in the graph.
        this.path = new Array(v).fill(-1); // resultant path
    }
    isSafe(node, g, path, pos) {
        if (g[path[pos - 1]][node] == 0) return false;

        // O(LogV)
        if (path.includes(node)) {
            return false;
        }
        return true;
    }
    hmaCycleUtil(g, path, pos) {
        // 'pos' here is the position of the last inserted vertex to the path array.

        if (pos == this.v) {
            // check for edge from the last vertex to the first vertex
            if (g[path[pos - 1]][path[0]] == 1) return true;
            return false;
        }
        for (let i = 1; i < this.v; i++) {
            if (this.isSafe(i, g, path, pos)) {
                path[pos] = i;
                if (this.hmaCycleUtil(g, path, pos + 1)) {
                    return true;
                }
                path[pos] = -1;
            }
        }
        return false;

    }
    hamCycle(g) {
        // starting node of the graph
        this.path[0] = 0;

        if (this.hmaCycleUtil(g, this.path, 1) == false) {
            document.write("<br/><br/>Solution does not exist");
            return;
        }
        this.printHamiltonianPath();
        return;
    }
    printHamiltonianPath() {
        document.write("Solution exists!<br/> Hamiltonian path is: ");

        for (let i = 0; i < this.v; i++) {
            document.write(this.path[i], " ");
        }
    }
}

const h = new Hamiltonian(5);
var graph1 = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 1, 1],
    [0, 1, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [0, 1, 1, 1, 0],
];

// Print the solution
h.hamCycle(graph1);

const h2 = new Hamiltonian(5);
var graph2 = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 1, 1],
    [0, 1, 0, 0, 1],
    [1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0],
];

// Print the solution
h2.hamCycle(graph2);