// Lexical scoping is a mechanism used by programming languages to determine the scope, or accessibility, of a variable or function based on where it is defined in the source code. In JavaScript, lexical scoping means that the scope of a variable or function is determined by its location within the source code's nested hierarchy of blocks and functions.

// A closure is a function that retains access to the variables and parameters of the outer (enclosing) function's lexical scope, even after the outer function has completed execution. Closures are created when a function is defined inside another function and then returned or passed as an argument to another function.

// In JavaScript, closures are commonly used to create private variables and functions, as well as to implement higher-order functions and callbacks.

// Here is an example of lexical scoping and closures in JavaScript:

// Lexical scoping is a mechanism used by programming languages to determine the scope, or accessibility, of a variable or function based on where it is defined in the source code. In JavaScript, lexical scoping means that the scope of a variable or function is determined by its location within the source code's nested hierarchy of blocks and functions.

// A closure is a function that retains access to the variables and parameters of the outer (enclosing) function's lexical scope, even after the outer function has completed execution. Closures are created when a function is defined inside another function and then returned or passed as an argument to another function.

// In JavaScript, closures are commonly used to create private variables and functions, as well as to implement higher-order functions and callbacks.

// Here is an example of lexical scoping and closures in JavaScript:


function outer() {
    var x = 10;
    function inner() {
      console.log(x);
    }
    return inner;
  }
  
  var closure = outer();
  closure(); // logs 10
  
//   In this example, the outer function defines a variable x and a nested function inner. The inner function has access to the x variable because it is defined in the same lexical scope as x. When outer is called, it returns the inner function, which is then assigned to the variable closure. When closure is called, it logs the value of x, which is still accessible because of the closure.