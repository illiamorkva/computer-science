/**
278. First Bad Version
https://leetcode.com/problems/first-bad-version/description/

You are a product manager and currently leading a team to develop a new product.
Unfortunately, the latest version of your product fails the quality check.
Since each version is developed based on the previous version, all the versions after 
a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one,
which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which will return whether version is bad.
Implement a function to find the first bad version. You should minimize the number of calls to the API.

*/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * My Binary Search
 * @param {function} isBadVersion()
 * @return {function}
 */
let solution = function(isBadVersion) {  
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    
    const search = (l, h) => {
      if (l > h) return -1;
      
      let mid = parseInt(l + (h - l) / 2);
      
      if (isBadVersion(mid) && mid == 1) return mid;
      if (isBadVersion(mid) && !isBadVersion(mid - 1)) return mid;
      
      if (isBadVersion(mid) && isBadVersion(mid - 1)) return search(l, mid - 1);
      if (!isBadVersion(mid)) return search(mid + 1, h);
    }

    let l = 1;
    let h = n;
  
    return search(l, h);
  };
};

/**
 * Approach #2 Binary Search
 * @param {function} isBadVersion()
 * @return {function}
 */
solution = function(isBadVersion) {  
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let left = 1;
    let right = n;
    
    while (left < right) {
      let mid = parseInt(left + (right - left) / 2);
      
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};
