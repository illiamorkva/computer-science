### separate chaining vs. linear probing

Separate chaining.

* Easier to implement delete.
* Performance degrades gracefully.
* Clustering less sensitive to poorly-designed hash function.

Linear probing.

* Less wasted space.
* Better cache performance.

### hash tables vs. balanced search trees

Hash tables.

* Simpler to code.
* No effective alternative for unordered keys.
* Faster for simple keys (a few arithmetic ops versus `log N` compares).
* Better system support in Java for strings (e.g., cached hash code).

Balanced search trees.

* Stronger performance guarantee.
* Support for ordered ST operations.
* Easier to implement `compareTo()` correctly than `equals()` and `hashCode()`.
