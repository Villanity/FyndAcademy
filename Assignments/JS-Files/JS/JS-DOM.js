// The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects, which can be manipulated with programming languages like JavaScript.

// Here's an example of how you can use JavaScript to manipulate the DOM: 

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>DOM Example</title>
//   </head>
//   <body>
//     <h1 id="heading">Hello, World!</h1>
//     <button onclick="changeText()">Click me!</button>
//   </body>
// </html>

function changeText() {
    var heading = document.getElementById("heading");
    heading.innerHTML = "Hello, DOM!";
  }

//   In this example, we have an HTML document with a heading and a button. When the button is clicked, the changeText function is called. This function uses the document.getElementById method to retrieve the h1 element with the ID of "heading". Then, the function uses the innerHTML property to change the text inside the h1 element to "Hello, DOM!".

// This is just a simple example, but the DOM can be used to manipulate any part of an HTML document, including adding and removing elements, changing styles, and responding to user events like clicks and keystrokes.


