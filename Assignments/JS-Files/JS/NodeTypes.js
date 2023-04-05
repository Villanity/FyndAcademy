// Element nodes: These are the most common type of nodes in JavaScript. They represent HTML elements such as <div>, <p>, and <ul>. You can create, modify, and manipulate element nodes using JavaScript. For example:

// Creating a new element node
const newDiv = document.createElement("div");

// Modifying an existing element node
const heading = document.querySelector("h1");
heading.textContent = "New heading text";

// Manipulating an element's attributes
const image = document.querySelector("img");
image.src = "newimage.jpg";

// Text nodes: These represent the text content within an element node. For example:

{/* <div>Some text here</div> */}

// In this example, "Some text here" is a text node within the <div> element. You can access and modify text nodes using JavaScript. For example:

const paragraph = document.querySelector("p");
const textNode = paragraph.firstChild;
textNode.textContent = "New text content";

// Comment nodes: These represent HTML comments within your code. For example:

// <!-- This is a comment -->

// You can access comment nodes using JavaScript and manipulate them just like any other node. For example:

const comment = document.createComment("This is a comment");
document.body.appendChild(comment);

// Attribute nodes: These represent the attributes of an element node, such as the src attribute of an <img> tag. You can access and modify attribute nodes using JavaScript. For example:

const image = document.querySelector("img");
const srcAttribute = image.getAttribute("src");
image.setAttribute("src", "newimage.jpg");


// Document nodes: These represent the entire HTML document. You can access and manipulate the document node using JavaScript. For example:

const title = document.querySelector("title");
title.textContent = "New page title";

// DocumentType nodes: These represent the <!DOCTYPE> declaration in an HTML document. You can access the DocumentType node using JavaScript. For example:

const doctype = document.doctype;
console.log(doctype.name); // Outputs the name of the document type, such as "html"

// DocumentFragment nodes: These are lightweight containers for a group of nodes. You can use DocumentFragment nodes to manipulate a group of nodes at once and then insert them into the DOM. For example:

const fragment = document.createDocumentFragment();
const p1 = document.createElement("p");
p1.textContent = "Paragraph 1";
const p2 = document.createElement("p");
p2.textContent = "Paragraph 2";
fragment.appendChild(p1);
fragment.appendChild(p2);
document.body.appendChild(fragment);


