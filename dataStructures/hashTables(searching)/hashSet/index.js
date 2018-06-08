// https://leetcode.com/explore/learn/card/hash-table/
// https://github.com/lukehoban/es6features#map--set--weakmap--weakset

/**
 * The hash set is one of the implementations of a set data structure to store no repeated values.
 * As we know, it is easy and effective to insert a new value and check if a value is in a hash set or not.
 * Therefore, typically, a hash set is used to check if a value has ever appeared or not.
 * 
 * By choosing a proper hash function, the hash table can achieve wonderful performance in both insertion and search.
 * 
 * Use hash set to solve duplicates related problems.
 * 
 * We use an array to represent the hash set.
 * Each element in the array is a bucket.
 * And in each bucket, we use an array to store all the values.
 * 
 */
class HashSet {
  constructor() {
    this._MAX_LEN = 100000; // the amount of buckets
    this._set = new Array(this._MAX_LEN); // hash set implemented by array
  }

  /**
   * Simple hash function.
   * Returns the corresponding bucket index.
   * 
   * @param {number} key 
   */
  _getIndex(key) {
    return key % this._MAX_LEN;
  }

  /**
   * Search the key in a specific bucket.
   * Returns -1 if the key does not existed.
   * 
   * @param {number} key 
   * @param {number} index 
   */
  _getPos(key, index) {
    // each bucket contains a list
    const temp = this._set[index];

    if (temp == null) {
      return -1;
    }

    // iterate all the elements in the bucket to find the target key
    for (let i = 0; i < temp.length; ++i) {
      if (temp[i] == key) {
        return i;
      }
    }

    return -1;
  }

  /**
   * @param {number} key
   * @returns {void}
   */
  add(key) {
    const index = this._getIndex(key);
    const pos = this._getPos(key, index);

    if (pos < 0) {
      // add new key if key does not exist
      if (this._set[index] == null) {
        this._set[index] = new Array();
      }

      this._set[index].push(key); // set[index].add(key);
    }
  }
  
  /**
   * The strategy used in the built-in function is to move
   * all the elements after ith element one position forward.
   * That is to say, you have to move n - i times. So the time
   * complexity to remove an element from an array list will be O(n). 
   * Hopefully, there are two solutions to reduce the time complexity from O(n) to O(1).
   * 1. Swap
   * 2. Linked List
   * 
   * @param {number} key
   * @returns {void}
   */
  remove(key) {
    const index = this._getIndex(key);
    const pos = this._getPos(key, index);

    if (pos >= 0) {
      // remove the key if key exists
      this._set[index] = this._set[index].filter(item => item != key); // set[index].remove(pos);
    }
  }
  
  /**
   * Returns true if this set contained the specified element
   * 
   * @param {number} key
   * @returns {boolean}
   */
  contains(key) {
    const index = this._getIndex(key);
    const pos = this._getPos(key, index);

    return pos >= 0;
  }
}
