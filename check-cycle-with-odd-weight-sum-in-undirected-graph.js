// Time complexity is O(N+E)
// Where N is number of initial nodes+ number of pseudo nodes created 
// E is the Number of edges created
function twoColorUtil(G, u, colorsArr) {
    colorsArr[u] = 1;

    let q = [u];
    while (q.length != 0) {
        let u = q.shift();
        for (let v = 0; v < G[u].length; v++) {
            if (colorsArr[G[u][v]] == -1) {
                colorsArr[G[u][v]] = 1 - colorsArr[u];
                q.push(G[u][v]);
            } else if (colorsArr[G[u][v]] == colorsArr[u]) {
                return false;
            }
        }
    }
    return true;
}

function twoColor(G, N) {

    let colorsArr = new Array(N + 1).fill(-1);
    // O(N) Where N is n+psedo nodes created
    for (let i = 1; i <= N; i++) {
        if (colorsArr[i] == -1) {
            if (twoColorUtil(G, i, colorsArr) == false) {
                return false;
            }
        }
    }
    return true;
}

function isOddSum(info, n, m) {
    let G = new Array(2 * n).fill().map(() => new Array()); // 2D array

    let pseudo = n + 1;
    let pseudoCount = 0;

    // O(n)
    for (let i = 0; i < n; i++) {
        if (info[i][2] % 2 == 1) {
            let u = info[i][0];
            let v = info[i][1];

            G[u].push(v);
            G[v].push(u);
        } else {
            let u = info[i][0];
            let v = info[i][1];

            G[u].push(pseudo);
            G[pseudo].push(u);
            G[pseudo].push(v);
            G[v].push(pseudo);

            pseudo++;
            pseudoCount++;
        }
    }
    return twoColor(G, n + pseudoCount);
}

var n = 4,
    m = 3;
var info = [
    [1, 2, 12],
    [2, 3, 1],
    [4, 3, 1],
    [4, 1, 20]
];
// This function break the even weighted edges in
// two parts. Makes the adjacency representation
// of the graph and sends it for two coloring.
if (isOddSum(info, n, m) == true)
    document.write("No");
else
    document.write("Yes");