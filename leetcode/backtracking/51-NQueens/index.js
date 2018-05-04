/**
51. N-Queens
https://leetcode.com/problems/n-queens/description/

The n-queens puzzle is the problem of placing n queens on an n×n chessboard
such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement,
where 'Q' and '.' both indicate a queen and an empty space respectively.

Example:

Input: 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
*/

// time complexity - https://stackoverflow.com/a/20050433/5818414

/**
 * My Backtracking
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function(n) {
  // create a board of dots
  const board = new Array(n);
  
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n);
  }
  
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      board[row][col] = '.'
    }
  }

  let result = [];
  
  queensHelper(board, 0, result);
  
  return result;
};

function queensHelper(board, col, result) {
  if (col >= board.length) {
    // base case

    const boardWithStrings = [...board];
    
    for (let i = 0; i < boardWithStrings.length; i++) {
      boardWithStrings[i] = boardWithStrings[i].join('');
    }
    
    result.push(boardWithStrings);

  } else {
    // recursive case + backtracking

    for (let row = 0; row < board.length; row++) {
      if (isSafe(board, row, col)) {
        // choose
        board[row][col] = 'Q';
        
        //explore
        queensHelper(board, col + 1, result);
        
        // unchoose
        board[row][col] = '.';
      }
    }
    
  }
}

function isSafe(board, row, col) {
  // left gorizontal
  for (let c = col; c >= 0; c--) {
    if (board[row][c] == 'Q') return false;
  }
  // left high diagonal
  for (let r = row, c = col; r >= 0 && c >= 0; r--, c--) {
    if (board[r][c] == 'Q') return false;
  }
  // left down diagonal
  for (let r = row, c = col; r < board.length && c >= 0; r++, c--) {
    if (board[r][c] == 'Q') return false;
  }
  return true;
}
