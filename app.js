// Like CSS, you could add JavaScript directly to the HTML file, but a recommended best practice is to save your JavaScript in a separate file. Adding your JavaScript code to a separate file makes it easier to reuse it across several web pages. 

'use strict';


// To make the button do something when you select it, you need an event handler in your JavaScript file. An event handler is a way to run a JavaScript function when an event happened on the page. For the button, let's add an event handler for the click event; the event handler function runs when the click event occurs.

// Before you can add the event handler, you need a reference to the button element.

// In your JavaScript file, use document.querySelector to get the button reference.


const switcher = document.querySelector('.btn');

// The document.querySelector function uses CSS selectors, just like the ones you used in your CSS file. switcher is now a reference to the button in the page.

// Next, add the event handler for the click event. In the following code, you add a listener for the click event and define an event handler function to be executed by the browser when the click event occurs.

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    console.log( 'current class name: ' + className);
});

// used the toggle method to modify the <body> element's class attribute. This method automatically adds or removes the light-theme and dark-theme classes. This code applies the dark styles instead of light styles on click, and then light styles instead of dark if you click again.

// However, the label for the button also needs to be updated to show the correct theme, so you need to add an if statement to determine the current theme, and update the button label.

// As a web developer, you can create hidden messages that won't appear on your webpage, but that you can read in the Developer Tools, in the Console tab. Using console messages is helpful for seeing the result of your code.

// Using the console, you can get interesting insights from your JavaScript code. Add more console messages to understand which parts of your code are getting executed and to know the current values of other variables.