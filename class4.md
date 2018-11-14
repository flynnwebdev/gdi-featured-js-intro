---
theme : "moon"
highlightTheme : "agate"
---

<style>
    .reveal .slides {
      zoom: 1 !important
      height: auto !important
    }
    .reveal .slides section {
      top: 50% !important
      transform: translateY(-50%) !important
      zoom: 0.75 !important
    }
    .reveal pre {
        width: 100% !important
    }
    .reveal section pre code {
        overflow: hidden !important
        max-height: none !important
        white-space: pre-wrap !important
    }
</style>

# JavaScript

## Document Object Model (DOM)

---

### What is the DOM?

*   **Document Object Model** - i.e. a map of our HTML document
*   Defines the logical structure of an HTML document and how it is accessed and manipulated
*   Anything found in an HTML or XML document can be accessed, changed, deleted, or added by a programmer using the DOM

![](../images/domtree.png)

---

### Inspecting the DOM

*   [Google Chrome](https://developers.google.com/chrome-developer-tools/docs/elements) or [Mozilla Firefox](https://developer.mozilla.org/en/Tools/Inspector)
    *   Right-click on a web page and select "Inspect Element"
    *   Shortcuts: Cmd-Opt-I (Mac), Ctrl-Shift-I (Windows)
*   [Internet Explorer](http://msdn.microsoft.com/en-us/library/dd565628%28VS.85%29.aspx#html_elementinfo)
    *   Open Tools > "Developer Tools"
*   [Safari](https://developer.apple.com/library/content/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/GettingStarted/GettingStarted.html)
    *   Unlock the Develop Menu by opening Safari > Preferences > Advanced, and checking the box, "Show Develop menu in menu bar."
    *   Access by same methods as Chrome (above)

---

### Accessing the DOM

  

The `[document](https://developer.mozilla.org/en/DOM/document)` object is globally available in your browser.

It allows you to access and manipulate the DOM of the current web page:

1.  Find the DOM node you want to change using an access method
2.  Store this DOM node as a variable
3.  Manipulate the DOM node
    *   Change its attributes
    *   Modify its styles
    *   Give it new inner HTML
    *   Append new nodes to it

---

### DOM Access Methods

  

Finding DOM nodes by id:

```
document.getElementById(id)

```

Finding DOM nodes by tag name:

```
document.getElementsByTagName(tagName)

```

Finding DOM nodes by class name:

```
document.getElementsByClassName(className)

```

Finding DOM nodes by query selector:

```
document.querySelector(cssQuery)
document.querySelectorAll(cssQuery)

```

---

### Selecting Nodes From the DOM

HTML:

```
<ul id="hobby-list">
  <li class="hobby">Playing the banjo</li>
  <li class="hobby">Paddleboarding</li>
</ul>

```

JavaScript:

```
// By Id
let hobbiesList = document.getElementById('hobby-list')

// By Tag Name
let hobbies = document.getElementsByTagName('li')

// By Class Name
let alsoHobbies = document.getElementsByClassName('hobby')

// By CSS Query
let firstHobby = document.querySelector('ul li.hobby')
let againAlsoHobbies = document.querySelectorAll('ul li.hobby')

```

---

### Returning Element vs. Array of Elements

  

`getElementById()` and `querySelector()`return a single element:

```
let hobbiesList = document.getElementById('hobby-list')
let firstHobby = document.querySelector('ul li.hobby')

```

  

`getElementsByClassName()`, `getElementsByTagName()`, and `querySelectorAll()` return a collection of elements (which acts like an array):

```
let catNames = document.querySelectorAll('ul li.catname')
let firstCatName = catNames[0]

```

---

# [The DOM Detective Exercise](/jsweb/exercises/dom_detective)

---

### Manipulating a DOM Node's Attributes

You can access and change the attributes of a DOM node using dot notation.

```
<img id="kitty" src="https://commons.wikimedia.org/wiki/Kitten#/media/File:Kitten-stare.jpg">

```

Changing the `src` of an image:

```
let catImage = document.getElementById('kitty')
let oldImageSource = catImage.src
catImage.src = 'https://commons.wikimedia.org/wiki/File%3ASix_weeks_old_cat_(aka).jpg

```

Changing the `className` of a DOM node:

```
let catImage = document.getElementById('kitty')
catImage.className = "landscape"

```

---

### Manipulating a DOM Node's Styles

You can access and change the styles of a DOM nodes via the `style` property. CSS property names with a "-" must be camelCased and number properties must have a unit.

CSS:

```
body {
  color: red
  background-color: pink
  padding-top: 10px
}

```

Applying the Same Styles via JavaScript:

```
let pageNode = document.body
pageNode.style.color = 'red'
pageNode.style.backgroundColor = 'pink'
pageNode.style.paddingTop = '10px'

```

---

### Manipulating a DOM Node's Inner HTML

Each DOM node has an `innerHTML` attribute that contains the HTML of all its children:

```
let pageNode = document.body
console.log(pageNode.innerHTML)

```

You can set `innerHTML` yourself to replace the contents of the node:

```
pageNode.innerHTML = "<h1>Oh, no! Everything is gone!</h1>"

```

You can also just add to the `innerHTML`, instead of replacing it altogether:

```
pageNode.innerHTML += "P.S. Please do write back."

```

---

### `innerHTML` vs. `textContent`

If you're only changing the actual text of a node, [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) may be a better choice.

*   `innerHTML`
    *   Works in older browsers
    *   More powerful: can change code
    *   Less secure: allows cross-site scripting (XSS)
*   `textContent`
    *   Doesn't work in IE8 and below
    *   Faster: the browser doesn't have to parse HTML
    *   More secure: won't execute code

---

### [The Logo Hijack](/jsweb/exercises/dom_manipulation)

---

### Creating DOM Nodes

The `document` object also allows us to create new nodes from scratch:

```
document.createElement(tagName)
document.createTextNode(text)
document.appendChild(childToAppend)

```

```
let body = document.body
let newImg = document.createElement('img')
newImg.src = 'http://placekitten.com/400/300'
newImg.style.border = '1px solid black'
body.appendChild(newImg)
```

```
let newParagraph = document.createElement('p')
let newText = document.createTextNode('Squee!')
newParagraph.appendChild(newText)
body.appendChild(newParagraph)

```

---

### [Master of (DOM) Manipulation Exercise](/jsweb/exercises/dom_manipulation_advanced)

---

### Resources

[Mozilla `class` reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

[W3Schools JS in-browser practice exercises](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_variables1)

[W3Schools tutorial on objects](https://www.w3schools.com/js/js_object_definition.asp)


---

### Questions?