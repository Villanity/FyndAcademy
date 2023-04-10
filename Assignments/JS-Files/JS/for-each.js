// The forEach() method in JavaScript is used to execute a provided function once for each array element.

// Here's an example of using forEach() to loop through an array and log each element to the console:

const myArray = [1, 2, 3];

myArray.forEach(function(element) {
  console.log(element);
});

// The map() method in JavaScript is used to create a new array with the results of calling a provided function on every element in the original array.

// Here's an example of using map() to create a new array with each element doubled:

const myArray = [1, 2, 3];

const doubledArray = myArray.map(function(element) {
  return element * 2;
});

console.log(doubledArray); // Output: [2, 4, 6]

// The filter() method in JavaScript is used to create a new array with all elements that pass the test implemented by the provided function.

// Here's an example of using filter() to create a new array with only the even numbers from an array:

const myArray = [1, 2, 3, 4, 5, 6];

const evenArray = myArray.filter(function(element) {
  return element % 2 === 0;
});

console.log(evenArray); // Output: [2, 4, 6]

// The reduce() method in JavaScript is used to apply a function to each element in an array to reduce the array to a single value.

// Here's an example of using reduce() to find the sum of all elements in an array:

const myArray = [1, 2, 3, 4, 5];

const sum = myArray.reduce(function(total, element) {
  return total + element;
});

console.log(sum); // Output: 15
