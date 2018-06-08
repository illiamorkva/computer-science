// https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/SequentialSearchST.java.html

/**
 * A symbol table implements the <em>associative array</em> abstraction:
 * when associating a value with a key that is already in the symbol table,
 * the convention is to replace the old value with the new value.
 * The class also uses the convention that values cannot be {@code null}. Setting the
 * value associated with a key to {@code null} is equivalent to deleting the key
 * from the symbol table.
 * This implementation uses a singly-linked list and sequential search.
 * 
 * Time Complexity.
 * The put and delete operations take linear time;
 * The get and contains operations takes linear time in the worst case.
 * The size, and isEmpty operations take constant time.
 * Construction takes constant time.
 * 
 */
class SequentialSearchST {
  constructor() {
    this._n = null; // number of key-value pairs
    this._first = null; // the linked list of key-value pairs
  }

  /**
   * Returns the number of key-value pairs in this symbol table.
   * 
   * @returns {number} the number of key-value pairs in this symbol table
   */
  size() {
    return this._n;
  }

  /**
   * Returns true if this symbol table is empty.
   * 
   * @returns {boolean}
   */
  isEmpty() {
    return this.size() == 0;  
  }

  /**
   * Returns true if this symbol table contains the specified key.
   * 
   * @param {Key} key 
   * @returns {boolean}
   */
  contains(key) {
    if (key == null) {
      throw new Error('argument to contains() is null');
    }

    return this.get(key) != null;
  }

  /**
   * Returns the value associated with the given key in this symbol table.
   * 
   * @param {Key} key
   */
  get(key) {
    if (key == null) {
      throw new Error('argument to get() is null')
    }

    for (let x = this._first; x != null; x = x._next) {
      if (key === x._key) { // TODO: key.equals(x.key)
        return x._val;
      }
    }

    return null;
  }

  /**
   * Inserts the specified key-value pair into the symbol table, overwriting the old 
   * value with the new value if the symbol table already contains the specified key.
   * Deletes the specified key (and its associated value) from this symbol table
   * if the specified value is {@code null}.
   * 
   * @param {Key} key 
   * @param {Value} val 
   */
  put(key, val) {
    if (key == null) {
      throw new Error('first argument to put() is null');
    }
    if (val == null) {
      this.delete(key);
      return;
    }

    for (let x = this._first; x != null; x = x._next) {
      if (key === x._key) { // TODO: key.equals(x.key)
        x._val = val;
        return;
      }
    }

    this._first = new Node(key, val, this._first);
    this._n++;
  }

  /**
   * Removes the specified key and its associated value from this symbol table 
   * (if the key is in this symbol table). 
   * 
   * @param {Key} key 
   */
  delete(key) {
    if (key == null) {
      throw new Error('argument to delete() is null');
    }
    this._first = this._delete(this._first, key);
  }

  /**
   * Delete key in linked list beginning at Node x.
   * Warning: function call stack too large if table is large.
   * 
   * @param {Node} x 
   * @param {Key} key 
   */
  _delete(x, key) {
    if (x === null) {
      // base case
      return null;
    }
    if (key === x._key) { // TODO: key.equals(x.key)
      // base case
      this._n--;
      return x._next;
    }

    // recursive case
    x._next = this._delete(x._next, key);

    // base case
    return x;
  }

  /**
   * Returns all keys in the symbol table as an array.
   * 
   * @returns {Array}
   */
  keys() {
    const array = new Array();

    for (let x = this._first; x != null; x = x._next) {
      array.push(x._key);  
    }

    return array;
  }
}

/**
 * A helper linked list data type
 */
class Node {
  /**
   * 
   * @param {Key} key 
   * @param {Value} val 
   * @param {Node} next 
   */
  constructor(key, val, next) {
    this._key = key;
    this._val = val;
    this._next = next;
  }
}
