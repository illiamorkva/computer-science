/**
232. Implement Queue using Stacks
https://leetcode.com/problems/implement-queue-using-stacks/description/

Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.

Notes:
You must use only standard operations of a stack -- which means only push to top,
peek/pop from top, size, and is empty operations are valid.
Depending on your language, stack may not be supported natively. You may simulate
a stack by using a list or deque (double-ended queue), as long as you use only standard
operations of a stack.
You may assume that all operations are valid (for example, no pop or peek operations
will be called on an empty queue).
*/

/**
 * My Two Stacks
 * Initialize your data structure here.
 */
let MyQueue = function() {
  this.main = [];
  this.support = [];
};

MyQueue.prototype.main  = [];
MyQueue.prototype.support  = [];

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.main.push(x);
};

/**
 * Removes the element from in front of queue
 * and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  while (this.main.length) {
    this.support.push(this.main.pop());
  }
  
  const pop = this.support.pop();
    
  while (this.support.length) {
    this.main.push(this.support.pop());
  }
  
  return pop;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  while (this.main.length) {
    this.support.push(this.main.pop());
  }
  
  const peek = this.support[this.support.length - 1];
    
  while (this.support.length) {
    this.main.push(this.support.pop());
  }
  
  return peek;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.main.length === 0 ? true : false;
};

//--------------------------------------------------

/**
 * Approach #2 Two Stacks
 * Push - O(1) per operation,
 * Pop - Amortized O(1) per operation.
 * 
 * Initialize your data structure here.
 */
MyQueue = function() {
  this.main = [];
  this.support = [];
};

MyQueue.prototype.main  = [];
MyQueue.prototype.support  = [];
MyQueue.prototype.front  = null;

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  if (!this.main.length) {
    this.front = x;
  }
  this.main.push(x);
};

/**
 * Removes the element from in front of queue
 * and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (!this.support.length) {
    while (this.main.length) {
      this.support.push(this.main.pop())
    }
  }
  
  return this.support.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.support.length) {
    return this.support[this.support.length - 1];
  }
  
  return this.front;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return !this.main.length && !this.support.length ? true : false;
};

/**
 * Example of Stack implementation in js
 */
const stack = new Stack();

const Stack = function() {
  const list = [];

  this.push = (x) => {
      list.push(x);
  };
  this.bottom = () => list[list.length - 1];
  this.pop = () => list.pop();
  this.isEmpty = () => list.length === 0;
}