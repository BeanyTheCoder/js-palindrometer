// stack class for "stackImp.mjs"

export default class Stack {
  constructor(initialValue) {
    // if initialValue is not an array, or no value is passed, just set this.dataStore to an empty array(instead of undefined or others)
    if (Array.isArray(initialValue) !== true) {
      this.dataStore = [];
    } else {
      this.dataStore = initialValue;
    }
    this.size = this.dataStore.length;
  }

  push(value) {
    // if value passed in an array, destructure and add each element individually
    if (Array.isArray(value)) {
      value.forEach((element) => {
        this.dataStore[this.size++] = element;
      });
    } else {
      // else, add the value
      this.dataStore[this.size++] = value;
    }
  }

  pop() {
    // removes element at the end of the stack, decrements this.size, then return the value removed
    return this.dataStore.splice(this.size-- - 1, 1);
  }

  peek() {
    // returns the value the end(technically called top) of the stack
    return this.dataStore[this.size - 1];
  }

  clear() {
    // clears the stack
    this.dataStore = [];
    this.size = 0;
  }

  isEmpty() {
    // returns a boolean based on whether or not the stack is empty
    return this.size === 0;
  }
}
