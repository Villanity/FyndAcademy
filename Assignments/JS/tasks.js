// Let's say you are building a web application that displays a list of tasks for a user to complete. Each task has a title and a description, and the user can mark each task as completed.
// In this example, using var to declare the tasks variable means that it is function-scoped and accessible throughout the entire function, including the for loop. This means that we can access the task variable outside of the loop and use it to display the completed task.

// Using let to declare tasks and task means that they are block-scoped and only accessible within the block they are declared in. This means that we cannot access the task variable outside of the for loop, and trying to do so will result in a reference error.

// Using const to declare tasks means that it is also block-scoped and cannot be reassigned. This means that we cannot push a new task onto the tasks array, as doing so would change the value of the const variable.

// using var
function displayTasks() {
    var tasks = [
      {title: 'Task 1', description: 'Do this'},
      {title: 'Task 2', description: 'Do that'},
      {title: 'Task 3', description: 'Do the other thing'}
    ];
    
    for (var i = 0; i < tasks.length; i++) {
      var task = tasks[i];
      console.log(task.title + ': ' + task.description);
    }
    
    console.log('Completed task: ' + task.title); // output: 'Completed task: Task 3'
  }
  
  // using let
  function displayTasks() {
    let tasks = [
      {title: 'Task 1', description: 'Do this'},
      {title: 'Task 2', description: 'Do that'},
      {title: 'Task 3', description: 'Do the other thing'}
    ];
    
    for (let i = 0; i < tasks.length; i++) {
      let task = tasks[i];
      console.log(task.title + ': ' + task.description);
    }
    
    // trying to access task outside of the loop will result in an error
    console.log('Completed task: ' + task.title); // throws an error: "Uncaught ReferenceError: task is not defined"
  }
  
  // using const
  function displayTasks() {
    const tasks = [
      {title: 'Task 1', description: 'Do this'},
      {title: 'Task 2', description: 'Do that'},
      {title: 'Task 3', description: 'Do the other thing'}
    ];
    
    for (const task of tasks) {
      console.log(task.title + ': ' + task.description);
    }
    
    // trying to reassign tasks will result in an error
    tasks.push({title: 'Task 4', description: 'Do something else'}); // throws an error: "Uncaught TypeError: Assignment to constant variable."
  }
  