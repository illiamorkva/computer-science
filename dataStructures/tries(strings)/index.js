/**
 * Symbol table specialized to string keys.
 */
class StringST {
  /**
   * Create an empty symbol table.
   */
  constructor() {}

  /**
   * Put key-value pair into the symbol table.
   * 
   * @param {string} key 
   * @param {value} val 
   * @returns {void}
   */
  put(key, val) {}

  /**
   * Return value paired with given key.
   * 
   * @param {string} key
   * @returns {value}
   */
  get(key) {}

  /**
   * Delete key and corresponding value.
   * 
   * @param {string} key
   * @returns {void}
   */
  delete(key) {}

  /**
   * Character-based operations. The string symbol table
   * API supports several useful character-based operations.
   * 
   * Prefix match. Keys with prefix "sh": "she", "shells" and "shore".
   * Wildcard match. Keys that match ".he": "she" and "the". 
   * Longest prefix. Keys that is the longest prefix of "shellsort": "shells".
   * 
   * Remark. Can also add other ordered ST methods, e.g., floor() and rank().
   */

  /**
   * All keys.
   * 
   * @returns {Iterable<string>}
   */
  keys() {}

  /**
   * Keys having s as a prefix.
   * 
   * @param {string} s 
   * @returns {Iterable<string>}
   */
  keysWithPrefix(s) {}

  /**
   * Keys that match s (where . is a wildcard).
   * 
   * @param {string} s
   * @returns {Iterable<string>}
   */
  keysThatMatch(s) {}

  /**
   * Longest key that is a prefix of s.
   * 
   * @param {string} s
   * @returns {string}
   */
  longestPrefixOf(s) {}
}
