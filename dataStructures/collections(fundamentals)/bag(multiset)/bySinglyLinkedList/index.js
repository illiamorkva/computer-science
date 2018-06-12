class Node {
  constructor() {
    this._item = null;
    this._next = null;
  }
}

/**
 * Time Complexity.
 * The add, isEmpty, and size operations take constant time.
 * Iteration takes time proportional to the number of items.
 */
class LinkedBag {
  constructor() {
    this._first = null; // beginning of bag
    this._n = 0; // number of elements in bag
  }

  /**
   * Is this bag empty?
   */
  isEmpty() {
    return this._first == null;
  }

  /**
   * Returns the number of items in this bag.
   */
  size() {
    return this._n;
  }

  /**
   * Adds the item to this bag.
   * 
   * @param {Item} item 
   */
  add(item) {
    const oldFirst = this._first;
    
    this._first = new Node();
    this._first._item = item;
    this._first._next = oldFirst;

    this._n++;
  }

  /**
   * Returns items in the bag as an array.
   */
  entries() {
    const array = new Array();

    for (let x = this._first; x != null; x = x._next) {
      array.push(x._item);
    }

    return array;
  }
}
