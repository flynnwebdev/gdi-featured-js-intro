---
theme : "moon"
highlightTheme : "agate"
---

<style>
    .reveal .slides {
      zoom: 1 !important;
      height: auto !important;
    }
    .reveal .slides section {
      top: 50% !important;
      transform: translateY(-50%) !important;
      zoom: 0.75 !important;
    }
    .reveal pre {
        width: 100% !important;
    }
    .reveal section pre code {
        overflow: hidden !important;
        max-height: none !important;
        white-space: pre-wrap !important;
    }
</style>

# JavaScript

## JSON &amp; Events

---

## What is JSON?

* JSON stands for JavaScript Object Notation

* JSON is a lightweight data-interchange format

* JSON is "self-describing" and easy to understand

* JSON is language independent

  * JSON uses JavaScript syntax, but the JSON format is text only. Text can be read and used as a data format by any programming language.

---

## Why use JSON?

The HTTP protocol only supports text, so any kind of binary data (eg. file uploads, objects, etc...) must be encoded in a text format first.

Since the JSON format is text only, it can easily be sent to and from a server, stored in a file, imported and exported by various software, and used as a data format by any programming language.

Another advantage is that JSON is human-readable and human-editable.

---

## JSON Syntax

JSON is based on Javascript objects, and the syntax is near identical.

```
let personJSON = '{
  "name" : "John",
  "age" : 31,
  "city" : "New York",
  "hobbies" : [
    "Hiking",
    "Reading",
    "Cooking"
  ]
}'
```

* Square brackets for arrays
* Braces for objects
* Double quotes for strings and keys
* Key-value pairs separated by a colon
* Unlike JS objects, **keys must be delimited by double quotes**
* Remember that JSON is just a string representation of an object, not an object itself

---

## Parsing JSON

Given a valid JSON string, we can parse it to generate Javascript objects that we can use in our code.

```
let personJSON = '{
  "name" : "John",
  "age" : 31,
  "city" : "New York",
  "hobbies" : [
    "Hiking",
    "Reading",
    "Cooking"
  ]
}'

let person = JSON.parse(personJSON)
console.log(person.name)  // John
console.log(person.hobbies[1])  // Reading
```

The JSON object is built-in to the browser.

---

## Stringify

We can also do the reverse and convert Javascript objects to a JSON string.

```
let books = []
books.push({
  title: "IT",
  author: "Stephen King"
})
books.push({
  title: "Foundation",
  author: "Isaac Asimov"
})

console.log(JSON.stringify(books))

// [{"title":"IT","author":"Stephen King"},{"title":"Foundation","author":"Isaac Asimov"}]

```

---

## Events

![Lego Magician](dist/img/magician.jpg)

