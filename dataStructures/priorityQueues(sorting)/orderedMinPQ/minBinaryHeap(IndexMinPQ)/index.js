// https://en.wikipedia.org/wiki/Heap_(data_structure)
// https://algs4.cs.princeton.edu/24pq/

/**
 *
 * This implementation uses a binary heap along with an array to associate
 * keys with integers in the given range.
 * The insert, delete-the-minimum, delete,
 * change-key, decrease-key, and increase-key
 * operations take logarithmic time.
 * The is-empty, size, min-index, min-key,
 * and key-of operations take constant time.
 * Construction takes time proportional to the specified capacity.
 * <p>
 */
class IndexMinPQ {
  constructor(maxN) {
    if (maxN < 0) {
      throw new Error('IllegalArgumentException');
    }
    // maximum number of elements on PQ
    this._maxN = maxN;
    // number of elements on PQ
    this._n = 0;
    // binary heap using 1-based indexing
    this._pq = new Array(this._maxN + 1);
    // inverse of pq - qp[pq[i]] = pq[qp[i]] = i
    this._qp = new Array(this._maxN + 1); // make this of length maxN??
    // keys[i] = priority of i
    this._keys = new Array(this._maxN + 1); // make this of length maxN??

    for (let i = 0; i <= this._maxN; i++) {
      this._qp[i] = -1;
    }
  }

  /**
   * Returns true if this priority queue is empty.
   */
  isEmpty() {
    return this._n === 0;
  }

  /**
   * Is {@code i} an index on this priority queue?
   * @param {number} i 
   */
  contains(i) {
    if (i < 0 || i >= this._maxN) {
      throw new Error('IllegalArgumentException');
    }
    return this._qp[i] !== -1;
  }

  /**
   * Returns the number of keys on this priority queue.
   */
  size() {
    return this._n;
  }

  /**
   * Associates key with index {@code i}. (aka. add_with_priority())
   * @param {number} i 
   * @param {Key} key 
   */
  insert(i, key) {
    if (i < 0 || i >= this._maxN) {
      throw new Error('IllegalArgumentException');
    }
    
    if (this.contains(i)) {
      throw new Error('index is already in the priority queue');
    }

    this._n++;
    this._qp[i] = this._n;
    this._pq[this._n] = i;
    this._keys[i] = key;

    this._swim(this._n);
  }

  /**
   * Returns an index associated with a minimum key.
   */
  minIndex() {
    if (this._n == 0) {
      throw new Error('Priority queue underflow');
    }

    return this._pq[1];
  }

  /**
   * Returns a minimum key.
   */
  minKey() {
    if (this._n == 0) {
      throw new Error('Priority queue underflow');
    }

    return this._keys[this._pq[1]];
  }

  /**
   * Removes a minimum key and returns its associated index. (aka. extract_min())
   */
  delMin() {
    if (this._n == 0) {
      throw new Error('Priority queue underflow');
    }

    const min = this._pq[1];

    this._exch(1, this._n--);
    this._sink(1);

    this._qp[min] = -1; // delete
    this._keys[min] = null; // to help with garbage collection
    this._pq[this._n + 1] = -1; // not needed

    return min;
  }

  /**
   * Returns the key associated with index {@code i}.
   * 
   * @param {number} i 
   */
  keyOf(i) {
    if (i < 0 || i >= this._maxN) {
      throw new Error('IllegalArgumentException');
    }
    if (!this.contains(i)) {
      throw new Error('index is not in the priority queue');
    } else {
      return this._keys[i];
    }
  }

  /**
   * Change the key associated with index {@code i} to the specified value.
   * 
   * @param {number} i 
   * @param {Key} key 
   */
  changeKey(i, key) {
    if (i < 0 || i >= this._maxN) {
      throw new Error('IllegalArgumentException');
    }
    if (!this.contains(i)) {
      throw new Error('index is not in the priority queue');
    }

    this._keys[i] = key;
    this._swim(this._qp[i]);
    this._sink(this._qp[i]);
  }

  /**
   * Change the key associated with index {@code i} to the specified value.
   * 
   * @Deprecated
   * 
   * @param {*} i 
   * @param {*} key 
   */
  change(i, key) {
    this.changeKey(i, key);
  }

  /**
   * Decrease the key associated with index {@code i} to the specified value. (aka. decrease_priority())
   * 
   * @param {number} i 
   * @param {Key} key 
   */
  decreaseKey(i, key) {
    if (i < 0 || i >= this._maxN) {
      throw new Error('IllegalArgumentException');
    }
    if (!this.contains(i)) {
      throw new Error('index is not in the priority queue');
    }
    if (this._keys[i].localeCompare(key) <= 0) {
      throw new Error('Calling decreaseKey() with given argument would not strictly decrease the key');
    }

    this._keys[i] = key;
    this._swim(this._qp[i]);
  }

  /**
   * Increase the key associated with index {@code i} to the specified value.
   * 
   * @param {number} i 
   * @param {Key} key 
   */
  increaseKey(i, key) {
    if (i < 0 || i >= this._maxN) {
      throw new Error('IllegalArgumentException');
    }
    if (!this.contains(i)) {
      throw new Error('index is not in the priority queue');
    }
    if (this._keys[i].localeCompare(key) >= 0) {
      throw new Error('Calling increaseKey() with given argument would not strictly increase the key');
    }

    this._keys[i] = key;
    this._sink(this._qp[i]);
  }

  /**
   * Remove the key associated with index {@code i}.
   * 
   * @param {number} i the index of the key to remove
   */
  delete(i) {
    if (i < 0 || i >= this._maxN) {
      throw new Error('IllegalArgumentException');
    }
    if (!this.contains(i)) {
      throw new Error('index is not in the priority queue');
    }

    const index = this._qp[i];
    
    this._exch(index, this._n--);
    this._swim(index);
    this._sink(index);

    this._keys[i] = null;
    this.qp[i] = -1;
  }

  // General helper functions.

  /**
   * @param {number} i 
   * @param {number} j 
   */
  _greater(i, j) {
    return this._keys[this._pq[i]].localeCompare(this._keys[this._pq[j]]) > 0;
  }

  /**
   * @param {number} i 
   * @param {number} j 
   */
  _exch(i, j) {
    let swap = this._pq[i];
    this._pq[i] = this._pq[j];
    this._pq[j] = swap;

    sthis._qp[this._pq[i]] = i;
    this._qp[this._pq[j]] = j;
  }

  // Heap helper functions.

  /**
   * @param {number} k 
   */
  _swim(k) {
    while (k > 1 && this._greater(k / 2, k)) {
      this._exch(k, k / 2);
      k = k / 2;
    }
  }

  _sink(k) {
    while (2 * k <= this._n) {
      let j = 2 * k;

      if (j < this._n && this._greater(j, j + 1)) {
        j++;
      }

      if (!this._greater(k, j)) {
        break;
      }

      this._exch(k, j);
      k = j;
    }
  }
}
