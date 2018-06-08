## **Hash Table** is a data structure which organizes data using hash functions in order to support quick insertion and search.

# The Principle of Hash Table
The key idea of Hash Table is to use a hash function to map keys to buckets. To be more specific,

1. When we insert a new key, the hash function will decide which bucket the key should be assigned and the key will be stored in the corresponding bucket;
2. When we want to search for a key, the hash table will use the same hash function to find the corresponding bucket and search only in the specific bucket.

# separate chaining vs. linear probing

Separate chaining.

* Easier to implement delete.
* Performance degrades gracefully.
* Clustering less sensitive to poorly-designed hash function.

Linear probing.

* Less wasted space.
* Better cache performance.

# hash tables vs. balanced search trees

Hash tables.

* Simpler to code.
* No effective alternative for unordered keys.
* Faster for simple keys (a few arithmetic ops versus `log N` compares).
* Better system support in Java for strings (e.g., cached hash code).

Balanced search trees.

* Stronger performance guarantee.
* Support for ordered ST operations.
* Easier to implement `compareTo()` correctly than `equals()` and `hashCode()`.
