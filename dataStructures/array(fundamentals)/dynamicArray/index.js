/**
 * Dynamic array, implemented with a ring buffer
 * (use a statically sized array underneath the hood)
 * 
 */
class DynamicArray {
  constructor() {
    this._buffer = new CircularBuffer();
  }

  /**
   * Average/Amortized Time Complexity
   * O(1), because we add an item to the end of the buffer
   * Worst Time Complexity
   * O(N), because of resizing
   * 
   * @param {any} data 
   */
  insert(data) {
    if (this._buffer.isFull()) {
      this._buffer.resize(2 * this._buffer.capacity());
    }

    this._buffer.add(data);
  }

  /**
   * Average/Amortized Time Complexity
   * O(1), because we remove the first added item of the buffer
   * Worst Time Complexity
   * O(N), because of resizing
   * 
   */
  delete() {
    const item = this._buffer.remove();

    if (this._buffer.size > 0 && this._buffer.size == this._buffer.capacity() / 4 ) {
      this._buffer.resize(this._buffer.capacity() / 2);
    }

    return item;
  }

  /**
   * Worst Time Complexity
   * O(1)
   * 
   * @param {number} index 
   */
  getAtIndex(index) {
    return this._buffer.get(index);
  }

  /**
   * Average/Amortized Time Complexity
   * O(N),
   * Worst Time Complexity
   * O(N), because of shifting
   * 
   * TODO
   * @param {any} item 
   * @param {number} index 
   */
  insertAtIndex(item, index) {}
  
  /** 
   * Average/Amortized Time Complexity
   * O(N),
   * Worst Time Complexity
   * O(N), because of shifting
   * 
   * TODO
   * @param {number} index 
   */
  deleteAtIndex(index) {}

  /**
   * Average/Amortized Time Complexity
   * O(N),
   * Worst Time Complexity
   * O(N)
   * 
   * TODO by buffer iterator
   * https://github.com/Bishop92/JavaScript-Data-Structures/blob/master/lib/CircularBuffer/CircularBufferIterator.js
   */
  search() {}

  /**
   * Worst Time Complexity
   * O(1)
   */
  length() {
    this._buffer.capacity();
  }

  /**
   * Average/Amortized Time Complexity
   * O(N),
   * Worst Time Complexity
   * O(N)
   */
  entries() {
    return this._buffer.entries();
  }

  /**
   * Average/Amortized Time Complexity
   * O(N),
   * Worst Time Complexity
   * O(N)
   */
  toString() {
    return this.entries().join(', ');
  }
}
