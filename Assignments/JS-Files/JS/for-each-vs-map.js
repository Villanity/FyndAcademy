// The forEach() and map() methods in JavaScript are both used to iterate over elements in an array, but they have some important differences.

// The forEach() method is used to execute a provided function once for each element in the array. The function does not return a new array, but instead, it can be used to perform some action for each element in the array. For example, you can use forEach() to log each element to the console or update the elements of the original array.

// Here's an example of using forEach() to log each element to the console:

const myArray = [1, 2, 3];

myArray.forEach(function(element) {
  console.log(element);
});

// In contrast, the map() method is used to create a new array with the results of calling a provided function on every element in the original array. The function returns a new value for each element in the array, which is used to create a new array with the same number of elements. This means that map() can be used to transform the original array into a new array with modified elements.

// Here's an example of using map() to create a new array with each element doubled:

const myArray = [1, 2, 3];

const doubledArray = myArray.map(function(element) {
  return element * 2;
});

console.log(doubledArray); // Output: [2, 4, 6]

// In summary, the forEach() method is used to perform an action on each element in the array, while the map() method is used to create a new array with modified elements.