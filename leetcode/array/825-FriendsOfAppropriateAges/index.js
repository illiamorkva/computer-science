/**
825. Friends Of Appropriate Ages
https://leetcode.com/problems/friends-of-appropriate-ages/description/

Some people will make friend requests. The list of their ages is given and ages[i] is the age of the ith person. 

Person A will NOT friend request person B (B != A) if any of the following conditions are true:

age[B] <= 0.5 * age[A] + 7
age[B] > age[A]
age[B] > 100 && age[A] < 100
Otherwise, A will friend request B.

Note that if A requests B, B does not necessarily request A.  Also, people will not friend request themselves.

How many total friend requests are made?

Example 1:

Input: [16,16]
Output: 2
Explanation: 2 people friend request each other.

Example 2:

Input: [16,17,18]
Output: 2
Explanation: Friend requests are made 17 -> 16, 18 -> 17.

Example 3:

Input: [20,30,100,110,120]
Output: 
Explanation: Friend requests are made 110 -> 100, 120 -> 110, 120 -> 100.

Notes:

1 <= ages.length <= 20000.
1 <= ages[i] <= 120.
*/

/**
 * My Brute Force
 * 
 * Time Complexity.
 * O(n^2)
 * 
 * Space Complexity.
 * O(1)
 * 
 * @param {number[]} ages
 * @return {number}
 */
let numFriendRequests = function(ages) {
  // Time Limit Exceeded
  // 77 / 83 test cases passed.
  // 54 min
  
  let counter = 0;

  for (let i = 0; i < ages.length; i++) {
    for (let j = 0; j < ages.length; j++) {
      
      if (j !== i) {
        if (ages[i] <= 0.5 * ages[j] + 7 ||
            ages[i] > ages[j] ||
            ages[i] > 100 && ages[j] < 100
        ) {}
        else {
          counter++; 
        }
      }
      
    }
  }

  return counter;
};

/**
 * Approach #1: Counting
 * 
 * Time Complexity.
 * O(a^2 + n),
 * where n is the number of people and a is the number of ages.
 * 
 * Space Complexity.
 * O(a),
 * the space used to store count, where a is the number of ages.
 * 
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
  const countOfPeople = new Array(121).fill(0);
  let result = 0;
  
  for (let i = 0; i < ages.length; i++) {
    countOfPeople[ages[i]]++;
  }
  
  for (let ageA = 0; ageA < countOfPeople.length; ageA++) {
    let countAgeA = countOfPeople[ageA];
    
    for (let ageB = 0; ageB < countOfPeople.length; ageB++) {
      let countAgeB = countOfPeople[ageB];

      if (ageB <= 0.5 * ageA + 7 ||
          ageB > ageA ||
          ageB > 100 && ageA < 100) {
        continue;
      } else {
        result += countAgeA * countAgeB;

        if (ageA === ageB) {
          result -= countAgeA;
        }
      }
    }
  }
  
  return result;
};
