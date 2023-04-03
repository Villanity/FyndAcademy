// Variable hoisting is a JavaScript behavior where variable declarations are moved to the top of their scope, regardless of where the actual declaration appears in the code.

// Here's an example of variable hoisting in JavaScript:

x = 5; // Assign 5 to x

console.log(x); // Output: 5

var x; // Declare x

// In the above example, the variable x is assigned the value of 5 before it is actually declared. This is possible because JavaScript hoists the variable declaration to the top of the current scope.

// Another example:

console.log(x); // Output: undefined

var x = 5; // Declare and assign 5 to x

// In the above example, the variable x is declared and assigned a value of 5 after it is referenced in the console.log() statement. However, JavaScript still hoists the declaration to the top of the current scope, so x is defined but not yet assigned a value when it is logged to the console. Therefore, the output is undefined.