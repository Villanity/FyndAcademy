// The for loop:
// The for loop is the most commonly used loop in JavaScript. It allows you to loop over a block of code a specified number of times.

for (let i = 0; i < 5; i++) {
    console.log(i);
  }

//   In the above example, the loop will run 5 times and log the values of i to the console from 0 to 4.

//   The for...in loop:
//   The for...in loop is used to loop through the properties of an object.
  
  const person = {
    name: 'John',
    age: 30,
    gender: 'male'
  };
  
  for (let key in person) {
    console.log(key + ': ' + person[key]);
  }

//   In the above example, the loop will iterate through each property of the person object and log the key-value pairs to the console.

//   The for...of loop:
//   The for...of loop is used to loop through iterable objects, such as arrays or strings.

  const numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
  console.log(num);
}

// In the above example, the loop will iterate through each element of the numbers array and log the value to the console.

// Note: The for...of loop cannot be used with objects, as objects are not iterable.