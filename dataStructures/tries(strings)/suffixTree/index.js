// https://www.geeksforgeeks.org/pattern-searching-set-8-suffix-tree-introduction/
// https://habr.com/post/258121/
// https://stackoverflow.com/questions/9452701/ukkonens-suffix-tree-algorithm-in-plain-english/9513423#9513423
// https://www.geeksforgeeks.org/ukkonens-suffix-tree-construction-part-6/
// https://en.wikipedia.org/wiki/Suffix_tree
// https://en.wikipedia.org/wiki/Ukkonen%27s_algorithm

/**
 * 1. Patricia trie of suffixes of a string.
 * 2. Linear-time construction.
 * 
 * Time Complexity.
 * The naive implementation for generating a suffix tree
 * going forward requires O(n^2) or even O(n^3) time complexity
 * in big O notation, where n is the length of the string. By exploiting
 * a number of algorithmic techniques, Ukkonen reduced this to O(n) (linear)
 * time, for constant-size alphabets, and O(n log n) in general,
 * matching the runtime performance of the earlier two algorithms.
 */
class SuffixTree {}
