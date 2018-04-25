/**
453. Minimum Moves to Equal Array Elements
https://leetcode.com/problems/minimum-moves-to-equal-array-elements/description/

Given a non-empty integer array of size n, find the minimum number of moves required
to make all array elements equal, where a move is incrementing n - 1 elements by 1.

Example:

Input:
[1,2,3]

Output:
3

Explanation:
Only three moves are needed (remember each move increments two elements):

[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
*/

/**
 * Approach #5 Using Math
 * @param {number[]} nums
 * @return {number}
 */
let minMoves = function(nums) {
  let min = nums[0];
  let moves = 0;

  for (let i = 0; i < nums.length; i++) {
    if (min > nums[i]) min = nums[i];
    
    moves += nums[i];  
  }

  return moves - min * nums.length;
};

console.log(minMoves([1,2,3])) // 3

/**
 * Approach #6 Modified Approach Using Maths
 * @param {number[]} nums
 * @return {number}
 */
minMoves = function(nums) {
  // To avoid integer overflow if the a[i]'s are very large
  let min = nums[0];
  let moves = 0;

  for (let i = 0; i < nums.length; i++) {
    if (min > nums[i]) min = nums[i];
  }
  
  for (let i = 0; i < nums.length; i++) {
    moves += (nums[i] - min);
  }
  
  return moves;
};

console.log(minMoves([1,2,3])) // 3