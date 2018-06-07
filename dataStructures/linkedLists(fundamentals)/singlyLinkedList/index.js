// good resource to learn with summary - https://leetcode.com/explore/learn/card/linked-list/
// https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/SequentialSearchST.java.html

class Node {
  /**
   * @param {number} value 
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Time complexity.
 * It takes us O(N) time on average to visit an element by index, where N is the length of the linked list.
 * You can insert a new node into a linked list in O(1) time complexity.
 * The time complexity of deleting a node will be O(N).
 */
class SinglyLinkedList {
  constructor() {
    this._head = null;
  }

  // Traverse the linked list to get element by index.

  /**
   * Get the value of the index-th node in the linked list.
   * If the index is invalid, return -1.
   * 
   * @param {number} index
   * @returns {number}
   */
  get(index) {
    const cur = this._getNode(index);

    return cur == null ? -1 : cur.value;
  }

  /**
   * Helper function to return the index-th node in the linked list.
   * 
   * @param {number} index
   * @returns {Node}
   */
  _getNode(index) {
    let cur = this._head;
    
    for (let i = 0; i < index && cur != null; ++i) {
      cur = cur.next;
    }

    return cur;
  }

  /**
   * Helper function to return the last node in the linked list.
   * 
   * @returns {Node}
   */
  _getTail() {
    let cur = this._head;

    while (cur != null && cur.next != null) {
      cur = cur.next;
    }

    return cur;
  }

  // Add a new node.

  /**
   * Add a node of value val before the first element
   * of the linked list. After the insertion,
   * the new node will be the first node of the linked list.
   * 
   * @param {number} value 
   */
  addAtHead(value) {
    const cur = new Node(value);

    cur.next = this._head;
    
    this._head = cur;
  }

  /**
   * Append a node of value to the last element of the linked list.
   * 
   * @param {number} value 
   */
  addAtTail(value) {
    if (this._head == null) {
      this.addAtHead(value);
      
      return;
    }
    const prev = this._getTail();
    const cur = new Node(value);

    prev.next = cur;
  }

  /**
   * Add a node of value before the index-th
   * node in the linked list. If index equals to
   * the length of linked list, the node will be appended
   * to the end of linked list. If index is greater than the length,
   * the node will not be inserted.
   * 
   * @param {number} index 
   * @param {number} value 
   */
  addAtIndex(index, value) {
    if (index == 0) {
      this.addAtHead(value);
      
      return;
    }
    // Time complexity. It takes O(N) time to get a node by index, where N is the length of the linked list. 
    const prev = this._getNode(index - 1);

    if (prev == null) {
      return;
    }

    const cur = new Node(value);
    const next = prev.next;

    cur.next = next;
    prev.next = cur;
  }

  // Delete a node.

  /**
   * Delete the index-th node in the linked list, if the index is valid.
   * 
   * Time complexity. Similar to the add operation, it takes O(N) time to get
   * the node by the index which is different from deleting a given node.
   * However, even if we already get the node we want to delete,
   * we still have to traverse to get its previous node.
   * 
   * @param {number} index
   * @returns {void}
   */
  deleteAtIndex(index) {
    const cur = this._getNode(index);

    if (cur == null) {
      return;
    }

    const prev = this._getNode(index - 1);
    const next = cur.next;

    if (prev != null) {
      prev.next = next;
    } else {
      // modify head when deleting the first node.
      this._head = next;
    }
  }
}

// sample client: https://leetcode.com/explore/learn/card/linked-list/209/singly-linked-list/1290/
