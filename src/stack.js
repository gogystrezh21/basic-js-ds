const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(){ 
    this.stack=[]; 
}
  push(el) {
    this.stack.push(el)
    // remove line with error and write your code here
  }
  pop() {
    const G=this.stack[this.stack.length-1]
    this.stack.pop()
    return G
    // remove line with error and write your code here
  }
  peek() {
    return this.stack[this.stack.length-1]
    // remove line with error and write your code here
  }
}

module.exports = {
  Stack
};
