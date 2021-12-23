const ROW = 5,
    COL = 5;
class cell {
    constructor(x, y, distance) {
        this.x = x;
        this.y = y;
        this.distance = distance;
    }
}

function isSafe(x, y) {
    return (x >= 0 && x < ROW && y >= 0 && y < COL);
}

function shortest(grid, row, col) {
    let dist = new Array(row).fill().map(() => new Array(col).fill(Number.MAX_VALUE));

    dist[0][0] = grid[0][0];

    // Possible moves
    let noOfMoves = 4;
    let dx = [-1, 0, 1, 0];
    let dy = [0, -1, 0, 1];

    let q = [];
    q.push(new cell(0, 0, 0));

    while (q.length != 0) {
        let k = q.shift();
        for (let i = 0; i < noOfMoves; i++) {
            let x = k.x + dx[i];
            let y = k.y + dy[i];

            if (!isSafe(x, y)) {
                continue;
            }

            if (dist[x][y] > dist[k.x][k.y] + grid[x][y]) {
                dist[x][y] = dist[k.x][k.y] + grid[x][y];
                q.push(new cell(x, y, dist[x][y]));
            }
        }
    }
    return dist[row - 1][col - 1];
}
var grid = [
    [31, 100, 65, 12, 18],
    [10, 13, 47, 157, 6],
    [100, 113, 174, 11, 33],
    [88, 124, 41, 20, 140],
    [99, 32, 111, 41, 20]
];
document.write("Minimum cost path from Top left cell to Bottom right cell : ");
document.write(shortest(grid, ROW, COL));