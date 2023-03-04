/**
 * @author Salman
 * Copyright (c) 4-3-2023, Salman
 * 
 * === HTML DOM Manipulation with JavaScript ===
 * 
 * Add/modify/remove text
 * Add/modify/remove HTML elements
 * Add/modify/remove built-in attributes
 * Add/modify/remove custom attributes
 * 
 * API request with AJAX
 * Add/modify/remove HTML markup, text content, and attributes value from the API response

 */

/* 
    1. Add/modify/remove text:
    To add text to an HTML element using JavaScript, you can use the textContent or innerHTML or innerText property. Example: ⬇️⬇️⬇️
 */

// Adding text to an HTML element
document.getElementById("my-element").textContent = "Hello, world!"; // innerText || textContent

// Modifying text of an HTML element
document.getElementById("my-element").textContent = "Goodbye, world!"; // innerText || textContent

// Removing text from an HTML element
document.getElementById("my-element").textContent = ""; // innerText || textContent

/* 
    innerText   === Text displayed in browser.
    textContent === Main text 
*/

/* 
    2. Add/modify/remove HTML elements:

    To add or modify HTML elements using JavaScript, you can use the createElement, appendChild, insertBefore, replaceChild, and removeChild methods. Example: ⬇️⬇️⬇️
*/

// Adding an HTML element
let divElement = document.createElement("div");
document.body.appendChild(divElement);

// Modifying an HTML element
let oldElement = document.getElementById("my-element");
let newElement = document.createElement("p");
newElement.textContent = "New text";

oldElement.parentNode.replaceChild(newElement, oldElement);

// Removing an HTML element
let elementToRemove = document.getElementById("my-element");

elementToRemove.parentNode.removeChild(elementToRemove);

/* 
   3. Add/modify/remove built-in attributes:

    To add or modify built-in HTML attributes using JavaScript, you can use the setAttribute, getAttribute, and removeAttribute methods. Example: ⬇️⬇️⬇️
*/

// Adding a built-in attribute
document.getElementById("my-element").setAttribute("class", "new-class");

// Modifying a built-in attribute
document
  .getElementById("my-element")
  .setAttribute("class", "old-class new-class");

// Removing a built-in attribute
document.getElementById("my-element").removeAttribute("class");

/* 
   4. Add/modify/remove custom attributes:

    To add or modify custom HTML attributes using JavaScript, you can use the getAttribute || setAttribute || dataset property. Example: ⬇️⬇️⬇️
*/

let myElement = document.getElementById("my-element");

// Adding a custom attribute

myElement.getAttribute("class"); // Attribute name and return value

myElement.dataset.myAttribute = "my-value"; // dataset

// Modifying a custom attribute

myElement.setAttribute("class", "bg-red"); // 1 is attribute name and 2 is new value

myElement.dataset.myAttribute = "new-value"; // dataset

// Removing a custom attribute
delete myElement.dataset.myAttribute;

/* 
    To be more clear : link--> https://youtu.be/7Q6VPgouqzk
*/
