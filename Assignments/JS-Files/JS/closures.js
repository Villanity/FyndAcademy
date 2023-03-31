// In JavaScript, a closure is a function that has access to variables defined outside of its own scope, even after the outer function has returned. This is made possible by the fact that functions in JavaScript are first-class objects that can be assigned to variables, passed as arguments to other functions, and returned from functions.

// Here's an example of a closure in JavaScript:

function outerFunction() {
    var outerVariable = 'Hello';
  
    function innerFunction() {
      console.log(outerVariable + ' World!');
    }
  
    return innerFunction;
  }
  
  var closure = outerFunction();
  closure(); // Output: 'Hello World!'

