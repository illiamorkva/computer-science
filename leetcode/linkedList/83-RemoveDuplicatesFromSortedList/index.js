/**
83. Remove Duplicates from Sorted List
https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * My Straight-Forward Approach
 * @param {ListNode} head
 * @return {ListNode}
 */
let deleteDuplicates = function(head) {
  let tail = head;
  
  while (tail != null) {
    if (tail.next && tail.next.val == tail.val) {
      
      if (!tail.next.next) {
        tail.next = tail.next.next;
      } else {
        tail.next.val = tail.next.next.val;
        tail.next.next = tail.next.next.next;
      }
    
    } else {
      tail = tail.next;
    }
  }
  
  return head;
};

/**
 * Straight-Forward Approach
 * @param {ListNode} head
 * @return {ListNode}
 */
deleteDuplicates = function(head) {
  let current = head;
  
  while (current != null && current.next != null) {
    if (current.val == current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  
  return head;
};
