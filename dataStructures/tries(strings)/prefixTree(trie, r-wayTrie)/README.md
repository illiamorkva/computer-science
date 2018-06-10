## Trie vs. Hash Table

We assume there are N keys and the maximum length of a key is M.

### Time Complexity

The time complexity to search in hash table is typically `O(1)`, but will be `O(logN)` in the worst time if there are too many collisions and we solve collisions using height-balanced BST.

The time complexity to search in Trie is `O(M)`.

The hash table wins in most cases.

### Space Complexity

The space complexity of hash table is `O(M * N)`. If you want hash table to have the same function with Trie, you might need to store several copies of the key. For instance, you might want to store "a", "ap", "app", "appl" and also "apple" for a keyword "apple" in order to search by prefix. The space complexity can be `even much larger` in that case.

The space complexity of Trie is `O(M * N)` as we estimated above. But `actually far smaller` than the estimation since there will be a lot of words have the similar prefix in real cases.

Trie wins in most cases.
