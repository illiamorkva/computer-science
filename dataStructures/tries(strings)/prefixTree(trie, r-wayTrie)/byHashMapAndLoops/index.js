// https://leetcode.com/explore/learn/card/trie/

class TrieNode {
  constructor() {
    this.isWord = null;
    this.childrenMap = new HashMap();
  }
}

/**
 * 
 * Time Complexity.
 * If the longest length of the word is N, the height of Trie will be N + 1.
 * Therefore, the time complexity of all insert, search and startsWith methods will be O(N).
 * 
 * Space Complexity.
 * If we have M words to insert in total and the length of words is at most N,
 * there will be at most M*N nodes in the worst case (any two words don't have a common prefix).
 * Let's assume that there are maximum K different characters
 * (K is equal to 26 in this problem, but might differs in different cases).
 * So each node will maintain a map whose size is at most K.
 * Therefore, the space complexity will be O(M*N*K).
 * It seems that Trie is really space consuming, however,
 * the real space complexity of Trie is much smaller than our estimation,
 * especially when the distribution of words is dense.
 * 
 */
class Trie {
  constructor() {
    this._root = new TrieNode();
  }

  /**
   * Inserts a word into the trie.
   * 
   * @param {string} word 
   */
  insert(word) {
    let cur = this._root;

    for (let i = 0; i < word.length; i++) {
      let c = word.charAt(i);

      if (cur.childrenMap.get(c) == null) {
        // insert a new node if the path does not exist
        cur.childrenMap.put(c, new TrieNode());
      }

      cur = cur.childrenMap.get(c);
    }

    cur.isWord = true;
  }

  /**
   * Returns if the word is in the trie.
   * 
   * @param {string} word 
   */
  search(word) {
    let cur = this._root;

    for (let i = 0; i < word.length; i++) {
      let c = word.charAt(i);

      if (cur.childrenMap.get(c) == null) {
        return false;
      }

      cur = cur.childrenMap.get(c);
    }

    return cur.isWord;
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * 
   * @param {string} prefix 
   */
  startsWith(prefix) {
    let cur = this._root;

    for (let i = 0; i < prefix.length; i++) {
      let c = prefix.charAt(i);

      if (cur.childrenMap.get(c) == null) {
        return false;
      }

      cur = cur.childrenMap.get(c);
    }

    return true;
  }
}
