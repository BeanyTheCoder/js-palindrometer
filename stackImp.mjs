// stack implementation

// start in quokka.js extension(if you don't have it yet, install it from Extensions Tab in VS code):
// press ctrl+shift+p, then in the search box, type "Quokka.js: Start On Current File" and hit enter
// note: you need the pro version of quokka to use imports!(if you dont have it, just copy the code from "stack.mjs")

// or alternatively, use node.js:
// press ctrl+shift+` to start a new terminal, then navigate into this folder(using cd) and type "node stackImp.mjs"

import Stack from "./stack.mjs";

function isPalindrome(string) {
  const stack = new Stack();
  // remove any characters thats not a letter or number
  const pureString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  for (let char of pureString) {
    stack.push(char);
  }

  let reversedString = "";

  // while stack is not empty, add each character onto the reversedString, and pop it off the stack
  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }

  return pureString === reversedString;
}

// Test cases
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("Madam, am Adam.")); // Output: true
