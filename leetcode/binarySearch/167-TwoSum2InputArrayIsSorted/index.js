/**
167. Two Sum II - Input array is sorted
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

Given an array of integers that is already sorted in ascending order,
find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they
add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.

Example:

Input: numbers = [2, 7, 11, 15], target = 9
Output: [1,2]

Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
*/

/**
 * My Binary Search
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let a = numbers[i];
    let b = target - a;
   
    let indexOfB = BS(numbers, i + 1, numbers.length - 1, b);
    
    if (indexOfB != -1) {
      return [i + 1, indexOfB + 1];
    }
  }  

  return -1;
};

function BS(arr, l, h, el) {
  if (l > h) return -1;
  let mid = parseInt(l + (h - l) / 2);
  
  if (arr[mid] == el) return mid;
  if (arr[mid] > el) return BS(arr, l, mid - 1, el);
  if (arr[mid] < el) return BS(arr, mid + 1, h, el);
}

console.log(twoSum([2, 7, 11, 15], 9)) // [1, 2]
