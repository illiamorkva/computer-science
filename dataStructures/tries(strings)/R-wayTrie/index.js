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
   * Search miss. O(logR N), where R is radix and N is number of strings.
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

  /**
   * All keys.
   * To iterate through all keys in sorted order:
   * 1. Do inorder traversal of trie; add keys encountered to a queue.
   * 2. Maintain sequence of characters on path from root to node.
   * 
   * @returns {Iterable<string>}
   */
  keys() {
    const queue = new Queue();

    this._collect(this._root, "", queue);

    return queue;
  }

  /**
   * @param {Node} x 
   * @param {string} prefix Sequence of characters on path from root to x.
   * @param {Queue<string>} q 
   */
  _collect(x, prefix, q) {
    if (x == null) {
      // base case

      return;
    }

    if (x._val != null) {
      q.enqueue(prefix);
    }

    for (let c = 0; c < this._R; c++) {
      // recursive case

      this._collect(x._next[c], prefix + c, q);
    }
  }

  /**
   * Keys having prefix as a prefix.
   * Find all keys in a symbol table starting
   * with a given prefix.
   * 
   * @param {string} prefix
   * @returns {Iterable<string>}
   */
  keysWithPrefix(prefix) {
    const queue = new Queue();

    // root of subtrie for all strings
    // beginning with given prefix
    const x = this._get(this._root, prefix, 0);

    this._collect(x, prefix, queue);

    return queue;
  }

  /**
   * Longest key that is a prefix of query.
   * Find longest key in symbol table that is a prefix
   * of query string.
   * 1. Search for query string.
   * 2. Keep track of longest key encountered.
   * 
   * Note. Not the same as floor().
   * 
   * @param {string} query
   * @returns {string}
   */
  longestPrefixOf(query) {
    let length = this._search(this._root, query, 0, 0);
    
    return query.substring(0, length);
  }

  /**
   * @param {Node} x 
   * @param {string} query 
   * @param {int} d 
   * @param {int} length 
   * @returns {int}
   */
  _search(x, query, d, length) {
    if (x == null) {
      // base case

      return length;
    }
    
    if (x._val != null) {
      length = d;
    }
    
    if (d == query.length) {
      // base case

      return length;
    }
    // recursive case

    const c = query.charAt(d);

    return this._search(x._next[c], query, d + 1, length);
  }
}
