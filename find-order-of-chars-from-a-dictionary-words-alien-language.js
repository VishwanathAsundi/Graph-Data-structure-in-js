// Time complexity is O(N*L) where N is input words array length and L is max length of the word
// Space O(C) where C is the final number of unique characters
let adj = {};

function isCyclic(src, dest, visited) {
    visited[dest] = true;
    if (adj[dest]) {
        let children = adj[dest];
        for (let i = 0; i < children.length; i++) {
            if (src == visited[children[i]]) {
                return true;
            }
            if (!visited[children[i]]) {
                isCyclic(src, children[i], visited);
            }
        }
    }

    return false;
}

function compareTwoStrings(str1, str2, hm) {
    let i = 0;
    let visited = {};

    for (let [key, value] of hm.entries()) {
        visited[key] = false;
    }

    while (i < str1.length && i < str2.length) {
        if (str1[i] !== str2[i]) {
            if (!hm.has(str1[i]) || !hm.has(str2[i])) {

                if (!isCyclic(str1[i], str2[i], visited)) {
                    if (adj[str1[i]]) {
                        adj[str1[i]].push(str2[i]);
                    } else {
                        adj[str1[i]] = [str2[i]];
                    }

                    hm.set(str1[i], true);
                    hm.set(str2[i], true);
                }
            }
        }
        i++;
    }
}

function DFS(adj, node, visited, stack) {
    visited[node] = true;

    if (adj[node]) {

        let children = adj[node];
        for (let i = 0; i < children.length; i++) {
            if (!visited[children[i]]) {
                DFS(adj, children[i], visited, stack)
            }
        }
    }
    stack.push(node);

}

function topologicalSort(adj) {
    let visited = {};
    let stack = [];
    for (let key in adj) {
        visited[key] = false;
    }

    for (let node in adj) {
        if (!visited[node]) {
            DFS(adj, node, visited, stack);
        }
    }
    while (stack.length != 0) {
        document.write(stack.pop(), ", ");
    }
}

function printOrder(a, n) {
    let hm = new Map(); // Fixed size of 26
    // Time O(n)
    for (let i = 0; i < n - 1; i++) {
        compareTwoStrings(a[i], a[i + 1], hm);
    }
    console.log(adj, "adj");
    topologicalSort(adj);
}
let words = ["caa", "aaa", "aab"];
document.write(words, "<br/>");
printOrder(words, words.length);
document.write("<br/><br/>")

words = ["baa", "abcd", "abca", "cab", "cad"];
document.write(words, "<br/>");
printOrder(words, words.length);