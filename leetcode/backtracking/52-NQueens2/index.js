/**
52. N-Queens II
https://leetcode.com/problems/subsets-ii/description/

The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return the number of distinct solutions to the n-queens puzzle.

Example:

Input: 4
Output: 2
Explanation: There are two distinct solutions to the 4-queens puzzle as shown below.
[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
*/

/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = function(n) {
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

  let result = { counter: 0 };
  
  queensHelper(board, 0, result);
  
  return result.counter;
};

function queensHelper(board, col, result) {
  if (col >= board.length) {
    // base case

    result.counter++;

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
