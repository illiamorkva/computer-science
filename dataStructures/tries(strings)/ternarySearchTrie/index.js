class Node {
  constructor() {
    this._val = null; // a value
    this._c = null; // a character c

    this._left = null; // a reference to a left TST 
    this._mid = null; // a reference to a middle TST
    this._right = null; // a reference to a right TST
  }
}

/**
 * TST trie.
 * 
 * Space complexity. O(4 * N), where N is number of strings.
 * TST is as fast as hashing (for string keys), space efficient.
 * 
 * Remark. Can build balanced TSTs via rotations to achieve O(L + log N)
 * worst-case guarantees.
 * 
 */
class TST {
  constructor() {
    this._root;
  }

  /**
   * Time complexity.
   * Insert. O(L + ln N), where L is length of string and N is number of strings.
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
    const c = key.charAt(d);

    if (x == null) {
      x = new Node();
      x._c = c;
    }

    if (c < x._c) {
      // recursive case

      x._left = this._put(x._left, key, val, d);
    } else if (c > x._c) {
      // recursive case

      x._right = this._put(x._right, key, val, d);
    } else if (d < key.length - 1) {
      // recusrive case

      x._mid = this._put(x._mid, key, val, d + 1);
    } else {
      // base case

      x._val = val;
    }

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
   * Search hit. O(L + ln N), where L is length of string and N is number of strings.
   * Search miss. O(ln N), where N is number of strings.
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

  _get(x, key, d) {
    if (x == null) {
      // base case

      return null;
    }

    const c = key.charAt(d);

    if (c < x._c) {
      // recursive case

      return this._get(x._left, key, d);
    } else if (c > x._c) {
      // recursive case

      return this._get(x._right, key, d);
    } else if (d < key.length - 1) {
      // recusrive case

      return this._get(x._mid, key, d + 1);
    } else {
      // base case

      return x;
    }
  }
}
