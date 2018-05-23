class QueueNode {
  constructor() {
    this.item = null;
    this.next = null;
  }
}

class LinkedQueueOfKeys {
  constructor() {
    this.first = null;
    this.last = null;
  }

  isEmpty() {
    return this.first == null;
  }

  /*
  * Average/Amortized Time Complexity
  * O(1)
  * Worst Time Complexity
  * O(1)
  */
  enqueue(item) {
    // save a link to the last node
    const oldLast = this.last;

    // create a new node for the end
    this.last = new QueueNode();
    this.last.item = item;
    this.last.next = null;

    // link the new node to the end of the list
    if (this.isEmpty()) {
      this.first = this.last;
    } else {
      oldLast.next = this.last;
    }
  }

  /*
  * Average/Amortized Time Complexity
  * O(1)
  * Worst Time Complexity
  * O(1)
  */
  dequeue() {
    // save item to return
    const item = this.first.item;

    // delete first node
    this.first = this.first.next;

    if (this.isEmpty()) {
      this.last = null;
    }
    
    // return saved item
    return item;
  }
}

// ----------------------------------------------

class Node {
  constructor(key, val) {
    this._key = key;
    this._val = val;

    this._left = null;
    this._right = null;

    this._count = null; // number of nodes in subtree
  }
}

// ordered iteration - yes
class BST {
  constructor() {
    this._root = null;
  }

  /*
  * Average/Amortized Time Complexity
  * O(log N)
  * Worst Time Complexity
  * O(N)
  */
  put(key, val) {
    this._root = this._put(this._root, key, val); 
  }

  _put(x, key, val) {
    if (x == null) {
      // base case
      return new Node(key, val);
    }

    let cmp = key.localeCompare(x._key);
    
    if (cmp < 0) {
      // recursive case

      x._left = this._put(x._left, key, val);
    } else if (cmp > 0) {
      // recursive case

      x._right = this._put(x._right, key, val);
    } else { // else if (cmp == 0)
      // base case

      x._val = val;
    }

    x._count = 1 + this.size(x._left) + this.size(x._right);

    return x;
  }

  /*
  * Average/Amortized Time Complexity
  * O(log N)
  * Worst Time Complexity
  * O(N)
  */
  get(key) {
    let x = this._root;

    while (x != null) {
      let cmp = key.localeCompare(x._key);

      if (cmp < 0) {
        x = x._left;
      } else if (cmp > 0) {
        x = x._right;
      } else { // else if (cmp == 0)
        return x._val;
      }
    }

    return null;
  }

  deleteMin() {
    this._root = this._deleteMin(this._root);
  }

  _deleteMin(x) {
    if (x._left == null) {
      // base case
      return x._right;
    }

    // recursive case
    x._left = this._deleteMin(x._left);

    x._count = 1 + this.size(x._left) + this.size(x._right);

    return x;
  }


  /*
  * Hibbard deletion
  * Average/Amortized Time Complexity
  * O(sqrt N)
  * Worst Time Complexity
  * O(N)
  * 
  * Researchers proved that after
  * sufficiently long number of
  * random insert and delete height
  * of the tree becomes sqrt(n) . So
  * now every operation (search, insert,
  * delete) will take sqrt(n) time which
  * is not good compare to O(logn).
  */
  delete(key) {
    this._root = this._delete(this._root, key);
  }

  _delete(x, key) {
    if (x == null) {
      // base case
      return null;
    }

    let cmp = key.localeCompare(x._key);

    if (cmp < 0) {
      // recursive case

      // search for key
      x._left = this._delete(x._left, key);
    } else if (cmp > 0) {
      // recursive case

      // search for key
      x._right = this._delete(x._right, key);
    } else {
      // base case

      if (x._right == null) {
        // no right child
        return x._left;
      }
      if (x._left == null) {
        // no left child
        return x._right;
      }

      let t = x;

      // replace with successor
      x = this.min(t._right); // TODO: implement this.min() and this.max()
      x._right = this.deleteMin(t._right);
      x._left = t._left;
    }

    // update subtree counts
    x.count = this.size(x._left) + this.size(x._right) + 1;

    return x;
  }

  /*
  * Average/Amortized Time Complexity
  * O(log N)
  * Worst Time Complexity
  * O(N)
  */
  floor(key) {
    let x = this._floor(this._root, key);

    if (x == null) {
      return null;
    }

    return x.key;
  }

  _floor(x, key) {
    if (x == null) {
      // base case

      return null;
    }

    let cmp = key.localeCompare(x._key);

    if (cmp == 0) {
      // base case

      return x;
    }

    if (cmp < 0) {
      // recursive case

      return this._floor(x._left, key);
    }

    // recursive case
    let t = this._floor(x._right, key);

    // base case
    if (t != null) {
      return t;
    } else {
      return x;
    }
  }

  size() {
    return this._size(this._root);
  }

  _size(x) {
    // ok to call when x is null
    if (x == null) {
      return 0;
    }

    return x._count;
  }

  /*
  * How many keys < k?
  * 
  * Average/Amortized Time Complexity
  * O(log N)
  * Worst Time Complexity
  * O(N)
  */
  rank(key) {
    this._rank(key, this._root);
  }

  _rank(key, x) {
    if (x == null) {
      // base case

      return 0;
    }

    let cmp = key.localeCompare(x._key);

    if (cmp < 0) {
      // recursive case

      return this._rank(key, x._left);
    } else if (cmp > 0) {
      // recursive case

      return 1 + this.size(x._left) + this._rank(key, x._right);
    } else { // else if (cmp == 0) {
      // base case

      return this.size(x._left);
    }
  }

  keys() {
    let q = new LinkedQueueOfKeys();

    this._inorder(this._root, q);

    return q;
  }

  /*
  * Inorder traversal of a BST yields keys in ascending order
  * 
  * Average/Amortized Time Complexity
  * O(N)
  * Worst Time Complexity
  * O(N)
  */
  _inorder(x, q) {
    if (x == null) {
      // base case

      return;
    }

    // recursive case
    this._inorder(x._left, q);

    q.enqueue(x.key);

    // recursive case
    this._inorder(x._right, q);
  }

}
