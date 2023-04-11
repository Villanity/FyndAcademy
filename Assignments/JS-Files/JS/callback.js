// In JavaScript, a callback function is a function that is passed as an argument to another function and is then called within that function. Callback functions are commonly used in asynchronous programming, where a function needs to wait for a long-running operation (such as a database query or API request) to complete before executing the next set of instructions.

// Here's an example to illustrate the concept of callback functions:

function getData(callback) {
    setTimeout(() => {
      const data = [1, 2, 3, 4, 5];
      callback(data);
    }, 2000);
  }
  
  function processData(data) {
    console.log(data.map(num => num * 2));
  }
  
  getData(processData);

//   In this example, getData is a function that simulates a network request by waiting for 2 seconds before returning an array of numbers. processData is a callback function that takes the returned data as an argument and processes it by multiplying each number by 2 and logging the result to the console.

// The getData function takes a callback function as an argument and passes the data to it once it's ready. In this case, processData is the callback function that's passed to getData as an argument.

// When getData is called with processData as its argument, getData waits for 2 seconds before calling the processData function with the data as its argument. Once the processData function receives the data, it processes it and logs the result to the console.

// In summary, callback functions in JavaScript allow you to pass a function as an argument to another function and execute that function once the original function has completed its task. They are a powerful tool for handling asynchronous operations and can make your code more modular and flexible.