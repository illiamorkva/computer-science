## Stack

Examine the item most recently added. <-- LIFO = "last in first out"

#

### Warmup API. Stack of strings data type.

| `public class StackOfStrings` | | Average/Amortized Time Complexity | Worst Time Complexity |
| - | - | -| - |
| `StackOfStrings()` | create an empty stack | | |
| `void push(String item)` | insert a new string onto stack | `O(1)`| `O(1)` |
| `String pop()` | remove and return the string most recently added | `O(1)` | `O(1)` |
| `boolean isEmpty()` | is the stack empty ? | |
| `int size()` | number of strings on the stack | |

#

### Stack resizing-array implementation: performance

|  | Best Time Complexity | Average/Amortized Time Complexity | Worst Time Complexity |
| - | - | -| - |
| `construct` | `O(1)` | `O(1)` | `O(1)` |
| `push` | `O(1)` | `O(1)`| `O(N)` |
| `pop` | `O(1)` | `O(1)` | `O(N)` |
| `size` | `O(1)` | `O(1)` | `O(1)` |

#

### Stack implementations: resizing array vs. linked list

Linked-list implementation.

* Every operation takes constant time in the **worst case**.
* Uses extra time and space to deal with the links.

Resizing-array implementation.

* Every operation takes constant **amortized** time.
* Less wasted space.

#
