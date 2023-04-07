// In JavaScript, classes and objects are fundamental concepts that allow you to create reusable code, define behavior, and organize data. Here are some practical examples of how to implement classes and objects in JavaScript.

// Classes
// A class in JavaScript is a blueprint for creating objects that share the same properties and methods. You can define a class using the class keyword, which allows you to encapsulate data and behavior in a single entity. Here's an example of a Person class:

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  }

//   In this example, we define a Person class that has two properties (name and age) and a method (sayHello). The constructor method is called when a new instance of the class is created and is used to initialize the object's properties. The sayHello method logs a message to the console that includes the person's name and age.

// To create a new instance of the Person class, you can use the new keyword and pass in the required parameters:

const person1 = new Person('John', 30);
person1.sayHello(); // Output: Hello, my name is John and I'm 30 years old.


// Objects
// An object in JavaScript is an instance of a class or a standalone entity that has its own properties and methods. You can create an object using either the class syntax or the object syntax. Here's an example of an object created using the object syntax:

const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    start() {
      console.log(`Starting the ${this.make} ${this.model}.`);
    }
  };

//   In this example, we define a car object that has three properties (make, model, and year) and a method (start). The start method logs a message to the console that indicates the car is being started.

// To access the properties and methods of an object, you can use dot notation or bracket notation:

console.log(car.make); // Output: Toyota
console.log(car['model']); // Output: Camry
car.start(); // Output: Starting the Toyota Camry.


// Both dot notation and bracket notation are valid ways of accessing an object's properties and methods. The main difference is that dot notation is more concise and easier to read, while bracket notation is more flexible and allows you to use dynamic property names.

// Overall, classes and objects are essential concepts in JavaScript that allow you to write modular, reusable, and organized code. By using classes and objects, you can encapsulate data and behavior in a single entity, create instances of that entity, and manipulate its properties and methods.