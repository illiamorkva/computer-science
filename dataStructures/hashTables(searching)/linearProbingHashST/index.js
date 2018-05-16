// ordered iteration - no
class LinearProbingHashST {
  constructor() {
    // Array size M must be greater
    // than number of key-value pairs N
    // typical choice: a = N/M ~ 1/2
    this._M = 30001;

    this._vals = new Array(this._M);
    this._keys = new Array(this._M);
    // explicit array doubling
    // and halving code omitted
  }

  _hash(key) {
    // return key.hashCode()
    // TODO: implement hash function
  }

  /*
  * Insert
  * Average/Amortized Time Complexity
  * O(1)
  * Worst Time Complexity
  * O(N) ?
  * O(log N) - under uniform hashing assumption
  */
  put(key, val) {
    let i;

    for (i = this._hash(key); this._keys[i] != null; i = (i + 1) % this._M) {
      if (this._keys[i] == key) {
        break;
      }
    }

    this._keys[i] = key;
    this._vals[i] = val;
  }

  /*
  * Search
  * Average/Amortized Time Complexity
  * O(1)
  * Worst Time Complexity
  * O(N) ?
  * O(log N) - under uniform hashing assumption
  */
  get(key) {
    for (let i = this._hash(key); this._keys[i] != null; i = (i + 1) % this._M) {
      if (key == this._keys[i]) {
        return this._vals[i];
      }
    }

    return null;
  }
}