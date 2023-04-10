// In JavaScript, there are three flags that can be used in conjunction with regular expressions:

// The "i" flag: This flag stands for "ignore case" and makes the regular expression case-insensitive.

// Example:

const str = "The quick brown fox jumps over the lazy dog.";
const regex = /FOX/i; // match "fox" or "FOX"
console.log(regex.test(str)); // true

// The "g" flag: This flag stands for "global" and makes the regular expression search for all occurrences of the pattern within the string, rather than just the first occurrence.

const str = "The quick brown fox jumps over the lazy dog.";
const regex = /the/gi; // match all occurrences of "the", case-insensitive
console.log(str.match(regex)); // ["The", "the"]

// The "m" flag: This flag stands for "multiline" and makes the regular expression match across multiple lines.

const str = "The quick brown fox\njumps over the lazy dog.";
const regex = /^the/gim; // match "the" at the start of each line, case-insensitive
console.log(str.match(regex)); // ["The", "the"]

// Metacharacters and quantifiers are special characters used in regular expressions to define patterns of text to be matched. Here are some examples of how they can be used in JavaScript:

// Metacharacters:
// a. "." (dot) matches any single character except for line breaks:

const str = "The quick brown fox jumps over the lazy dog.";
const regex = /quick./; // match "quick " and any one character after it
console.log(regex.test(str)); // true

// b. "^" (caret) matches the start of a string:

const str = "The quick brown fox jumps over the lazy dog.";
const regex = /^The/; // match "The" at the start of the string
console.log(regex.test(str)); // true

// c. "$" (dollar sign) matches the end of a string:

const str = "The quick brown fox jumps over the lazy dog.";
const regex = /dog\.$/; // match "dog" at the end of the string
console.log(regex.test(str)); // true

// d. "[]" (square brackets) matches any single character within the brackets:

const str = "The quick brown fox jumps over the lazy dog.";
const regex = /[aeiou]/; // match any vowel
console.log(regex.test(str)); // true

// Quantifiers:
// a. "*" (asterisk) matches zero or more occurrences of the previous character or group:

const str = "The quick brown fox jumps over the lazy dog.";
const regex = /o*/; // match any number of "o" characters
console.log(regex.test(str)); // true

// b. "+" (plus sign) matches one or more occurrences of the previous character or group:

const str = "The quick brown fox jumps over the lazy dog.";
const regex = /o+/; // match one or more "o" characters
console.log(regex.test(str)); // true

// c. "?" (question mark) matches zero or one occurrence of the previous character or group:

const str = "The quick brown fox jumps over the lazy dog.";
const regex = /the\s?quick/i; // match "the" followed by optional whitespace and "quick", case-insensitive
console.log(regex.test(str)); // true

// d. "{n,m}" (curly braces) matches between n and m occurrences of the previous character or group:

const str = "The quick brown fox jumps over the lazy dog.";
const regex = /\d{2,3}/; // match any 2- or 3-digit number
console.log(regex.test(str)); // false

// Regular expressions (regex) are a powerful tool in JavaScript for searching and manipulating text patterns. Here are some common examples of JavaScript regex:

// Matching a specific string:

const str = "Hello World!";
const regex = /Hello/; // match "Hello"
console.log(regex.test(str)); // true

// Matching a character set:

const str = "The quick brown fox jumps over the lazy dog.";
const regex = /[aeiou]/; // match any vowel
console.log(regex.test(str)); // true

// Matching a range of characters:

const str = "The quick brown fox jumps over the lazy dog.";
const regex = /[a-z]/; // match any lowercase letter
console.log(regex.test(str)); // true

// Matching a specific number of characters:

const str = "The quick brown fox jumps over the lazy dog.";
const regex = /\d{3}/; // match any 3-digit number
console.log(regex.test(str)); // false

// Matching a word boundary:

const str = "The quick brown fox jumps over the lazy dog.";
const regex = /\bfox\b/; // match "fox" only when it's a whole word
console.log(regex.test(str)); // true

// Matching a group of characters:

const str = "The quick brown fox jumps over the lazy dog.";
const regex = /(fox|dog)/; // match "fox" or "dog"
console.log(regex.test(str)); // true

// Replacing a pattern in a string:

const str = "The quick brown fox jumps over the lazy dog.";
const regex = /fox/;
const newStr = str.replace(regex, "cat");
console.log(newStr); // "The quick brown cat jumps over the lazy dog."



