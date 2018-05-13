class ResizingArrayStackOfStrings {
  constructor() {
    this.s = new Array(1);
    this.N = 0;
  }

  size() {
    return this.s.length;
  }

  isEmpty() {
    return this.N == 0;
  }
  
  /*
  * Average/Amortized Time Complexity
  * O(1)
  * Worst Time Complexity
  * O(N)
  */
  push(item) {
    if (this.N == this.s.length) {
      this._resize(2 * this.s.length);
    }

    // this.N++ - use to index into array; then increment N
    this.s[this.N++] = item;
  }

  /*
  * Average/Amortized Time Complexity
  * O(1)
  * Worst Time Complexity
  * O(N)
  */
  pop() {
    // --this.N - decrement N; then use to index into array
    const item = this.s[--this.N];
    
    // to avoid 'loitering'
    this.s[this.N] = null;

    if (this.N > 0 && this.N == this.s.length / 4) {
      this._resize(this.s.length / 2);
    }

    return item;
  }

  _resize(capacity) {
    const copy = new Array(capacity);

    for (let i = 0; i < this.N; i++) {
      copy[i] = this.s[i];
    }

    this.s = copy;
  }
}

const myStack = new ResizingArrayStackOfStrings();

console.log('size: ', myStack.size()); // 1

myStack.push('1');

console.log('size: ', myStack.size()); // 1

myStack.push('2');

console.log('size: ', myStack.size()); // 2

myStack.push('3');

console.log('size: ', myStack.size()); // 4

myStack.push('4');

console.log('size: ', myStack.size()); // 4

myStack.push('5');

console.log('size: ', myStack.size()); // 8

myStack.pop();
myStack.pop();
myStack.pop();

console.log('size: ', myStack.size()); // 4
