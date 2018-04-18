/**
657. Judge Route Circle
https://leetcode.com/problems/judge-route-circle/description/

Initially, there is a Robot at position (0, 0). Given a sequence of its moves,
judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character.
The valid robot moves are R (Right), L (Left), U (Up) and D (down).
The output should be true or false representing whether the robot makes a circle.

Example 1:

Input: "UD"
Output: true

Example 2:

Input: "LL"
Output: false
*/

/**
 * Approach #1: Simulation
 * @param {string} moves
 * @return {boolean}
 */
let judgeCircle = function(moves) {
  let leftRight = 0;
  let upDown = 0;
  
  for (let i = 0; i < moves.length; i++) {
      switch (moves.charAt(i)) {
          case 'U':
              upDown++;
              break;
          case 'D':
              upDown--;
              break;
          case 'L':
              leftRight++;
              break;
          case 'R':
              leftRight--;
              break;
          default: throw new Error('invalid move (character)');
      }
  }
  
  if (leftRight == 0 && upDown == 0) return true;

  return false;
};

console.log(judgeCircle('UDLR')) // true