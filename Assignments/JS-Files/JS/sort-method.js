// To sort an array of strings alphabetically in JavaScript, you can use the sort() method. Here's an example:

const fruits = ["banana", "apple", "orange", "grape"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "grape", "orange"]

// By default, the sort() method sorts elements alphabetically. If you want to sort in descending order, you can pass a comparison function to sort(), like this:

const fruits = ["banana", "apple", "orange", "grape"];
fruits.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
});
console.log(fruits); // ["orange", "grape", "banana", "apple"]

// In this example, the comparison function takes two arguments a and b, which are two elements being compared. If a is greater than b, the function returns -1, indicating that a should come before b. If a is less than b, the function returns 1, indicating that b should come before a. If a and b are equal, the function returns 0, indicating that their order doesn't matter.
