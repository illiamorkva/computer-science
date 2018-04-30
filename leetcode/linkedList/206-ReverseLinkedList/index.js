/**
206. Reverse Linked List
https://leetcode.com/problems/reverse-linked-list/description/

Reverse a singly linked list.

Hint:
A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * My Approach #1 Iterative
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseList = function(head) {
  if (head == null) return head;

  let prev = null;
  let next = null;
  let current = null;
  
  current = head;

  while (current.next != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  
  current.next = prev;
  
  head = current;
  
  return head;
};
