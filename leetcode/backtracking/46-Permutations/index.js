/**
46. Permutations
https://leetcode.com/problems/permutations/description/

Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/**
 * My Backtracking
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = function(nums) {
  const result = [];
  
  helper(nums, []);
  
  return result;

  function helper(nums, chosen) {
    if (nums.length == 0) {
      //base case

      result.push([...chosen]);
    } else {
      //recursive case + backtracking

      for (let i = 0; i < nums.length; i++) {
        //choose
        let current = nums.splice(i , 1)[0];
        chosen.push(current);
        
        //explore
        helper(nums, chosen);
        
        //unchoose
        nums.splice(i, 0, current);
        chosen.pop();
      }
    }
  }
};

/**
 * Another example of backtracking
 * @param {number[]} nums
 * @return {number[][]}
 */
permute = function(nums) {
  const result = [];
  
  helper(result, nums, []);
  
  return result;

};

function helper(result, nums, chosen) {
  if (chosen.length == nums.length) {
    // base case
    
    result.push([...chosen]);
  } else {
    // recursive case + backtracking
    
    for (let i = 0; i < nums.length; i++) {
      if (chosen.indexOf(nums[i]) === -1) {
        // choose
        chosen.push(nums[i]);

        // explore
        helper(result, nums, chosen);

        // unchoose
        chosen.pop();
      }
    }
  }
}