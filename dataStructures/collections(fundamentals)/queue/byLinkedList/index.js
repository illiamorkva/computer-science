class Node {
  constructor() {
    this.item = null;
    this.next = null;
  }
}

class LinkedQueueOfStrings {
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
    this.last = new Node();
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


const myQueue = new LinkedQueueOfStrings();

myQueue.enqueue('1');
myQueue.enqueue('2');
myQueue.enqueue('3');
myQueue.enqueue('4');

console.log('dequeue: ', myQueue.dequeue()); // 1
console.log('dequeue: ', myQueue.dequeue()); // 2
console.log('dequeue: ', myQueue.dequeue()); // 3
console.log('dequeue: ', myQueue.dequeue()); // 4
