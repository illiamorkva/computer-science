// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// https://leetcode.com/explore/learn/card/hash-table/
// https://github.com/lukehoban/es6features#map--set--weakmap--weakset

/**
 * The hash map is one of the implementations of a map data structure to store (key, value) pairs.
 * The first scenario to use a hash map is that we need more information rather than only the key.
 * Then we can build a mapping relationship between key and information by hash map.
 * Another frequent scenario is to aggregate all the information by key. We can also use a hash map to achieve this goal.
 * 
 * By choosing a proper hash function, the hash table can achieve wonderful performance in both insertion and search.
 * 
 * Use hash map to aggregate information by key.
 */
class HashMap {
  constructor() {
    this._MAX_LEN = 10; // the amount of buckets 
    this._map = new Array(this._MAX_LEN); // hash map implemented by array
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
   * Search the key in a specific bucket. Returns -1 if the key does not existed.
   * 
   * @param {number} key 
   * @param {number} index 
   */
  _getPos(key, index) {
    // each bucket contains a list
    const temp = this._map[index];

    if (temp == null) {
      return -1;
    }

    // iterate all the elements in the bucket to find the target key
    for (let i = 0; i < temp.length; ++i) {
      // O(1) because we KNOW that the pair has only 1 key 
      // 2 for cycles only because of JS implementation -  if (temp.get(i).getKey() == key) {
      for (let pairKey in temp[i]) {
        if (pairKey == key) {
          return i;
        }
      }
    }

    return -1;
  }

  /**
   * Value will always be positive.
   * 
   * @param {number} key 
   * @param {number} value 
   */
  put(key, value) {
    const index = this._getIndex(key);
    const pos = this._getPos(key, index);

    if (pos < 0) {
      // add new (key, value) pair if key is not existed
      if (this._map[index] == null) {
        this._map[index] = new Array();
      }

      this._map[index].push({
        [key]: value,
      });

    } else {
      // update the value if key is existed
      this._map[index][pos] = {
        [key]: value,
      };
    }
  }

  /**
   * Returns the value to which the specified key is mapped,
   * or -1 if this map contains no mapping for the key.
   * 
   * @param {number} key 
   */
  get(key) {
    const index = this._getIndex(key);
    const pos = this._getPos(key, index);

    if (pos < 0) {
      return -1;
    } else {
      return this._map[index][pos][key];
    }
  }

  /**
   * Removes the mapping of the specified value key
   * if this map contains a mapping for the key.
   * 
   * The strategy used in the built-in function is to move
   * all the elements after ith element one position forward.
   * That is to say, you have to move n - i times. So the time
   * complexity to remove an element from an array list will be O(n). 
   * Hopefully, there are two solutions to reduce the time complexity from O(n) to O(1).
   * 1. Swap
   * 2. Linked List
   * 
   * @param {number} key 
   */
  remove(key) {
    const index = this._getIndex(key);
    const pos = this._getPos(key, index);

    if (pos >= 0) {
      this._map[index] = this._map[index].filter((item, index) => {
        return index != pos;
      });
    }
  }
}
