// https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/SeparateChainingHashST.java.html

class Node {
  constructor(key, val, next) {
    this._key = key;
    this._val = val;

    this._next = next;
  }
}

// ordered iteration - no
class SeparateChainingHashST {
  constructor() {
    // number of chains
    // typical choice: N / 5 => constant-time ops
    this._M = 97;
    // array of chains
    this._st = new Array(this._M);
    // explicit array doubling
    // and halving code omitted
  }

  _hash(key) {
    // return key.hashCode()
    // TODO: implement hash function
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
    let i = this._hash(key);

    // x - Node instance
    for (let x = this._st[i]; x != null; x = x._next) {
      if (key == x._key) { // key.equals(x._key)
        return x._val;
      }
    }

    return null;
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
    let i = this._hash(key);

    for (let x = this._st[i]; x != null; x = x._next) {
      if (key == x._key) {
        x._val = val;

        return;
      }
    }

    this._st[i] = new Node(key, val, this._st[i]);
  }

}
