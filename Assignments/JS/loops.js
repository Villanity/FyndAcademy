// Example 1: for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  // Output: 0 1 2 3 4
  
  // Example 2: while loop
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  // Output: 0 1 2 3 4
  
  // Example 3: do-while loop
  let j = 0;
  do {
    console.log(j);
    j++;
  } while (j < 5);
  // Output: 0 1 2 3 4

  
// In the first example, we use a for loop to print the numbers from 0 to 4. The loop starts with let i = 0, and will continue as long as i is less than 5. Each time the loop runs, it will print the current value of i (using console.log), and then increment i by 1.

// In the second example, we use a while loop to achieve the same result. We start with let i = 0 again, and use the while keyword to specify that the loop should run as long as i is less than 5. Inside the loop, we print the current value of i and increment it by 1 using i++.

// In the third example, we use a do-while loop to achieve the same result once again. This time, we start with let j = 0, and use the do keyword to specify that we should execute the loop at least once. Inside the loop, we print the current value of j, and increment it by 1 using j++. We then use the while keyword to specify that the loop should continue as long as j is less than 5.