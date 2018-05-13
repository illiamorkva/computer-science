class UnorderedMaxPQ {
  constructor(capacity) {
    // _pq[i] - ith element on _pq
    this._pq = new Array(capacity);

    // number of elements on _pq
    this._N = 0
  }

  isEmpty() {
    return this._N == 0;
  }

  /*
  * Average/Amortized Time Complexity
  * O(1)
  * Worst Time Complexity
  * O(1)
  */
  insert(x) {
    this._pq[this._N++] = x;
  }

  /*
  * Average/Amortized Time Complexity
  * O(N)
  * Worst Time Complexity
  * O(N)
  */
  delMax() {
    if (this.isEmpty()) {
      throw Error('No elements are in PQ.')
    }

    let max = 0;

    for (let i = 1; i < this._N; i++) {
      if (this._less(max, i)) {
        max = i;
      }
    }

    this._exch(max, this._N - 1);

    return this._pq[--this._N];
  }

  _less(max, i) {
    return (this._pq[max] - this._pq[i]) < 0;
  }

  _exch(max, last) {
    const swap = this._pq[max];
    this._pq[max] = this._pq[last];
    this._pq[last] = swap;
  }
}

const myPQ = new UnorderedMaxPQ(10);

console.log('is empty: ', myPQ.isEmpty());

myPQ.insert(1);
myPQ.insert(7);
myPQ.insert(2);
myPQ.insert(1);
myPQ.insert(3);
myPQ.insert(5);

console.log('is empty: ', myPQ.isEmpty());

console.log('del max: ', myPQ.delMax()); // 7
console.log('del max: ', myPQ.delMax()); // 5

myPQ.insert(11);

console.log('del max: ', myPQ.delMax()); // 11
