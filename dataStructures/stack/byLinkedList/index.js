class Node {
  constructor() {
    this.item = null;
    this.next = null;
  }
}

class Iterator {
  constructor(first) {
    this.current = first;
  }

  hasNext() {
    return this.current != null;
  }

  next() {
    if (this.current == null) { // if (!this.hasNext())
      throw Error('No more items in iteration');
    }

    const item = this.current.item;
    
    this.current = this.current.next;

    return item;
  }
}

class LinkedStackOfStrings {
  constructor() {
    this.first = null;
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
  push(item) {
    // save a link to the list
    const oldFirst = this.first;

    // create a new node for the beginning
    this.first = new Node();

    // set the instance variables in the new node
    this.first.item = item;
    this.first.next = oldFirst;
  }

  /*
  * Average/Amortized Time Complexity
  * O(1)
  * Worst Time Complexity
  * O(1)
  */
  pop() {
    // save item to return
    const item = this.first.item;
    
    // delete first node
    this.first = this.first.next;

    // return saved item
    return item;
  }

  iterator() {
    return new Iterator(this.first);
  }
}

const myStack = new LinkedStackOfStrings();

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

console.log('has next: ', iterator.hasNext()); // true

console.log('next: ', iterator.next());
console.log('next: ', iterator.next());
console.log('next: ', iterator.next());
console.log('next: ', iterator.next());

console.log('has next: ', iterator.hasNext()); // false
