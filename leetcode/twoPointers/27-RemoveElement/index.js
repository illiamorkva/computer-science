/**
27. Remove Element
https://leetcode.com/problems/remove-element/description/

Given an array nums and a value val, remove all instances of that
value in-place and return the new length.

Do not allocate extra space for another array, you must do this by
modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you
leave beyond the new length.

Example 1:

Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements
of nums being 2.

It doesn't matter what you leave beyond the returned length.

Example 2:

Given nums = [0,1,2,2,3,0,4,2], val = 2,

Your function should return length = 5, with the first five elements
of nums containing 0, 1, 3, 0, and 4.

Note that the order of those five elements can be arbitrary.

It doesn't matter what values are set beyond the returned length.

Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means modification
to the input array will be known to the caller as well.

Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeElement(nums, val);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}

*/

/**
 * My Brute Force
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = function(nums, val) {
  if (nums.length == 0) return [];
  
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] == val) {
      nums.splice(i, 1);
    }
  }
  
  return nums.length;
};

console.log(removeElement([3, 2, 2, 3], 3)) // 2

/**
 * Approach #1 Two Pointers
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
removeElement = function(nums, val) {
  let i = 0;
  
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != val) {
      nums[i] = nums[j];
      
      i++;
    }
  }
  
  return i;
};

console.log(removeElement([3, 2, 2, 3], 3)) // 2

/**
 * Approach #2 Two Pointers - when elements to remove are rare
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
removeElement = function(nums, val) {
  let i = 0;
  let n = nums.length;

  while (i < n) {
    if (nums[i] == val) {
      nums[i] = nums[n - 1];

      n--;
    } else {
      i++;
    }
  }

  return n;
};

console.log(removeElement([3, 2, 2, 3], 3)) // 2