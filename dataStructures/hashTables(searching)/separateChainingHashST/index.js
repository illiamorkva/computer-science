// https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/SeparateChainingHashST.java.html

/**
 * The {@code SeparateChainingHashST} class represents a symbol table of generic 
 * key-value pairs (Hash Map).
 * A symbol table implements the associative array abstraction:
 * when associating a value with a key that is already in the symbol table,
 * the convention is to replace the old value with the new value.
 * This class uses the convention that
 * values cannot be {@code null}—setting the
 * value associated with a key to {@code null} is equivalent to deleting the key
 * from the symbol table.
 * This implementation uses a separate chaining hash table.
 * It requires that the key type overrides the {@code equals()} and {@code hashCode()} methods.
 * 
 * Time Complexity.
 * The expected time per put, contains, or remove
 * operation is constant, subject to the uniform hashing assumption.
 * The size, and isEmpty operations take constant time.
 * Construction takes constant time.
 */
class SeparateChainingHashST {
  constructor(m) {
    this._INIT_CAPACITY = 4;
    this._n = 0; // number of key-value pairs
    this._m = m || 20; // hash table size
    this._st = new Array(this._m) // array of linked-list symbol tables (SequentialSearchST)

    for (let i = 0; i < this._m; i++) {
      this._st[i] = new SequentialSearchST();
    }
  }

  /**
   * Resize the hash table to have the given number of chains,
   * rehashing all of the keys.
   * @param {number} chains 
   */
  _resize(chains) {
    const temp = new SeparateChainingHashST(chains);

    for (let i = 0; i < this._m; i++) {
      this._st[i].keys().forEach(key =>
        temp.put(key, this._st[i].get(key))
      );
    }

    this._m = temp._m;
    this._n = temp._n;
    this._st = temp._st;
  }

  /**
   * Hash value between 0 and m-1.
   *
   * @param {Key} key 
   */
  _hash(key) {
    return Math.floor(this._hashCodeOfString(key) % this._m); // (key.hashCode() & 0x7fffffff) % this._m;
  }

  _hashCodeOfString(s) {
    // https://gist.github.com/hyamamoto/fd435505d29ebfa3d9716fd2be8d42f0
    let h = 0, l = s.length, i = 0;

    if ( l > 0 ) {
      while (i < l) {
        h = (h << 5) - h + s.charCodeAt(i++) | 0;
      }
    }

    return h;
  };

  /**
   * Returns the number of key-value pairs in this symbol table.
   */
  size() {
    return this._n;
  }

  /**
   * Returns true if this symbol table is empty.
   */
  isEmpty() {
    return this.size() === 0;
  }


  /**
   * Returns true if this symbol table contains the specified key.
   * 
   * @param {Key} key 
   */
  contains(key) {
    if (key == null) {
      throw new Error('argument to contains() is null');
    }
    return this.get(key) != null;
  }

  /**
   * Returns the value associated with the specified key in this symbol table.
   * 
   * @param {Key} key 
   */
  get(key) {
    if (key == null) {
      throw new Error('argument to get() is null');
    }

    let i = this._hash(key);

    return this._st[i].get(key);
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

    // double table size if average length of list >= 10
    if (this._n >= 10 * this._m) {
      this._resize(2 * this._m);
    }

    let i = this._hash(key);
    if (!this._st[i].contains(key)) {
      this._n++;
    }

    this._st[i].put(key, val);
  }

  delete(key) {
    if (key == null) {
      throw new Error('argument to delete() is null');
    }

    let i = this._hash(key);

    if (this._st[i].contains(key)) {
      this._n--;
    }

    this._st[i].delete(key);

    // halve table size if average length of list <= 2
    if (this._m > this._INIT_CAPACITY && this._n <= 2 * this._m) {
      this._resize(this._m / 2);
    }
  }

  /**
   * Return keys in symbol table as an array.
   */
  keys() {
    const array = new Array();

    for (let i = 0; i < this._m; i++) {
      this._st[i].keys().forEach(key =>
        array.push(key)
      );
    }

    return array;
  }
}
