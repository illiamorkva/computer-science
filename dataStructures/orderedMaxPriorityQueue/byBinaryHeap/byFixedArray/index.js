class MaxPQ {
  constructor(capacity) {
    this._pq = new Array(capacity + 1);
    this._N = 0;
  }

  // PQ operations ---------------------

  isEmpty() {
    return this._N == 0;
  }

  /*
  * Average/Amortized Time Complexity
  * O(log N)
  * Worst Time Complexity
  * O(log N)
  */
  insert(key) {
    this._pq[++this._N] = key;

    this._swim(this._N);
  }

  /*
  * Average/Amortized Time Complexity
  * O(log N)
  * Worst Time Complexity
  * O(log N)
  */
  delMax() {
    const max = this._pq[1];

    this._exch(1, this._N--);

    this._sink(1);

    // prevent loitering
    this._pq[this._N + 1] = null;

    return max;
  }

  print() {
    const stringToPrint = this._pq.join(' ');

    console.log(stringToPrint);
  }
  // -----------------------------------

  // heap helper functions -------------

  _swim(k) {
    // parent of node at k is at k / 2
    while (k > 1 && this._less(parseInt(k / 2), k)) {
      this._exch(k, parseInt(k / 2));

      k = parseInt(k / 2);
    }
  }

  _sink(k) {
    while (2 * k <= this._N) {
      let j = 2 * k;

      // children of node at k are 2 * k and 2 * k + 1
      if (j < this._N && this._less(j, j + 1)) {
        // choose larger child because we will exchange key
        // in parent with key in larger child
        j++;
      }

      if (!this._less(k, j)) {
        break;
      }

      this._exch(k, j);

      k = j;
    }
  }

  // -----------------------------------

  // array helper functions ------------
  
  _less(i, j) {
    return this._pq[i].localeCompare(this._pq[j]) < 0;
  }

  _exch(i, j) {
    const temp = this._pq[i];
    this._pq[i] = this._pq[j];
    this._pq[j] = temp;
  }

  // -----------------------------------
}

const heap = new MaxPQ(10);

heap.insert('T');
heap.insert('P');
heap.insert('R');
heap.insert('N');
heap.insert('H');
heap.insert('O');
heap.insert('A');
heap.insert('E');
heap.insert('I');
heap.insert('G');

heap.print();

heap.insert('S');

heap.print();

heap.delMax();

heap.print();

heap.delMax();

heap.print();

heap.insert('S');

heap.print();
