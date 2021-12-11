// Time complexity is O(V*(V+E))
// Space Complexity is O(V)


let maxLength = Number.MIN_VALUE;
class Graph {
    constructor(v) {
        this.v = v;
        this.adj = new Array(v + 1).fill().map(() => new Array());
    }
    addEdge(src, dest, weight) {
        this.adj[src].push([dest, weight]);
        this.adj[dest].push([src, weight]);
    }
    DFS(src, prevLength, visited) {
        visited[src] = true;

        let curLength = 0;
        for (let v = 0; v < this.adj[src].length; v++) {
            let neighour = this.adj[src][v];
            if (!visited[neighour[0]]) {
                curLength = prevLength + neighour[1];
                this.DFS(neighour[0], curLength, visited);
            }
            if (maxLength < curLength) {
                maxLength = curLength;
            }
            curLength = 0;
        }

    }
    longestPath() {
        //Time O(V)
        for (let i = 1; i <= this.v; i++) {
            // Space O(V)
            let visited = new Array(this.v + 1).fill(false);
            //Time O(V+E)
            this.DFS(i, 0, visited);
        }
        return maxLength;
    }
}
const g = new Graph(6);
g.addEdge(1, 2, 3);
g.addEdge(2, 6, 2);
g.addEdge(2, 3, 4);
g.addEdge(5, 6, 5);
g.addEdge(4, 6, 6);



document.write("Longest path between any two vertices is : ", g.longestPath());