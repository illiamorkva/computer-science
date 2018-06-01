// good resource to learn with summary - https://leetcode.com/explore/learn/card/linked-list/

class Node {
  constructor(value) {
    this.value = value;

    this.next = null;
    this.prev = null;
  }
}

/**
 * Delete Operation.
 * Since we no longer need to traverse the linked list
 * to get the previous node, both the time and space complexity are O(1).
 * 
 */
class DoublyLinkedList {
  constructor() {
    this._head = null;
  }

  // Traverse the linked list to get element by index.

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

  // Add a new node.
  // Similar to the singly linked list, it takes O(N) time to get
  // a node by index, where N is the length of the linked list.
  // It is different from adding a new node after a given node.

  /**
   * Add a node of value before the first element of the linked list.
   * After the insertion, the new node will be the first node of the linked list.
   * 
   * @param {number} value 
   * @returns {void}
   */
  addAtHead(value) {
    const cur = new Node(value);

    cur.next = this._head;

    if (this._head != null) {
      this._head.prev = cur;
    }

    this._head = cur;
  }

  /**
   * Append a node of value to the last element of the linked list.
   * 
   * @param {number} value
   * @returns {void}
   */
  addAtTail(value) {
    if (this._head == null) {
      this.addAtHead(value);
      return;
    }

    const prev = this._getTail();
    const cur = new Node(value);

    prev.next = cur;
    cur.prev = prev;
  }

  /**
   * Add a node of value before the index-th node in the linked list.
   * If index equals to the length of linked list,
   * the node will be appended to the end of linked list.
   * If index is greater than the length, the node will not be inserted.
   * 
   * @param {number} index 
   * @param {number} value
   * @returns {void}
   */
  addAtIndex(index, value) {
    if (index == 0) {
      this.addAtHead(value);
      return;
    }
    
    const prev = this._getNode(index - 1);
    if (prev == null) {
      return;
    }

    const cur = new Node(value);
    const next = prev.next;

    cur.prev = prev;
    cur.next = next;

    prev.next = cur;
    if (next != null) {
      next.prev = cur;
    }
  }

  // Delete a node.
  // Similar to the add operation, it takes O(N) time to get
  // the node by the index which is different from deleting a given node.
  // However, it is different to the singly linked list. When we get the node
  // we want to delete, we don't need to traverse to get its previous node
  // but using the "prev" field instead.

  /**
   * 
   * @param {number} index 
   */
  deleteAtIndex(index) {
    const cur = this._getNode(index);
    if (cur == null) {
      return;
    }

    const prev = cur.prev;
    const next = cur.next;

    if (prev != null) {
      prev.next = next;
    } else {
      // modify head when deleting the first node.
      this._head = next;
    }

    if (next != null) {
      next.prev = prev;
    }
  }
}

// sample client: https://leetcode.com/explore/learn/card/linked-list/210/doubly-linked-list/1294/
