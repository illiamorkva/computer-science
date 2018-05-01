/**
225. Implement Stack using Queues
https://leetcode.com/problems/implement-stack-using-queues/description/

Implement the following operations of a stack using queues.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.
Notes:
You must use only standard operations of a queue -- 
which means only push to back, peek/pop from front, size,
and is empty operations are valid.
Depending on your language, queue may not be supported natively.
You may simulate a queue by using a list or deque (double-ended queue),
as long as you use only standard operations of a queue.
You may assume that all operations are valid (for example, no pop or
top operations will be called on an empty stack).
*/

/**
 * Approach #1 Two Queues
 * push - O(1), pop O(n)
 * Initialize your data structure here.
 */
let MyStack = function() {
  this.main = [];
  this.support = [];
};

MyStack.prototype.main = [];
MyStack.prototype.support = [];

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.main.push(x);
};

/**
 * Removes the element on top of the stack
 * and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  while (this.main.length > 1) {
    this.support.push(this.main.shift());
  }

  const pop = this.main.shift();
  
  let temp = this.support;
  this.support = this.main;
  this.main = temp;
  
  return pop;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.main[this.main.length - 1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return !this.main.length ? true : false;
};

//------------------------------------------------

/**
 * Approach #3 One Queue
 * push - O(n), pop O(1)
 * Initialize your data structure here.
 */
MyStack = function() {
  this.main = [];
};

MyStack.prototype.main = [];

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.main.push(x);
  
  let size = this.main.length;
  
  while (size > 1) {
    this.main.push(this.main.shift());
    size--;
  }
};

/**
 * Removes the element on top of
 * the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.main.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.main[0];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return !this.main.length ? true : false;
};
