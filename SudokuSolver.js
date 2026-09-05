function solveSudoku(board) {

    function isValid(row, col, num) {

        for (let i = 0; i < 9; i++) {

            if (board[row][i] === num) {
                return false;
            }

            if (board[i][col] === num) {
                return false;
            }

            const boxRow =
                3 * Math.floor(row / 3) +
                Math.floor(i / 3);

            const boxCol =
                3 * Math.floor(col / 3) +
                i % 3;

            if (board[boxRow][boxCol] === num) {
                return false;
            }
        }

        return true;
    }

    function solve() {

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {

                if (board[row][col] !== ".") {
                    continue;
                }

                for (
                    let num = 1;
                    num <= 9;
                    num++
                ) {
                    const value = String(num);

                    if (isValid(row, col, value)) {

                        board[row][col] = value;

                        if (solve()) {
                            return true;
                        }

                        board[row][col] = ".";
                    }
                }

                return false;
            }
        }

        return true;
    }

    solve();
}
