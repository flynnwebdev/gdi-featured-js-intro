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

## Introduction to JavaScript

---

### What is JavaScript?

![Java logo with a no symbol](dist/img/not-java.png)

JavaScript is not Java

---

### JavaScript is the language of the web

![Laptop and server connected via the internet](dist/img/client-server.jpg)

Photo credits: [Andrew E. Larson](http://www.flickr.com/photos/papalars/5210226441/) and [John Seb Barber](http://www.flickr.com/photos/johnseb/3425464/) [cc](http://creativecommons.org/licenses/by-nc/2.0/)

---

### JavaScript works with HTML & CSS

![Triangle](dist/img/triangle.jpg)

Photo credit: [Gillicious](http://www.flickr.com/photos/ggunson/44539990/) [cc](http://creativecommons.org/licenses/by-nc-sa/2.0/)

---

### What is JavaScript?

*   Created by Brendan Eich as "LiveScript" in 1995, which got renamed to "JavaScript"
*   Standardized by the **ECMAScript** specifications.
*   A _client-side processing language_. A browser reads the code and runs it directly.
*   Interfaces with **HTML** & **CSS**.
*   Lets you build dynamic webpages that respond to input from users.

---

### What can JavaScript do?

Image lightboxes

[![https://gyazo.com/01b0065c2feee682dbffe3d7bf4e5545](https://i.gyazo.com/01b0065c2feee682dbffe3d7bf4e5545.gif)](https://gyazo.com/01b0065c2feee682dbffe3d7bf4e5545)

---

### What can JavaScript do?

Fully featured web applications

[![https://gyazo.com/1ea0791eece706f4ab9ff8213a4e1fbf](https://i.gyazo.com/1ea0791eece706f4ab9ff8213a4e1fbf.gif)](https://gyazo.com/1ea0791eece706f4ab9ff8213a4e1fbf)

---

### What can JavaScript do?

Keep track of users with [Cookies](https://en.wikipedia.org/wiki/HTTP_cookie) or storing data with [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

[![https://gyazo.com/56208a5722a6f7ab682c2baddbba8ce3](https://i.gyazo.com/56208a5722a6f7ab682c2baddbba8ce3.gif)](https://gyazo.com/56208a5722a6f7ab682c2baddbba8ce3)

---

### What can JavaScript do?

Interactive elements like tabs, sliders, etc

[![https://gyazo.com/4841d6f99367b28a1d6fca4395f408a2](https://i.gyazo.com/4841d6f99367b28a1d6fca4395f408a2.gif)](https://gyazo.com/4841d6f99367b28a1d6fca4395f408a2)

---

### What can JavaScript do?

Drawing & animation

[![https://gyazo.com/6e183501f7ae5df7f07d37b9513ccfb9](https://i.gyazo.com/6e183501f7ae5df7f07d37b9513ccfb9.gif)](https://gyazo.com/6e183501f7ae5df7f07d37b9513ccfb9)

---

### Script Tags

You can mix JavaScript and HTML. The **script tag** tells your browser the stuff inside is code, not content.

```
<script>
  CODE GOES HERE
</script>

```

---

### JavaScript Files

Just like CSS, you can split JavaScript code into it's own file.

```
<script src="path/to/file.js"></script>

```

---

### Let's Develop It

*   Make a folder in your `projects` folder called `javascript`.
*   Inside, make a new page called `jsdemo1.html`.
*   Write this code inside.

```
<!DOCTYPE html>
<html>
  <head>
    <title>Test Page</title>
  </head>
  <body>
    <p>This is my awesome JavaScript code.</p>
    <script>
      alert('Hello World!')
      console.log('Secret message')
    </script>
  </body>
</html>

```

---

### How does JavaScript work?

1.  You visit a website with JavaScript code on it.
2.  Your browser (e.g., Chrome) reads the code line-by-line.
3.  The browser runs each line of code as it reads it.
4.  Based on these instructions, the browser performs calculations and changes the HTML and CSS on the page.
5.  If the browser finds code it doesn't understand, it stops running and creates an error message.

---

### Console

You can see what's going on in the **console**.

![](dist/img/console-panel.png)

---

### Let's Develop It

*   Open the console.
*   In Chrome, use the keyboard shortcut:
    *   Mac: **Command + Option + J**
    *   Windows: **Control + Shift + J**
*   Open your practice page.
*   Do you see anything in the console?
*   Try typing in 2 + 2 and hitting enter.

---

### Statements

Each instruction in JS is a "statement", like:

```js
console.log('Hello World!')
console.log('I am glad to meet you')
console.log('I am fuzzy')

```

---

### Comments

JS supports both multi and single line comments.

```
/*
I can make long comments
with multiple lines here
*/

console.log('Hello World!') // Or make short comments here
```

---

### Getting results onto your screen

Open a popup box.

```
alert('Hello World!')

```

Display a message in your console.

```
console.log('Hello World!')

```

Add something to the page.

```
document.write('Hello World!')

```

---

### Let's Develop It

*   Open `index.html`.
*   Add a comment to the code.
*   Try different ways of printing a message.
*   Create a new file called `mycode.js`.
*   Move your code to this file and link it to your page.

---

### variables

To declare a variable in JS, use the keyword `let` and the variable name.

```
let numberOfKittens
```

It is best practice to give your variable a known starting value.

```
let numberOfKittens = 5
```

---

### variable Values

*   When you first create a variable, it does not have a value (it is `undefined`).
*   You can set a value for a variable.
*   variables can hold different types of data.
*   The value of a variable can change over time.

---

### Naming variables

*   The variable name is case-sensitive.
*   A new variable should have a unique name.
*   variable names need to start with a letter, `$`, or `_`.
*   Avoid [reserved words](https://developer.mozilla.org/en/JavaScript/Reference/Reserved_Words).
*   Choose clarity and meaning for humans to read later.
*   Camel-case is the convention.

---

### Using a variable

Once you have created a variable, you can use it in your code. Just type the name of the variable.

```
let numberOfKittens = 5
console.log(numberOfKittens)

```

---

### Let's Develop It

In your JavaScript file, create a variable and give it a valid name and value. Then, display the value.

---

### Data Types

*   **string** string of characters
    
    ```
    let userName = 'Jane Lane'
    ```
    
*   **number** integer or floating point
    
    ```
    let myAge = 30
    ```
    
*   **boolean** true or false
    
    ```
    let catsAreBest = true
    ```
    
*   **undefined** value that hasn't been defined
    
    ```
    let favoriteThings
    ```
    
*   **null** an explicitly empty value
    
    ```
    let goodPickupLines = null
    ```
    

---

### Numbers!

![Cats in a basket](dist/img/kitten-basket.jpg)

Photo credit: [WJ van den Eijkhof](http://www.flickr.com/photos/tom-poes/2159348460/) [cc](http://creativecommons.org/licenses/by-nc/2.0/)

---

### Numbers

variables can be numbers, either integers or floats (decimals).

```
let numberOfKittens = 5
let cutenessRating = 9.6

```

JavaScript automatically converts integers to floats

`NaN` = Not-A-Number

---

### Arithmetic Operators

Once you have numbers, you can do math with them!

```
let numberOfKittens = 5
let numberOfPuppies = 4
let numberOfAnimals = numberOfKittens + numberOfPuppies

```

---

### Arithmetic Operators

| Example | Name           | Result                           |
| ------- | -------------- | -------------------------------- |
| `-a`    | Negation       | Opposite of `a`.                 |
| `a + b` | Addition       | Sum of `a` and `b`.              |
| `a - b` | Subtraction    | Difference of `a` and `b`.       |
| `a * b` | Multiplication | Product of `a` and `b`.          |
| `a / b` | Division       | Quotient of `a` and `b`.         |
| `a % b` | Modulus        | Remainder of `a` divided by `b`. |

---

### Let's Develop It

Create two variables and try some arithmetic operators. Don't forget to display your results!

---

## Strings

---

### Strings

In JS, a string can be created using either single or double quotes. There is no difference between them.

```
let kittensName = 'Fluffy'
let puppyName = "Fido"
```

If you want to use a quote in your string, you'll need to **escape** it with a backslash.

```
console.log('I\'d like to use an apostrophe')
```

Alternatively, use double quotes:
```
console.log("I'd like to use an apostrophe")
```

---

### Playing with Strings

![Cat playing with string](dist/img/kitten-string.jpg)

Photo credit: [Mike Lawson](http://www.flickr.com/photos/dirtbikedba/5796961878/) [cc](http://creativecommons.org/licenses/by-nc/2.0/)

---

### String Operators

You can put strings together with a `+`, the concatenation operator.

```
let kittensName = 'Fluffy '
let fullName = kittensName + 'McDougle'
console.log(fullName) // Outputs 'Fluffy McDougle'

```

---

### String Operators

You can also use `+=` to add things to the end of a string.

```
let kittensName = 'Admiral '
kittensName += 'Snuggles'
console.log(kittensName) // Outputs 'Admiral Snuggles'

```

---

### Let's Develop It

Create two variables, a first name and a last name, and then put them together to make a full name. Don't forget to display your results!

---

### Combining strings and numbers

You can use concatenation to mix strings and numbers. When you do this, JavaScript will treat the number like a string.

```
let numberOfFruit = 6
let typeOfFruit = 'bananas'
let allTheFruit = 'I have ' + numberOfFruit + ' ' + typeOfFruit + '!'
console.log(allTheFruit)

```

---

### Template Literal

Similar to Ruby, we can perform string interpolation in JS, except here it is called a template literal.

We indicate a template using backticks. Here is the previous code example refactored to use templates:

```
let numberOfFruit = 6
let typeOfFruit = 'bananas'
let allTheFruit = `I have ${numberOfFruit} ${typeOfFruit}!`
console.log(allTheFruit)

```

---

### Let's Develop It

Create a program to calculate the tip at a restaurant. It should:

*   Have variables for the bill **pre-tip** and the **tip percentage**.
*   Calculate the total bill.
*   Output a sentence like "Your total bill, with tip, is $14.75". Use template literals.
*   Bonus: Use [`toFixed()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) to round the bill total to 2 decimals.

---

### Functions

Functions are the Javascript equivalent of Ruby methods. 

---

### Declaring Functions

To declare (create) a function, you can give it a name, then include all the code for the function inside curly brackets `{}`

```
function parrotFacts() {
  console.log('Some parrot species can live for over 80 years')
  console.log('Kakapos are a critically endangered flightless parrot')
}

```

Functions can have multiple lines.

Note that unlike Ruby, the parentheses () after the name are required

---

### Using Functions

To invoke (use) a function, you type its name, followed by parenthesis `()`

```
 parrotFacts()
```

We'll talk about what can go inside those parenthesis in a minute! For now, leave them empty.

---

### Let's Develop It

Write a function that outputs a sentence. Then invoke that function later in your code.

---

### Arguments

Functions, like Ruby methods, can accept parameters (aka arguments).

```
function callKitten(kittenName){
  console.log(`Come here, ${kittenName}!`)
}

callKitten('Fluffy') // outputs 'Come here, Fluffy!'

function addNumbers(a, b){
  console.log(a + b)
}

addNumbers(5, 7)  // outputs 12
addNumbers(9, 12) // outputs 21

```

Remember, the () after the function name are required for both the declaration and the call, even if there are no arguments.

---

### ES6 Functions

Modern JS (ES6) supports an alternative function declaration using "arrow" notation

```
let addOne = (num) => {
  let newNumber = num + 1
  console.log('You now have ' + newNumber)
}

// Declare variables
let numberOfKittens = 5
let numberOfPuppies = 4

// Use them in functions
addOne(numberOfKittens)
addOne(numberOfPuppies)

```

Note that the syntax for _calling_ an arrow function is unchanged.

---

### Let's Develop It

Write a simple program to combine a first name and a last name inside a function. Then update the function to accept a first and last name as arguments.

---

### Returning Values

You can have a function return a value using the `return` keyword.

Note that, unlike Ruby, `return` is mandatory, except in some cases of ES6 "arrow" syntax.

```
function square(num) {
  return num * num
}

// The below `cube` function is shorthand for:
// function cube(num) { return num * num * num }

let cube = (num) => num * num * num

console.log(square(4))       // outputs '16'
console.log(cube(2))         // outputs '8'

let squareOfFive = square(5) // squareOfFive equals '25'

```

`return` will immediately end a function.

---

### Let's Develop It

Add a return statement to your 'name' function. Use that function to set the value of a variable.

---

### Boolean Variables

![Kitten with light switch](dist/img/kitten-switch.jpg)

Photo credit: [elycefeliz](http://www.flickr.com/photos/elycefeliz/5726163170/) [cc](http://creativecommons.org/licenses/by-nc/2.0/)

---

### Boolean Variables

Boolean variables represent the logical values `true` and `false`

```
let catsAreBest = true
let dogsRule = false

```

---

### Boolean Variables

Some values are considered `[falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)` and will evaluate to `false` in a Boolean context.

```
// the following variables will evaluate as false

let myName = ''
let numOfKids = 0
let isMarried     // remember a variable with no value is undefined
```

`null` and `NaN` will also evaluate as `false`.

Everything else evaluates as `true`.

---

### Control Flow

![Forked path](dist/img/fork-path.jpg)

Photo credit: [DennisM2](http://www.flickr.com/photos/dennism2/1504087870/) [cc](http://creativecommons.org/licenses/by-nc/2.0/)

---

### The if statement

Use `if` statements to decide which lines of code to execute, based on a condition.

```
if (condition) {
  // statements to execute
}

```

```
let age = 30

if (age > 18) {
  console.log('You are an adult')
}
```

---

### Comparison Operators

| Example   | Name                     | Result                                                                |
| --------- | ------------------------ | --------------------------------------------------------------------- |
| `a == b`  | Equal                    | **`TRUE`** if `a` is equal to `b` (can be different types).           |
| `a === b` | Identical                | **`TRUE`** if `a` is equal to `b`, and the same type.                 |
| `a != b`  | Not equal                | **`TRUE`** if `a` is not equal to `b` (can be different types).       |
| `a !== b` | Not identical            | **`TRUE`** if `a` is not equal to `b`, or they are not the same type. |
| `a < b`   | Less than                | **`TRUE`** if `a` is strictly less than `b`.                          |
| `a > b`   | Greater than             | **`TRUE`** if `a` is strictly greater than `b`.                       |
| `a <= b`  | Less than or equal to    | **`TRUE`** if `a` is less than or equal to `b`.                       |
| `a >= b`  | Greater than or equal to | **`TRUE`** if `a` is greater than or equal to `b`.                    |


---

### Watch out!

Don't mix up `=` and `==` and `===`

![Caution Tape](dist/img/caution.jpg)

Photo credit: [Eugene Zemlyanskiy](http://www.flickr.com/photos/pictureperfectpose/76138988/) [cc](http://creativecommons.org/licenses/by-nc/2.0/)

---

### Let's Develop It

Make a variable called "temperature". Write some code that tells you to put on a coat if it is below 50 degrees.

---

### Even more control flow

![Sign post with multiple signs](dist/img/toomanysigns.jpg)

Photo credit: [Thomas Hawk](http://www.flickr.com/photos/thomashawk/2402598275/) [cc](http://creativecommons.org/licenses/by-nc/2.0/)

---

### The if/else statement

Use `else` to provide an alternate set of instructions.

```
let age = 30

if (age >= 16) {
  console.log('Yay, you can drive!')
} else {
  console.log('Sorry, you have ' + (16 - age) +
  ' years until you can drive.')
}

```

---

### The if/else statement

If you have multiple conditions, you can use `else if`.

```
let age = 30

if (age >= 35) {
  console.log('You can vote AND run for President!')
} else if (age >= 30) {
  console.log('You can vote AND run for the Senate!')
} else if (age >= 18) {
  console.log('You can vote!')
} else {
  console.log('You can\'t vote, but you can write your representatives.')
}

```
Note that it is the two distinct words `else if` (with a space), not `elsif` as in Ruby

---

### Let's Develop It

Modify your "wear a coat" code for these conditions:

1.  If it's less than 50 degrees, wear a coat.
2.  If it's less than 30 degrees, wear a coat and a hat.
3.  If it's less than 0 degrees, stay inside.
4.  Otherwise, wear whatever you want.

---

### Logical Operators

<table>
<thead>
<tr class="header">
<th>Example</th>
<th>Name</th>
<th>Result</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><code>a &amp;&amp; b</code></td>
<td>And</td>
<td><strong><code>TRUE</code></strong> if both <code>a</code> and <code>b</code> are <strong><code>TRUE</code></strong>.</td>
</tr>
<tr class="even">
<td><code>a || b</code></td>
<td>Or</td>
<td><strong><code>TRUE</code></strong> if either <code>a</code> or <code>b</code> is <strong><code>TRUE</code></strong>.</td>
</tr>
<tr class="odd">
<td><code>!a</code></td>
<td>Not</td>
<td><strong><code>TRUE</code></strong> if <code>a</code> is not <strong><code>TRUE</code></strong>.</td>
</tr>
</tbody>
</table>

---

### Using logical operators

You can use these operators to combine conditions.

```
let age = 30
let yearsAsCitizen = 30

if (age >=30 && yearsAsCitizen > 9) {
  console.log('You can run for the Senate!')
} else {
  console.log('You are not eligible to run for the Senate')
}
```

---

### Let's Develop It

Add a logical operator to your "what to wear" program.

---

### Resources

*   [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide), from the Mozilla Developers Network.
*   [Code Academy](http://www.codecademy.com/tracks/javascript), with interactive JavaScript lessons to help you review.

---

## Questions?
