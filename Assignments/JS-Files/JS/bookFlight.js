// In this example, using var to declare the departureDate variable means that it is function-scoped and accessible throughout the entire function, including the inner block. This results in the value of departureDate being updated to '2023-05-01' inside the inner block, and this updated value being used for the rest of the function.

// Using let to declare departureDate means that it is block-scoped and only accessible within the block it is declared in. This means that the inner block creates a new variable departureDate with a value of '2023-05-01', but this new variable is not accessible outside of the block. The outer departureDate variable retains its original value of '2023-04-01'.

// Using const to declare departureDate means that it is also block-scoped and cannot be reassigned. This means that the inner block creates a new variable departureDate with a value of '2023-05-01', but this new variable is not accessible outside of the block. The outer departureDate variable retains its original value of '2023-04-01' and cannot be updated.

// using var
function bookFlight() {
    var departureDate = '2023-04-01';
    if (true) {
      var departureDate = '2023-05-01';
      console.log(departureDate); // output: '2023-05-01'
    }
    console.log(departureDate); // output: '2023-05-01'
  }
  
  // using let
  function bookFlight() {
    let departureDate = '2023-04-01';
    if (true) {
      let departureDate = '2023-05-01';
      console.log(departureDate); // output: '2023-05-01'
    }
    console.log(departureDate); // output: '2023-04-01'
  }
  
  // using const
  function bookFlight() {
    const departureDate = '2023-04-01';
    if (true) {
      const departureDate = '2023-05-01';
      console.log(departureDate); // output: '2023-05-01'
    }
    console.log(departureDate); // output: '2023-04-01'
  }
  