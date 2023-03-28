// Explanation:

// var is function-scoped, meaning that variables declared with var are accessible throughout the entire function, regardless of block scope. In the first example, we declare x with var outside the block, and then re-declare it inside the block with var. This results in x being updated to 20 throughout the function.
// let is block-scoped, meaning that variables declared with let are only accessible within the block they are declared in. In the second example, we declare y with let, and then re-declare it inside the block with let. This creates a new variable y that is only accessible within the block.
// const is also block-scoped, and like let, it can only be declared once. However, once a value is assigned to a const variable, it cannot be reassigned. In the third example, we declare z with const, and then re-declare it inside the block with const. This creates a new variable z that is only accessible within the block. When we try to reassign a in the fourth example, we get an error because a is a constant and its value cannot be changed.

// using var
var x = 10;
console.log(x); // output: 10
{
  var x = 20;
  console.log(x); // output: 20
}
console.log(x); // output: 20

// using let
let y = 10;
console.log(y); // output: 10
{
  let y = 20;
  console.log(y); // output: 20
}
console.log(y); // output: 10

// using const
const z = 10;
console.log(z); // output: 10
{
  const z = 20;
  console.log(z); // output: 20
}
console.log(z); // output: 10

// trying to reassign const value
const a = 10;
a = 20; // will throw an error: "Uncaught TypeError: Assignment to constant variable."




