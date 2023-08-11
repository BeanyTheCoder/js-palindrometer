// default implementation

// start in quokka.js extension(if you don't have it yet, install it from Extensions Tab in VS code):
// press ctrl+shift+p, then in the search box, type "Quokka.js: Start On Current File" and hit enter

// or alternatively, use node.js:
// press ctrl+shift+` to start a new terminal, then navigate into this folder(using cd) and type "node defaultImp.mjs"

function isPalindrome(string) {
  // remove any characters thats not a letter or number
  const pureString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  // reverse the pureString by spliting it into an array, reversing that array, and joining everything back
  const reversedString = pureString.split("").reverse().join("");

  return pureString === reversedString;
}

// Test cases
console.log(isPalindrome("kayak")); // Output: true
console.log(isPalindrome("cakes")); // Output: false
console.log(isPalindrome("Mr. Owl ate my metal worm.")); // Output: true
