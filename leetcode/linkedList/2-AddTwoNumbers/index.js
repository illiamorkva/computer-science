/**
2. Add Two Numbers
https://leetcode.com/problems/add-two-numbers/description/

You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * My Approach
 * 
 * start 12:10, end 13:24
 * 1560 / 1562 test cases passed
 * 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function(l1, l2) {
  // 1. collect my first number from l1 by traverse all linked list and collect values of nodes - O(l1.length)
  // 2. collect my second number as well - O(l2.length)
  // 3. result number = first number add to second number - O(1)
  // 4. form result linked list with as result from result number - O(resultNumber.toString().length)
  // Time Complexity: linear - O(l1.length + l2.length + resultNumber.toString().length);

  // Debug:
  // input = (1 -> 2 -> 3) + (4) = 321 + 4 = 325
  // output = 5 -> 2 -> 3
  //

  let firstNumber = '';
  for (let x = l1; x !== null; x = x.next) { // (1 -> 2 -> 3)
    firstNumber = firstNumber + x.val; // '123'
  }
  firstNumber = parseInt(firstNumber.split('').reverse().join('')); // '321' -> 321

  let secondNumber = '';
  for (let x = l2; x !== null; x = x.next) { // (4)
    secondNumber = secondNumber + x.val; // '4' 
  }
  secondNumber = parseInt(secondNumber.split('').reverse().join('')); // '4' -> 4
  
  let resultNumber = firstNumber + secondNumber; // 321 + 4 = 325
  resultNumber = resultNumber.toString(); // '325' 
  
  const resultLinkedList = new LinkedList();
  for (let i = 0; i < resultNumber.length; i++) { // '325'
    const value = parseInt(resultNumber.charAt(i));// '3'

    resultLinkedList.addAtHead(value); // (5 -> 2 -> 3 -> null)
  }
  
  return resultLinkedList.head;
};

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  addAtHead(val) {
    const node = new ListNode(val);
    
    node.next = this.head;
    
    this.head = node;
  }
}

/**
 * Approach 1: Elementary Math
 * 
 * Time Complexity.
 * O(max(m, n)),
 * assume that m and n represents the length of l1 and l2 respectively,
 * the algorithm above iterates at most max(m, n) times.
 * 
 * Space Complexity.
 * O(max(m, n)),
 * the length of the new list is at most max(m, n) + 1.
 * 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
addTwoNumbers = function(l1, l2) {
  const dummyHead = new ListNode(0);

  let p = l1;
  let q = l2;

  let curr = dummyHead;
  
  let carry = 0;
  
  while (p !== null || q !== null) {
    let x = (p != null) ? p.val : 0;
    let y = (q != null) ? q.val : 0;
    
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);

    curr.next = new ListNode(Math.floor(sum % 10));
    curr = curr.next;
    
    if (p !== null) {
      p = p.next;
    }
    if (q !== null) {
      q = q.next;
    }
  }
  
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  
  return dummyHead.next;
};
