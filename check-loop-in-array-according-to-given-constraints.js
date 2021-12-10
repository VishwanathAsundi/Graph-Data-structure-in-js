// Given an array arr[0..n-1] of positive and negative numbers we need to find if there is a cycle in array with given rules of movements. If a number at an i index is positive, then move arr[i]%n forward steps, i.e., next index to visit is (i + arr[i])%n. Conversely, if it’s negative, move backward arr[i]%n steps i.e., next index to visit is (i – arr[i])%n. Here n is size of array. If value of arr[i]%n is zero, then it means no move from index i.

function isCycleUtil(v, visited, recurStack, adj) {
    visited[v] = true;
    recurStack[v] = true;

    for (let i = 0; i < adj[v].length; i++) {
        if (!visited[adj[v][i]]) {
            if (isCycleUtil(adj[v][i], visited, recurStack, adj)) {
                return true;
            }
        } else if (visited[adj[v][i]] == true && recurStack[adj[v][i]] == true) {
            return true;
        }
    }
    recurStack[v] = false;
    return false;
}

function isCycle(arr, n) {
    let adj = new Array(n).fill().map(() => new Array());

    for (let i = 0; i < n; i++) {
        if (i != ((i + arr[i] + n) % n)) {
            adj[i].push((i + arr[i] + n) % n);
        }
    }
    let visited = new Array(n).fill(false);
    let recurStack = new Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            if (isCycleUtil(i, visited, recurStack, adj)) return true;
        }
    }
    return false;
}

let arr = [2, -1, 1, 2, 2];
// arr = [1, 2]
let n = arr.length;
if (isCycle(arr, n))
    document.write("Yes, There exists a loop in the given array" + "<br>");
else
    document.write("No" + "<br>");