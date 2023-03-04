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
