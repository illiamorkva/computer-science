// https://en.wikipedia.org/wiki/Circular_buffer
// https://github.com/monmohan/dsjslib/blob/master/lib/CircularBuffer.js
// https://github.com/Bishop92/JavaScript-Data-Structures/blob/master/lib/CircularBuffer/CircularBuffer.js

/**
 * Ring buffer.
 */
class CircularBuffer {
  constructor(capacity) {
    this._capacity = capacity || 32;

    // remove start (first added) 
    // add to end (last added)
    this._start = -1;
    this._end = 0;
    
    this._buffer = new Array(this._capacity);
  }

  /**
   * Add data to buffer.
   * This will overwrite older items if the buffer is full.
   * 
   * @param {any} val 
   */
  add(val) {
    this._buffer[this._end] = val;

    if (this._end === this._start || this._start === -1) {
      // advance head (set forward)
      this._start++;
      this._start %= this._capacity;
    }
    
    this._end++;
    this._end %= this._capacity;
  }

  /**
   * Remove the least recent (the first added) item from the buffer.
   */
  remove() {
    const item = this._buffer[this._start];
    const size = this.size();

    switch (size) {
      case 0:
        break;
      case 1:
        delete this._buffer[this._start];

        // equivalent to clear
        this._start = -1;
        this._end = 0;
        break;
      default:
        delete this._buffer[this._start];

        this._start++;
        this._start %= this._capacity;
    }

    return item;
  }

  /**
   * Get the item at given index.
   * 
   * @param {number} index
   * @returns {any} item null if no item exists at given index.
   */
  get(index) {
    if (index >= this.size()) {
      return null;
    }

    return this._buffer[(this._start + index) % this._capacity];
  }

  /**
   * Returns the total number of items in the buffer.
   * This will always be <= capacity of the buffer.
   * 
   * @returns {number}
   */
  size() {
    if (this._start === -1) {
      return 0;
    }

    if (this._end > this._start) {
      return this._end - this._start;
    } else {
      return (this._capacity - this._start) + this._end;
    }
  }

  /**
   * Check if the buffer is full.
   * 
   * @returns {boolean}
   */
  isFull() {
    return this.size() === this._capacity;
  }

  /**
   * Check if the buffer is empty.
   * 
   * @returns {boolean}
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Clear content of the buffer.
   */
  clear() {
    this._start = -1;
    this._end = 0;
    this._buffer = new Array(this._capacity);
  }

  /**
   * Get all entries of the buffer.
   * 
   * @returns {Array}
   */
  entries() {
    if (this._start === -1) {
      return new Array(this._capacity);
    }

    if (this._start >= this._end) {
      return this._buffer
        .slice(this._start, this._capacity)
        .concat(
          this._buffer.slice(0, this._end)
        );
    } else {
      return this._buffer
        .slice(this._start, this._end);
    }
  }

  /**
   * Get the first element.
   * 
   * @returns {any}
   */
  front() {
    return this.get(0);
  }

  /**
   * Get the last element.
   * 
   * @returns {any}
   */
  back() {
    const item = this.isEmpty() 
    ? null
    : this._buffer[(this._end || this._capacity) - 1];
    
    return item;
  }

  /**
   * Resize the buffer.
   * 
   * TODO: to refactor method! Here is a bug. Clone
   * 
   * @param {number} capacity new size of the buffer.
   */
  resize(capacity) {
    if (this._capacity < capacity) {
      if (this._end < this._start + 1) {
        for (let i = 0; i < this._end; i++) {
          this._buffer[(i + this._capacity) % capacity] = this._buffer[i];
          delete this._buffer[i];
        }
        this._end = (this._end + this._capacity) % capacity;
      }
    } else if (this._capacity > capacity) {
      if (this._end < this._start + 1) {
        // check if start is after capacity
        let start = capacity;

        if (this._start > capacity - 1) {
          start = this._start;
          this._start = 0;
        }

        // stored items must be shifted to valid positions
        let step = this._capacity - start;

        for (let j = this._end - step - 1; j > start - 1 || j < this._end - step; j--) {
          this._buffer[(j + step) % this._capacity] = this._buffer[j];

          if (!j) {
            j = this._capacity;
          }
        }
        this._end = (this._end + step) % this._capacity;
      }
    }

    this._capacity = capacity;
  }
}
