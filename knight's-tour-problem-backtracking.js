// backtracking: Backtracking is algorithmic paradigm it tries all solutions (configurations) unitl it finds the solution that works.

// Knight means Horse( Horse moves in L shape on the chess board)


function isSafe(x, y, sol, N) {
    return (x >= 0 && x < N && y >= 0 && y < N && sol[x][y] == -1);
}

function printSolutionMatrix(sol, N) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            document.write(sol[i][j], "&nbsp;&nbsp;&nbsp; ");
        }
        document.write("<br/>");
    }
}

// Time there are N^2 cells and 8 possible moves
// So the time complexity is (8^(N^2))
function solveKnightsTourProblemUtil(x, y, move, xpos, ypos, sol, N) {

    let nextX, nextY;
    if (move == N * N) {
        return true;
    }

    for (let i = 0; i < N; i++) {
        nextX = x + xpos[i];
        nextY = y + ypos[i];


        if (isSafe(nextX, nextY, sol, N)) {
            sol[nextX][nextY] = move;
            if (solveKnightsTourProblemUtil(nextX, nextY, move + 1, xpos, ypos, sol, N)) {
                return true;
            } else {
                sol[nextX][nextY] = -1; // backtracking by undoing a step
            }

        }
    }
    return false;
}

function solveKnightsTourProblem() {
    // 8x8 chess board
    let N = 8;

    // Space O(N^2)
    let sol = new Array(N).fill().map(() => new Array(N).fill(-1));

    console.log(sol, "sol");

    // horse is initially at (x,y)=(0,0) position
    sol[0][0] = 0;

    // horse can move along with one of these position
    // There are 8 possible moves
    xpos = [2, 1, -1, -2, -2, -1, 1, 2];
    ypos = [1, 2, 2, 1, -1, -2, -2, -1];
    if (!solveKnightsTourProblemUtil(0, 0, 1, xpos, ypos, sol, N)) {
        document.write("Soluton doesn't exist");
        return;
    }
    printSolutionMatrix(sol, N);

}
solveKnightsTourProblem();