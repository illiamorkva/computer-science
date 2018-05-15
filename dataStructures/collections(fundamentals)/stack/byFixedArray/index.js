class ReverseArrayIterator {
  constructor(s, N) {
    this.s = s;
    this._i = N;
  }

  hasNext() {
    return this._i > 0;
  }

  next() {
    if (!this.hasNext()) {
      throw Error('No more items in iteration');
    }

    return this.s[--this._i];
  }
}

class FixedCapacityStackOfStrings {
  constructor(capacity) {
    this.s = new Array(capacity);
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
  * O(1)
  */
  push(item) {
    // this.N++ - use to index into array; then increment N
    this.s[this.N++] = item;
  }

  /*
  * Average/Amortized Time Complexity
  * O(1)
  * Worst Time Complexity
  * O(1)
  */
  pop() {
    // --this.N - decrement N; then use to index into array
    const item = this.s[--this.N];
    
    // to avoid 'loitering'
    this.s[this.N] = null;

    return item;
  }

  iterator() {
    return new ReverseArrayIterator(this.s, this.N);
  }
}

const myStack = new FixedCapacityStackOfStrings(5);

console.log('isEmpty(): ', myStack.isEmpty());

myStack.push('1');

console.log('isEmpty(): ', myStack.isEmpty());

console.log('pop(): ', myStack.pop());
console.log('isEmpty(): ', myStack.isEmpty());

myStack.push('1');
myStack.push('2');
myStack.push('3');

console.log('pop(): ', myStack.pop());
console.log('pop(): ', myStack.pop());
console.log('pop(): ', myStack.pop());

console.log('isEmpty(): ', myStack.isEmpty());

myStack.push('1');
myStack.push('2');
myStack.push('3');
myStack.push('4');

const iterator = myStack.iterator();

console.log('has next: ', iterator.hasNext());

console.log('next: ', iterator.next());
console.log('next: ', iterator.next());
console.log('next: ', iterator.next());
console.log('next: ', iterator.next());

console.log('has next: ', iterator.hasNext());

console.log('pop(): ', myStack.pop()); // 4
