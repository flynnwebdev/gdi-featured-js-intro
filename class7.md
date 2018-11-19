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
    .reveal img {
        border: none !important;
        background: none !important;
    }
</style>


# Callbacks and More jQuery

---

## JS Callbacks

A callback function is a regular JS function that is passed to a second function. The second function will run the callback when it's finished. 

```
let sayHello = function (name) {
  console.log("Hello, " + name + "!")
}

let textAFriend = function (name, callback) {
  callback(name)
}

//call the function with a named callback function
textAFriend("John", sayHello)
        		
```

Callbacks are useful when we want to do something when a long running process finishes, but don't want to have the rest of our code wait for it.

---

## JS Callbacks

We can also use an anonymous function

```
function say(name, callback) {
  // simulate a long-running process, eg. fetch a remote URL
  setTimeout(function() {
    callback(name.toUpperCase())
  }, 3000)
}
// call the function with an anonymous callback function
say("John", function() {
  console.log("You are awesome " + name + "!")
})
// call it again, but do something different
say("Groot", function() {
  alert(`I am ${name}!`)
})
console.log('This can execute while waiting for say() to finish')
```

Callbacks allow asynchronous execution of code.

They also allow us to re-use the base function but have different things happen when it finishes.

---

## Events

Event handler functions are callbacks that are invoked when the given event occurs to the given object.
```
// First Example, with named callback & .on
function onButtonClick() {
  console.log('clicked!')
}
$('button').on('click', onButtonClick)

// Second Example, with anonymous callback & .on
$('button').on('click', function () {
  console.log('clicked!')
})

```

*   [Keyboard Events](http://api.jquery.com/category/events/keyboard-events/) `'keydown'` `'keypress'` `'keyup'`
*   [Mouse Events](http://api.jquery.com/category/events/mouse-events/) `'click'` `'mousedown'` `'mouseup'` `'mousemove'`
*   [Form Events](http://api.jquery.com/category/events/form-events/) `'change'` `'focus'` `'blur'`

---

## Events

Preventing Default Events using jQuery

```js
// default event for clicking on link is to go to new page
$('a').on('click', function (event) {
  event.preventDefault()
  console.log('Not going there!')
})
```

```js
// default event is to submit form and reload page
$('form').on('submit', function (event) {
  event.preventDefault()
  console.log('Not submitting, time to validate!')
})
```

---

## Effects & Animation
  
```
// on page load (we'll see how to do this later)
$('.kitty-image').show(3000) // show after 3 seconds

$('.kitty-image').fadeIn(3000) // fade in over 3 seconds

// with an event handler, as a callback
$('button').click(function() {
  $('.kitty-image').show() // show immediately
})

// change text color of any button to red when hovered
$('button').mouseover(function(){
  $(this).css('color', 'red')
})
```

---

## Let's Develop It!

[Events and Animation Exercise](exercises/exercise_events.html)

Work in pairs, and don't forget to use the [jQuery documentation](https://api.jquery.com/)

---

## jQuery Plugins

  
"If you want to create an animation, effect, or UI component, chances are pretty good that someone has done the work for you already."

### [plugins.jquery.com](http://plugins.jquery.com)

  
  

[Which plugin should you pick?](http://blog.pamelafox.org/2013/07/which-javascript-library-should-i-pick.html)

---

## jQuery Plugin Usage

*   Download the plugin and associated files from the site or github repo.
*   Copy them into your project folder.
*   In the HTML, reference any associated CSS files.

```
<link rel="type/stylesheet" type="text/css" href="tablesorter.css">
```

*   In the HTML, add a `<script>` tag for the jQuery plugin itself.

```
<script src="lib/tablesorter.js"><script>
```

*   In the JavaScript, call the jQuery plugin on your DOM.

```
$('table').tableSorter()
```

---

## Let's Develop It!

[Slick Slider](http://kenwheeler.github.io/slick/) is a widely used jQuery plugin that converts a simple HTML list of items into a fully-featured slideshow/carousel.

Use Slick to convert your list of videos from the previous exercise into a slider.

Work in pairs. You'll need to spend some time reading the linked site to figure out how to install and use the plugin.

---

## jQuery Patterns


**Pattern:** name variables that contain a jQuery object with $

```
let $mylet = $('#myNode')
```

---

## Chaining

**Pattern:** chain calls on the same entity.

```
banner.css('color', 'red')
banner.html('Welcome!')
banner.show()
```

Is the same as:

```
banner.css('color', 'red').html('Welcome!').show()
```

Is the same as:

```
banner.css('color', 'red')
       .html('Welcome!')
       .show()
```

---

## DOM Readiness

**Broken code:** DOM manipulation and event binding in the `<head>`

```
<head>
  <script>
    $('body').append( myNode )
  </script>
</head>

```

The code breaks because it will execute before the body node actually exists.

---

## DOM Readiness

**Pattern:** Wait for the rest of the DOM to be ready before executing

```
<head>
  <script>
    $(document).ready(function() {
      // do something when the DOM is fully loaded
    })
  </script>
</head>

```

This pattern can also be used in an external .js file.

---

## jQuery

#### ...is great.  
  
But do not become dependent on it!

---

## Resources

[W3Schools jQuery Tutorial](https://www.w3schools.com/jquery/default.asp)

[Official jQuery reference](https://api.jquery.com/)

[Official Learn jQuery](https://learn.jquery.com/)


---

# Questions?

---

## AFTERNOON CHALLENGE

### [Canvas Unit: Callbacks](https://coderacademy.instructure.com/courses/144/pages/unit-jquery)

### [Canvas Unit: jQuery](https://coderacademy.instructure.com/courses/144/pages/unit-jquery)

