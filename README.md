1. (a) getElementById ?
   Ans: When someone selects a single element by its id then it is called getElementById

Example:

    html:
        <h1 id="heading">This is heading</h1>
    js:
        const headingElement = document.getElementById("heading");


(b) getElementsByClassName ?
    Ans: When someone selects all elements that have the given class.

Example: 

    html:
        <p class="ph">Programming Hero</p>
    js:
        const ph = document.getElementsByClassName("ph");


(c) querySelector ?
    Ans: When someone selects the first element that matches a CSS selector.


Example: 

    html:
        <div>JavaScript</div>
    js:
        const divElement = document.querySelector("div");


(d) querySelectorAll ?
    Ans: When someone selects all elements that match a CSS selector.

Example: 

    html:  
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
    js:
        const cardElements = document.querySelectorAll(".card");


2. How do you create and insert a new element into the DOM?

Example: 

    html:  
        <h1 id="heading">This is heading</h1>
    js: 
        const newDiv = document.createElement("div");
        newDiv.textContent = "I'm new here!";
        newDiv.className = "highlight";

        const header = document.getElementById("header");
        header.insertAdjacentElement("afterend", newDiv);


3. What is Event Bubbling and how does it work?

Ans: Event Bubbling is a process of event in JavaScript, where when an event occurs on a child (inner element), it first acts on that element, then gradually moves up to its parent  -> grandparent -> the entire document.

  firstly work in the child element
        secondly work on the parent element
            in third work on the grandParent element.
