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

## Document Object Model (DOM)

---

## What is the DOM?

*   **Document Object Model** - i.e. a map of our HTML document
*   Defines the logical structure of an HTML document and how it is accessed and manipulated
*   Anything found in an HTML or XML document can be accessed, changed, deleted, or added by a programmer using the DOM

![](dist/img/dom-tree.png)

---

## Inspecting the DOM

*   [Google Chrome](https://developers.google.com/chrome-developer-tools/docs/elements) or [Mozilla Firefox](https://developer.mozilla.org/en/Tools/Inspector)
    *   Right-click on a web page and select "Inspect Element"
    *   Shortcuts: Cmd-Opt-I (Mac), Ctrl-Shift-I (Windows)
*   [Internet Explorer](http://msdn.microsoft.com/en-us/library/dd565628%28VS.85%29.aspx#html_elementinfo)
    *   Open Tools > "Developer Tools"
*   [Safari](https://developer.apple.com/library/content/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/GettingStarted/GettingStarted.html)
    *   Unlock the Develop Menu by opening Safari > Preferences > Advanced, and checking the box, "Show Develop menu in menu bar."
    *   Access by same methods as Chrome (above)

---

## Accessing the DOM

  

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

## DOM Access Methods

  

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

## Selecting Nodes From the DOM

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

## Returning Element vs. Array of Elements

  

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

# Let's Develop It

## DOM Detective Exercise

Open a new browser tab and navigate to the [Coder Academy](https://coderacademy.edu.au/) homepage.

Use the dev tools console and the DOM access methods you've learned so far to select the following:

1. All images on the page (as a collection)
2. All images that are children of an element with the class 'box' (as a collection)
3. The subscribe form in the footer
4. The email link in the footer
5. The 'Short Courses' menu
6. The Coder Academy logo in the header
7. The second slide of the slideshow
8. All `<a>` tags with `href` equal to `/fast-track`

---

## Manipulating a DOM Node's Attributes

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

## Manipulating a DOM Node's Styles

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

## Manipulating a DOM Node's Inner HTML

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

## `innerHTML` vs. `textContent`

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

## Let's Develop It
### The Logo Hijack

1. Navigate to the [UCSD](https://ucsd.edu/) website, and open up the Dev Tools console
* Find the UCSD logo and store it in a variable.
* Modify the source of the logo's image so that the image now points to the [UC Berkeley logo](http://www.berkeley.edu/images/uploads/logo-ucberkeley.png) instead.
* Find the header and store it in a variable.
* Change the header background color to 'gold'.
* Find the 'About' menu link and store it in a variable.
* Modify the text of the link so that it says "About Cal" instead.
* Modify the link so that it points to [Cal's About page](http://www.berkeley.edu/about) instead.

---

## Creating DOM Nodes

The `document` object also allows us to create new nodes from scratch.

We use the `appendChild` method to attach a new node in the desired location in the DOM tree.

```
document.createElement(tagName)
document.createTextNode(text)
document.appendChild(childToAppend)

```

Whenever the DOM is changed, the browser immediately updates the visible page to display the changes.

```
let body = document.body
let newImg = document.createElement('img')
newImg.src = 'http://placekitten.com/400/300'
newImg.style.border = '1px solid black'
body.appendChild(newImg)
```

Child nodes can have their own children, thus creating a hierarchy.

```
let newParagraph = document.createElement('p')
let newText = document.createTextNode('Squee!')
newParagraph.appendChild(newText)
body.appendChild(newParagraph)

```

---

## Resources

[Eloquent Javascript DOM chapter](http://eloquentjavascript.net/14_dom.html)

[Mozilla DOM Guide](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

[W3Schools JS DOM practice exercises](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_dom_html1)


---

# Questions?

---

# AFTERNOON CHALLENGE

## [Master of (DOM) Manipulation Exercise](/dist/dom_manipulation_exercise.html)

---
