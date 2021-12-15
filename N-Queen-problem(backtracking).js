function isSafe(board, row, col, N) {
    // chek for all left cells 
    for (let i = 0; i < col; i++) {
        if (board[row][i]) {
            return false;
        }
    }

    // check for all left diagonal cells
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j]) {
            return false;
        }
    }

    // check for left down diagonal cells
    for (let i = row, j = col; i < N && j >= 0; i++, j--) {
        if (board[i][j]) {
            return false;
        }
    }
    return true;
}

function solveNQUtil(board, col, N) {
    if (col >= N) {
        return true;
    }
    for (let i = 0; i < N; i++) {
        if (isSafe(board, i, col, N)) {
            board[i][col] = 1;

            if (solveNQUtil(board, col + 1, N)) {
                return true;
            }

            board[i][col] = 0; // backtracking undoing the step when a required constraint is not met
        }
    }
    return false;
}

function printSolution(board, N) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            document.write(board[i][j], " ");
        }
        document.write("<br/>");
    }
}

function solveNQproblem(board, N) {
    if (solveNQUtil(board, 0, N) == false) {
        document.write("Solution doesn't exist");
        return;
    }
    printSolution(board, N);
}
let N = 4;
let board = new Array(N).fill().map(() => new Array(N).fill(0));
solveNQproblem(board, N);