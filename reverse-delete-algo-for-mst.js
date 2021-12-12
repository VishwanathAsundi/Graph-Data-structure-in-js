class Graph {
    constructor(v) {
        this.V = v;
        this.adj = new Array(v).fill().map(() => new Array());
        this.edges = [];
    }
    addEdge(u, v, w) {
        this.adj[u].push({
            dest: v,
            weight: w
        });
        this.adj[v].push({
            dest: u,
            weight: w
        });
        this.edges.push({
            weight: w,
            src: u,
            dest: v
        });
    }
    DFSUtil(u, visited) {
        visited[u] = true;

        let children = this.adj[u];

        for (let i = 0; i < children.length; i++) {
            if (!visited[children[i].dest]) {
                this.DFSUtil(children[i].dest, visited);
            }
        }
    }
    isConnected() {
        let visited = new Array(this.V).fill(false);

        this.DFSUtil(0, visited);

        for (let i = 0; i < this.V; i++) {
            if (visited[i] == false) {
                return false;
            }
        }
        return true;
    }
    reverseDeleteMST() {
        let mstWeight = 0;

        // O(ELogE)
        // sort the edges in the non-increasing order of their weights
        this.edges.sort((a, b) => b.weight - a.weight);

        // Time O(E)
        for (let i = 0; i < this.edges.length; i++) {
            let current = this.edges[i];

            let temp = [...this.adj];

            temp[current.src] = temp[current.src].filter(item => item.dest != current.dest);

            temp[current.dest] = temp[current.dest].filter(item => item.dest != current.src);
            this.adj = temp;

            // O(V+E)
            if (this.isConnected() == false) {
                this.adj[current.src].push({
                    dest: current.dest,
                    weight: current.weight
                });
                this.adj[current.dest].push({
                    dest: current.src,
                    weight: current.weight
                });

                // This is the edge part of mstSet
                document.write(current.src, "--", current.dest, "<br/>");
                mstWeight += current.weight;
            }
        }
        document.write("Minimum spanning tree weight is : ", mstWeight);
    }
}

let V = 9;
let g = new Graph(V);

//  making above shown graph
g.addEdge(0, 1, 4);
g.addEdge(0, 7, 8);
g.addEdge(1, 2, 8);
g.addEdge(1, 7, 11);
g.addEdge(2, 3, 7);
g.addEdge(2, 8, 2);
g.addEdge(2, 5, 4);
g.addEdge(3, 4, 9);
g.addEdge(3, 5, 14);
g.addEdge(4, 5, 10);
g.addEdge(5, 6, 2);
g.addEdge(6, 7, 1);
g.addEdge(6, 8, 6);
g.addEdge(7, 8, 7);

g.reverseDeleteMST();