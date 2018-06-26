/**
13. Roman to Integer
https://leetcode.com/problems/roman-to-integer/description/

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together.
Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right.
However, the numeral for four is not IIII. Instead, the number four is written as IV.
Because the one is before the five we subtract it making four. The same principle applies to the number nine,
which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Examples:

Input: "III"
Output: 3
Example 2:

Input: "IV"
Output: 4
Example 3:

Input: "IX"
Output: 9
Example 4:

Input: "LVIII"
Output: 58
Explanation: C = 100, L = 50, XXX = 30 and III = 3.
Example 5:

Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

/**
 * My Approach
 * 
 * start 15:51, end ~16:30
 * 2991 / 3999 test cases passed
 * 
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  // 1. create HashMap of Symbol-Value pairs 
  // 2. go throw characters of s
  // 3. apply and check for several rules by if statements (six instances where subtraction is used)
  //  count sum of 
  //  if  currEl this and prevEl this then or ...... { add subtraction of this two elements}
  //  or {(get for two characters their values)}
  //  
  //  time comp = best/average O(s.length), worst O(s.length^2) 
  //  space comp = O(1) // 7 symbols
  
  const hashMap = new HashMap();
  hashMap.put('I', 1);
  hashMap.put('V', 5);
  hashMap.put('X', 10);
  hashMap.put('L', 50);
  hashMap.put('C', 100);
  hashMap.put('D', 500);
  hashMap.put('M', 1000);
  
  let resultInt = 0;

  for (let i = 1; i < s.length; i += 2) {
    if (s.charAt(i) === 'V' && s.charAt(i - 1) === 'I' ||
        s.charAt(i) === 'L' && s.charAt(i - 1) === 'X' ||
        s.charAt(i) === 'D' && s.charAt(i - 1) === 'C' ||
        s.charAt(i) === 'X' && s.charAt(i - 1) === 'I' ||
        s.charAt(i) === 'C' && s.charAt(i - 1) === 'X' ||
        s.charAt(i) === 'M' && s.charAt(i - 1) === 'C') {
      resultInt += hashMap.get(s.charAt(i)) - hashMap.get(s.charAt(i - 1));
    } else {
      resultInt += hashMap.get(s.charAt(i)) + hashMap.get(s.charAt(i - 1));
    }
  }
  if (s.length % 2) {
    resultInt += hashMap.get(s.charAt(s.length - 1));
  }
  
  return resultInt;
};

/**
 * Accepted Approach
 * 
 * Time Complexity.
 * Best/Average/Worst:
 * O(s.length),
 * HashMap has constant symbols (7),
 * so lookup (get) is done in constant time in the worst case.
 * 
 * Space Complexity.
 * O(1),
 * HashMap has constant symbols (7).
 * 
 * @param {string} s
 * @return {number}
 */
romanToInt = function(s) {
  const hashMap = new HashMap();
  hashMap.put('I', 1);
  hashMap.put('V', 5);
  hashMap.put('X', 10);
  hashMap.put('L', 50);
  hashMap.put('C', 100);
  hashMap.put('D', 500);
  hashMap.put('M', 1000);
  
  let result = 0;
  
  let i = 0, j = 1;
  for (; j < s.length; i++, j++) {
    if (hashMap.get(s.charAt(i)) >= hashMap.get(s.charAt(j))) {
      result += hashMap.get(s.charAt(i));
    } else {
      result -= hashMap.get(s.charAt(i));
    }
  }
  
  result += hashMap.get(s.charAt(i));
  
  return result;
};
