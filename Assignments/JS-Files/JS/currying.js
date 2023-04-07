// JavaScript currying is a technique used to transform a function that takes multiple arguments into a series of functions that each take a single argument. In other words, currying is the process of breaking down a function into a sequence of functions that each takes a single argument, which can then be chained together.

// Here is an example of currying in JavaScript:

function add(x) {
    return function(y) {
      return x + y;
    }
  }
  
  // Using the add function
  const add5 = add(5); // returns a new function that takes one argument
  console.log(add5(3)); // Output: 8

  
//   In this example, the add function takes one argument x and returns a new function that takes one argument y. The inner function adds x and y together and returns the result.

// To use the add function, you can create a new function that takes one argument by passing in a value for x. In the example above, add(5) returns a new function that takes one argument, so add5 now refers to this new function.

// You can then call the add5 function with an argument 3, which will add 3 to 5 (the value of x passed in earlier) and return the result 8.

// Here's another example of currying with multiple arguments:

function multiply(x) {
    return function(y) {
      return function(z) {
        return x * y * z;
      }
    }
  }
  
  // Using the multiply function
  const multiplyBy3 = multiply(3); // returns a new function that takes one argument
  const multiplyBy3And4 = multiplyBy3(4); // returns a new function that takes one argument
  console.log(multiplyBy3And4(5)); // Output: 60

  
//   In this example, the multiply function takes one argument x and returns a new function that takes one argument y, which in turn returns a new function that takes one argument z. The innermost function multiplies x, y, and z together and returns the result.

// To use the multiply function, you can create a new function that takes one argument by passing in a value for x. In the example above, multiply(3) returns a new function that takes one argument, so multiplyBy3 now refers to this new function.

// You can then create a new function that takes one argument z by calling multiplyBy3(4), which returns another new function that takes one argument. Finally, you can call this new function with an argument 5, which will multiply 3, 4, and 5 (the values of x, y, and z respectively) and return the result 60.