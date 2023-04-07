// In JavaScript, == (double equals) and === (triple equals) are comparison operators used to compare two values for equality. However, there is a significant difference between these two operators that can lead to unexpected results if not used properly.

// The main difference between == and === is the way they handle type coercion. Type coercion is the process of converting a value from one type to another. Here's how each operator handles type coercion:

// == (double equals) operator: performs type coercion if the operands are of different types. This means that it converts one or both of the operands to a common type before making the comparison. For example, the expression 5 == "5" would be true because the string "5" is coerced to the number 5 before the comparison.

// === (triple equals) operator: does not perform type coercion. It only returns true if the operands are of the same type and have the same value. For example, the expression 5 === "5" would be false because the operands are of different types.

// Here's an example that illustrates the difference between == and ===:

console.log(5 == "5"); // Output: true (type coercion is performed)
console.log(5 === "5"); // Output: false (no type coercion is performed)

// It's generally recommended to use === (triple equals) operator instead of == (double equals) operator as it reduces the chances of unexpected results and makes the code more readable. However, there may be situations where type coercion is desired, in which case == (double equals) operator can be used with caution.