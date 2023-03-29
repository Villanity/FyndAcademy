// Bitwise operators are operators that manipulate the individual bits of a binary number in JavaScript. They operate on the individual bits of an integer value rather than on its decimal representation. Bitwise operators are often used in low-level programming to perform operations that require bit-level manipulation of binary data.

// JavaScript provides six bitwise operators:

// Bitwise AND (&): returns a 1 in each bit position where the corresponding bits of both operands are 1.

// Bitwise OR (|): returns a 1 in each bit position where at least one of the corresponding bits of either operand is 1.

// Bitwise XOR (^): returns a 1 in each bit position where the corresponding bits of either but not both operands are 1.

// Bitwise NOT (~): inverts all the bits of its operand. It has the effect of subtracting the operand from -1.

// Left shift (<<): shifts the bits of the left-hand operand to the left by the number of positions specified by the right-hand operand.

// Right shift (>>): shifts the bits of the left-hand operand to the right by the number of positions specified by the right-hand operand.

// Bitwise operators are rarely used in everyday JavaScript programming, but they can be useful in certain situations, such as when you need to manipulate the bits of a binary number.


// Bitwise AND
let a = 5;    // binary 0101
let b = 3;    // binary 0011
let c = a & b; // binary 0001
console.log(c); // Output: 1

// Bitwise OR
let d = 5;     // binary 0101
let e = 3;     // binary 0011
let f = d | e; // binary 0111
console.log(f); // Output: 7

// Bitwise XOR
let g = 5;     // binary 0101
let h = 3;     // binary 0011
let i = g ^ h; // binary 0110
console.log(i); // Output: 6

// Bitwise NOT
let j = 5;    // binary 0101
let k = ~j;   // binary 1010
console.log(k); // Output: -6 (in two's complement representation)

// Left shift
let l = 5;     // binary 0101
let m = l << 2; // binary 010100 (shifted left by 2 positions)
console.log(m); // Output: 20

// Right shift
let n = 5;     // binary 0101
let o = n >> 1; // binary 0010 (shifted right by 1 position)
console.log(o); // Output: 2
