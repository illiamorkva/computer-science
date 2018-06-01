/**
 * Associate an index between 0 and N-1 with each key in a priority queue.
 * - Client can insert and delete-the-minimum.
 * - Client can change the key by specifying the index.
 */
class IndexMinPQ {
  /**
   * Create indexed priority queue with indices 0, 1, ..., N-1.
   * 
   * @param {int} N 
   */
  constructor(N) {}

  /**
   * Associate key with index i.
   * 
   * @param {int} i 
   * @param {Key} key 
   * @returns {void}
   */
  insert(i, key) {}

  /**
   * Decrease the key associated with index i.
   * 
   * @param {int} i
   * @param {Key} key
   * @returns {void}
   */
  decreaseKey(i, key) {}

  /**
   * Is i an index on the priority queue?
   * 
   * @param {int} i
   * @returns {boolean}
   */
  contains(i) {}

  /**
   * Remove a minimal key and return its associated index.
   * 
   * @returns {int}
   */
  delMin() {}

  /**
   * Is the priority queue empty?
   * 
   * @returns {boolean}
   */
  isEmpty() {}

  /**
   * Number of entries in the priority queue.
   * 
   * @returns {int}
   */
  size() {}
}