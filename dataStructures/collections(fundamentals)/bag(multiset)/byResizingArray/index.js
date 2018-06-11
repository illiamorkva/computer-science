/**
 * Time Complexity.
 * The add operation takes constant amortized time;
 * the isEmpty, and size operations take constant time.
 * Iteration takes time proportional to the number of items.
 */
class ResizingArrayBag {
  constructor() {
    this._a = new Array(2); // array of items
    this._n = 0; // number of elements on bag
  }

  /**
   * Is this bag empty?
   */
  isEmpty() {
    return this._n === 0;
  }

  /**
   * Returns the number of items in this bag.
   */
  size() {
    return this._n;
  }

  /**
   * Resize the underlying array holding the elements.
   * 
   * @param {number} capacity 
   */
  _resize(capacity) {
    const temp = new Array(capacity);

    for (let i = 0; i < n; i++) {
      temp[i] = this._a[i];
    }

    this._a = temp;
  }

  /**
   * Adds the item to this bag.
   * 
   * @param {Item} item 
   */
  add(item) {
    if (this._n == this._a.length) {
      this._resize(2 * this._a.length); // double size of array if necessary
    }

    this._a[this._n++] = item;
  }

  /**
   * Returns items as an array.
   */
  entries() {
    return this._a;
  }
}
