/**
784. Letter Case Permutation
https://leetcode.com/problems/letter-case-permutation/description/

Given a string S, we can transform every letter individually to be lowercase
or uppercase to create another string.  Return a list of all possible strings we could create.

Examples:
Input: S = "a1b2"
Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

Input: S = "3z4"
Output: ["3z4", "3Z4"]

Input: S = "12345"
Output: ["12345"]

Note:

S will be a string with length at most 12.
S will consist only of letters or digits.

*/

/**
 * Approach #1: Recursion
 * 
 * Time Complexity. ?
 * O(2^N),
 * where N is the length of string
 * 
 * Space Complexity. ?
 * O(2^N)
 * 
 * @param {string} S
 * @return {string[]}
 */
const letterCasePermutation = function(S) {
  // debug: '12Ba'
  //
  // output: ['12Ba', '12ba', '12BA', '12bA']
  
  const result = [];
  
  helper(S, 0, '', result);
  
  return result;
};

/*
                                                '12Ba'

                                          word:         ''
                                                      /
                                                    '1'
                                                    /       
                                                  '12'
                                           /                  \
                                        '12b'               '12B'
                                        /   \               /     \
                                      '12ba' '12bA'      '12Ba'   '12BA'
*/

// result = ['12ba', '12bA', '12Ba', '12BA']

//                  3      '12B'     []
function helper(S, index, word, result) { 
  if (word.length === S.length) {
    // base case

    result.push(word);
    return;    
  }
  //recursive case
  
  helper(S, index + 1, word + S.charAt(index).toLowerCase(), result);
  
  if (/[A-Za-z]/.test(S.charAt(index))) {
    helper(S, index + 1, word + S.charAt(index).toUpperCase(), result);
  }
}
