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
