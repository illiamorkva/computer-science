/**
21. Merge Two Sorted Lists
https://leetcode.com/problems/merge-two-sorted-lists/description/

Merge two sorted linked lists and return it as a new list.
The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Approach #2 Iteration
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let mergeTwoLists = function(l1, l2) {
  let prehead = new ListNode();
  
  let prev = prehead;
  
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    
    prev = prev.next;
  }
  
  prev.next = (l1 == null) ? l2 : l1;
  
  return prehead.next;
};