Photo credit: [Eva Peris](https://flic.kr/p/9hBrtv) [cc](http://creativecommons.org/licenses/by-nc/2.0/)

---

## Events

An **[event](https://developer.mozilla.org/en-US/docs/Web/Events)** is an object that is sent when actions take place on your webpage, most often when a user interacts with your webpage.

  

For example, JavaScript creates an event when a user clicks an element.

```
element.addEventListener('click', function(event) {
  // code to be executed when user clicks
})

```

---

## Types of Events

There are a [variety of events](https://developer.mozilla.org/en-US/docs/Web/Events). Some of the more common events are:

*   **[click](https://developer.mozilla.org/en-US/docs/Web/Events/click):** Occurs when the user clicks on an element
*   **[mouseover](https://developer.mozilla.org/en-US/docs/Web/Events/mouseover):** Occurs when the pointer is moved onto an element
*   **[mouseout](https://developer.mozilla.org/en-US/docs/Web/Events/mouseout):** Occurs when the pointer is moved off an element
*   **[keyup](https://developer.mozilla.org/en-US/docs/Web/Events/keyup):** Occurs when the user releases a key
*   **[load](https://developer.mozilla.org/en-US/docs/Web/Events/load_(ProgressEvent%29) :** Occurs when a document has been loaded
*   **[focus](https://developer.mozilla.org/en-US/docs/Web/Events/focus):** Occurs when an element gets focus
*   **[blur](https://developer.mozilla.org/en-US/docs/Web/Events/blur):** Occurs when an element loses focus

---

## Calling Functions from HTML

You can call a function directly from your HTML code:

```
<button id="myBtn" onclick="sayHi()">Click Me!</button>

```

```
function sayHi (event) {
  alert('Hi!')
}
```

---

## Calling Functions from JavaScript

You can call a function from the addEventListener:

```
<button id="myBtn">Click Me!</button>

```

```
let button = document.getElementById("myBtn")

button.addEventListener("click", function (event) {
  alert("Hi!")
})
```

or

```
let button = document.getElementById("myBtn")

let sayHi = function (event) {
  alert("Hi!")
}

button.addEventListener("click", sayHi)
```

---

## Let's Develop It

Go back to the sample files you downloaded earlier.

Make some JavaScript code fire after a `mouseover` event.

---

## Preventing Defaults

![A cat resisting a bath](dist/img/donotwant.jpg)

---

## Preventing Defaults

Elements like links and checkboxes have default behaviors determined by the browser. However, the `event` object has a built-in method to [prevent the default behavior](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

Our anchor link in HTML

```
<a id="myLink" href="https://www.coderacademy.edu.au">GDI</a>

```

Code to prevent going to link's href on click

```
let link = document.getElementById("myLink")

link.addEventListener("click", function(event) {
  event.preventDefault()
})

```

---

## currentTarget

![Lighted arrow sign pointed downward](dist/img/arrow.jpg)

Photo credit: [Alan Berning](https://flic.kr/p/6ei68A) [cc](http://creativecommons.org/licenses/by-nc/2.0/)

---

## currentTarget

The event's `[currentTarget](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)` references the element the event listener was attached to.

Our button in HTML:

```
<button id="myBtn">Click Me!</a>
```

This code adds styles and text to our clicked button

```
myButton = document.getElementById("myBtn")

myButton.addEventListener("click", function(event) {
  btn = event.currentTarget

  btn.style.backgroundColor = 'red'
  btn.innerHTML = 'Clicked!'
}
```

You may also see code that references the keyword `[this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)` as the "target".

---

## Let's Develop It

Write code that targets this link:

```
<a href="http://coderacademy.edu.au/" id="gdiLink">Coder Academy</a>

```

When a user clicks the link, the page should display an error message instead of going to the Coder Academy homepage.

---

## User Input

![Comment box](dist/img/comment-box.jpg)

Photo credit: [Rym DeCoster](https://flic.kr/p/fnZ4RT) [cc](http://creativecommons.org/licenses/by-nc/2.0/)

---

## Forms

You can collect information from users to use in your code. The most common method is an HTML form

```
<form id="userForm">
  <label for="name">First Name:</label>
  <input type="text" id="firstName"/>
  <input type="radio" name="married" value="Yes" checked /> Yes
  <input type="radio" name="married" value="No" /> No
  <input type="submit" id="submitBtn" value="Submit" />
</form>

```

---

## Retrieving Form Data

You retrieve the values of form elements using the `value` method.

```
let name = document.getElementById('firstName').value
console.log(name)

```

You can retrieve the value of a form at any time. Even when an event like `blur` is triggered (when a form element loses focus).

---

## Radio Buttons

Radio buttons usually do not have IDs, so you will need to use a `for` loop to get the value on each radio:

```
let radios = document.getElementsByName('married')

let length = radios.length

for (let i = 0 i < length i++) {
  if (radios[i].checked) {
    let radioButtonValue = radios[i].value
    // only one radio can be checked, so stop now
    break
  }
}

```

---

## Submit buttons

If you are going to retrieve form values with the submit button, be sure to prevent the default action!

```
let submitButton = document.getElementById('submitBtn')

submitButton.addEventListener("click", function(event) {
  event.preventDefault()

  let name = document.getElementById('firstName').value
  console.log(name)
})

```

---

## Let's Develop It

Collect a value from the input box on the page. Use it inside a function of some kind. For example, collect a number and multiply it by five or collect a name and display a greeting.

---

## Resources

### EVENTS

[Eloquent Javascript Events chapter](http://eloquentjavascript.net/15_event.html)

[Mozilla Events Guide](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events)

[W3Schools JS Events practice exercises](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_events1)

### JSON

[Mozilla JSON Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

[W3Schools JSON tutorial](https://www.w3schools.com/js/js_json_intro.asp)

---

# Questions?

---

## AFTERNOON CHALLENGE

### [Canvas Unit: JSON](https://coderacademy.instructure.com/courses/144/pages/unit-json)

### [Canvas Unit: DOM &amp; Web API](https://coderacademy.instructure.com/courses/144/pages/unit-dom-and-web-apis)

