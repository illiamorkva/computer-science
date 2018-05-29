class Node {
  constructor(R) {
    this._val = null;
    this._next = new Array(R);
  }
}

/**
 * R-way trie.
 * 
 * Space complexity. O((R + 1) * N), where R is radix and N is number of strings.
 * 1. Method of choice for small R.
 * 2. Too much memory for large R.
 * 
 */
class TrieST {
  constructor() {
    this._R = 256; // extended ASCII
    this._root = new Node(this._R);
  }

  /**
   * Time complexity.
   * Insert. O(L), where L is length of string.
   * 
   * @param {string} key 
   * @param {value} val 
   * @returns {void}
   */
  put(key, val) {
    this._root = this._put(this._root, key, val, 0);
  }

  /**
   * @param {Node} x 
   * @param {string} key 
   * @param {value} val 
   * @param {int} d 
   * @returns {Node}
   */
  _put(x, key, val, d) {
    if (x == null) {
      x = new Node(this._R);
    }
    if (d == key.length) {
      // base case

      x._val = val;

      return x;
    }

    // recursive case

    const c = key.charAt(d);
    x._next[c] = this._put(x._next[c], key, val, d + 1);

    return x;
  }

  /**
   * @param {string} key 
   * @returns {boolean}
   */
  contains(key) {
    return this.get(key) != null;
  }

  /**
   * Time Complexity.
   * Search hit. O(L), where L is length of string.
   * Search miss. O(logR N), where R is radix and N is number of strings
   * 
   * @param {string} key
   * @returns {value}
   */
  get(key) {
    const x = this._get(this._root, key, 0);
    
    if (x == null) {
      return null;
    }

    return x._val;
  }

  /**
   * @param {Node} x 
   * @param {string} key 
   * @param {int} d 
   * @returns {Node}
   */
  _get(x, key, d) {
    if (x == null) {
      return null;
    }
    if (d == key.length) {
      return x;
    }

    const c = key.charAt(d);
    return this._get(x._next[c], key, d + 1);
  }

  /**
   * @param {string} key 
   */
  delete(key) {}
}
