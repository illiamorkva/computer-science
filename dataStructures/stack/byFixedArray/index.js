class FixedCapacityStackOfStrings {
  constructor(capacity) {
    this.s = new Array(capacity);
    this.N = 0;
  }

  // getAllCapacity() {
  //   return this.s.length;
  // }

  isEmpty() {
    return this.N == 0;
  }
  
  push(item) {
    // this.N++ - use to index into array; then increment N
    this.s[this.N++] = item;
  }

  pop() {
    // --this.N - decrement N; then use to index into array
    const item = this.s[--this.N];
    
    // to avoid 'loitering'
    this.s[this.N] = null;

    return item;
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

// console.log('capacity: ', myStack.getAllCapacity());
