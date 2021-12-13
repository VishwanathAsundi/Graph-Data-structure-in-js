function isSafe(x, y, maze, N) {
    return (x >= 0 && x < N && y >= 0 && y < N && maze[x][y] == 1);
}

function printSolutionPath(maze, N) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            document.write(maze[i][j], " ");
        }
        document.write("<br/>")
    }
}

function solveMazeUtil(maze, sol, x, y, N) {
    if (x == N - 1 && y == N - 1 && maze[x][y] == 1) {
        sol[x][y] = 1;
        return true;
    }

    if (isSafe(x, y, maze, N)) {
        sol[x][y] = 1;
        if (solveMazeUtil(maze, sol, x, y + 1, N)) {
            return true;
        }
        if (solveMazeUtil(maze, sol, x + 1, y, N)) {
            return true;
        }
        if (solveMazeUtil(maze, sol, x, y - 1, N)) {
            return true;
        }
        if (solveMazeUtil(maze, sol, x - 1, y, N)) {
            return true;
        }
        sol[x][y] = 0; // backtracking 
        return false;
    }
    return false;
}

function solveMaze(maze, N) {
    // Space O(N^2)
    let sol = new Array(N).fill().map(() => new Array(N).fill(0));

    // N^2 cells and 2 possible movements
    // Time O(2^(N^2))
    if (solveMazeUtil(maze, sol, 0, 0, N)) {
        printSolutionPath(sol, N);
        return;
    }
    document.write("Solution does not exist");
    return;
}
let maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 1, 1]
];
let N = maze.length;
solveMaze(maze, N);