class Node {
  constructor() {
    this.item = null;
    this.next = null;
  }    
}

class LinkedStackOfStrings {
  constructor() {
    this.first = null;
  }

  isEmpty() {
    return this.first == null;
  }

  push(item) {
    // save a link to the list
    const oldFirst = this.first;

    // create a new node for the beginning
    this.first = new Node();

    // set the instance variables in the new node
    this.first.item = item;
    this.first.next = oldFirst;
  }

  pop() {
    // save item to return
    const item = this.first.item;
    
    // delete first node
    this.first = this.first.next;

    // return saved item
    return item;
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
