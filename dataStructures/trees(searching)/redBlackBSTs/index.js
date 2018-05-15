
class Node {
  constructor(key, val, color) {
    this._key = key;
    this._val = val;

    this._left = null;
    this._right = null;

    this._color = color || null; // color of parent link
    this._count = null; // number of nodes in subtree
  }
}

class RedBlackBST {
  constructor() {
    this._root = null;

    this._RED = true;
    this._BLACK = false;
  }

  get(key) {
    let x = this._root;

    while (x != null) {
      let cmp = key.localeCompare(x._key);

      if (cmp < 0) {
        x = x._left;
      } else if (cmp > 0) {
        x = x._right;
      } else {
        return x._val;
      }
    }

    return null;
  }

  _isRed(x) {
    if (x == null) {
      return false; // null links are black
    }

    return x._color == this._RED;
  }

  _rotateLeft(h) {
    // assert this._isRed(h._right);

    let x = h._right;

    h._right = x._left;
    x._left = h;
    x._color = h._color;
    h._color = this._RED;
    
    return x;
  }

  _rotateRight(h) {
    // assert this._isRed(h._left)

    let x = h._left;

    h._left = x._right;
    x._right = h;
    x._color = h._color;
    h._color = this._RED;

    return x;
  }

  _flipColors(h) {
    // assert !isRed(h)
    // assert isRed(h.left)
    // assert isRed(h.right)

    h._color = this._RED;
    h._left._color = this._BLACK;
    h._right._color = this._BLACK;
  }

  /*
  * Insertion in a LLRB tree
  * Average/Amortized Time Complexity
  * O(log N)
  * Worst Time Complexity
  * O(log N)
  */
  _put(h, key, val) {
    if (h == null) {
      // base case

      // insert at bottom (and color red)
      return new Node(key, val, this._RED);
    }

    let cmp = key.localeCompare(h._key);

    if (cmp < 0) {
      // recursive case

      h._left = this._put(h._left, key, val);
    } else if (cmp > 0) {
      // recursive case

      h._right = this._put(h._right, key, val);
    } else {
      // base case
      h._val = val;
    }
    // base case

    // only a few extra lines of code
    // provides near-perfect balance
    if (this._isRed(h._right) && !this._isRed(h._left)) {
      // lean left
      h = this._rotateLeft(h);
    }
    if (this._isRed(h._left) && this._isRed(h._left._left)) {
      // balance 4-node
      h = this._rotateRight(h);
    }
    if (this._isRed(h._left) && this._isRed(h._right)) {
      // split 4-node
      this._flipColors(h);
    }

    return h;
  }

}
