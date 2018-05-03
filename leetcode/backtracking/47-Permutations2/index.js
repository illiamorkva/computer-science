/**
47. Permutations II
https://leetcode.com/problems/permutations-ii/description/

Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
*/

/**
 * My Backtracking #1
 * @param {number[]} nums
 * @return {number[][]}
 */
let permuteUnique = function(nums) {

  const result = [];
  const chosen = [];

  helper(nums, chosen, result);
  
  return result;
};

function helper(nums, chosen, result) {
  if (nums.length == 0) {
    // base case

    const resultStr = JSON.stringify(result);
    const chosenStr = JSON.stringify(chosen);    

    // if result does not contain chosen
    if (resultStr.indexOf(chosenStr) == -1) {
      result.push([...chosen]);
    }

  } else {
    // recoursive case + backtracking

    for (let i = 0; i < nums.length; i++) {
        //choose
        let current = nums.splice(i , 1)[0];
        chosen.push(current);
        
        //explore
        helper(nums, chosen, result);
        
        //unchoose
        nums.splice(i, 0, current);
        chosen.pop();
      }
  }
}

/**
 * My Backtracking #2
 * @param {number[]} nums
 * @return {number[][]}
 */
permuteUnique = function(nums) {

  const result = [];
  const visitedNumbers = [];
  const chosen = [];

  helper(nums, chosen, visitedNumbers, result);
  
  return result;
};

function helper(nums, chosen, visitedNumbers, result) {
  if (nums.length == chosen.length) {
    // base case

    const resultStr = JSON.stringify(result);
    const chosenStr = JSON.stringify(chosen);    
    
    // if result does not contain chosen
    if (resultStr.indexOf(chosenStr) == -1) {
      result.push([...chosen]);
    }

  } else {
    // recoursive case + backtracking

    for (let i = 0; i < nums.length; i++) {
      if (!visitedNumbers[i]) {
        // choose
        chosen.push(nums[i]);
        visitedNumbers[i] = true;
        
        // explore
        helper(nums, chosen, visitedNumbers, result);
        
        //unchoose
        chosen.pop();
        visitedNumbers[i] = false;
      }
    }
  }
}

/**
 * Another example of backtracking
 * @param {number[]} nums
 * @return {number[][]}
 */
permuteUnique = function(nums) {

  const result = [];
  const visitedNumbers = [];
  const chosen = [];

  nums.sort((a, b) => a - b);

  helper(nums, chosen, visitedNumbers, result);
  
  return result;
};

function helper(nums, chosen, visitedNumbers, result) {
  if (nums.length == chosen.length) {
    // base case

    result.push([...chosen]);
  } else {
    // recoursive case + backtracking

    for (let i = 0; i < nums.length; i++) {

      if (visitedNumbers[i] || 
          i > 0 && nums[i] == nums[i - 1] && !visitedNumbers[i - 1]
      ) {
        continue;
      }

      // choose
      chosen.push(nums[i]);
      visitedNumbers[i] = true;
        
      // explore
      helper(nums, chosen, visitedNumbers, result);
        
      //unchoose
      chosen.pop();
      visitedNumbers[i] = false;
    }
  }
}
