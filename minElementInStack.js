class Stack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x) {
    this.stack.push(x);
    if (
      this.minStack.length === 0 ||
      x <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(x);
    }
  }

  pop() {
    if (this.stack.length === 0) return;
    if (this.stack.pop() === this.minStack[this.minStack.length - 1])
      this.minStack.pop();
    this.stack.pop();
  }

  findMin() {
    if (this.minStack.length === 0) return -1;
    return this.minStack[this.minStack.length - 1];
  }
}

const stack = new Stack();
stack.push(2);
stack.push(3);
stack.push(1);
console.log(stack.findMin()); // Output: 1
stack.pop();
console.log(stack.findMin());
