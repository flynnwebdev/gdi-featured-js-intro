---
theme : "moon"
highlightTheme : "agate"
---
<style>
    .reveal pre {
        width: 100% !important;
    }
    .reveal section pre code {
        font-size: 2rem !important;
        line-height:2rem !important;
        overflow: hidden !important;
        max-height: none !important;
        white-space: pre-wrap !important;
    }
</style>

# Introduction to JavaScript

## Class 2

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

Functions, like Ruby methods, can accept parameters.

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

---
### ES6 Functions

Modern JS (ES6) supports an alternative function declaration

```
function addOne(num){
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

---
### Let's Develop It

Write a simple program to combine a first name and a last name inside a function. Then update the function to accept a first and last name as arguments.

---
### Returning Values

You can have a function give you back a value, to use later.

```
function square(num) {
  return num * num
}

console.log(square(4))       // outputs '16'

let squareOfFive = square(5) // squareOfFive equals '25'

```

`return` will immediately end a function.

---
### Let's Develop It

Add a return statement to your 'name' function. Use that function to set the value of a variable.

---
### Variable Scope

The scope of a variable determines where it's value is accessible throughout your program.

![Footprints being washed away](dist/img/footprints.jpg)

Photo credit: [\_vikram](http://www.flickr.com/photos/heyvikram/187950111/) [cc](http://creativecommons.org/licenses/by-nc/2.0/)

---
### Global Scope

A variable declared outside of a function has a `global scope` and can be accessed anywhere, even inside of functions.

```
let awesomeGroup = 'Girl Develop It' // Global scope

function whatIsAwesome() {
  console.log(awesomeGroup + ' is pretty awesome.') // Will work
}

whatIsAwesome()

```

---
### Local Scope

A variable declared inside a function has a `local scope` and can only be accessed within that function.

```
function whatIsAwesome() {
  let awesomeGroup = 'Girl Develop It'              // Local scope
  console.log(awesomeGroup + ' is pretty awesome.') // Will work
}

whatIsAwesome()

console.log(awesomeGroup + ' is pretty awesome.') // Won't work

```

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

---
### Let's Develop It

Modify your "wear a coat" code for these conditions:

1.  If it's less than 50 degrees, wear a coat.
2.  If it's less than 30 degrees, wear a coat and a hat.
3.  If it's less than 0 degrees, stay inside.
4.  Otherwise, wear whatever you want.

---
### Logical Operators

Example

Name

Result

`a && b`

And

**`TRUE`** if both `a` and `b` are **`TRUE`**.

`a || b`

Or

**`TRUE`** if either `a` or `b` is **`TRUE`**.

`!a`

Not

**`TRUE`** if `a` is not **`TRUE`**.

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
### You did it!

![Happy cat](dist/img/kitten-yay.jpg)

Photo credit: [OnceAndFutureLaura](http://www.flickr.com/photos/laura-kali/7399310732/) [cc](http://creativecommons.org/licenses/by-sa/2.0/)

---
### Resources

*   [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide), from the Mozilla Developers Network.
*   [Code Academy](http://www.codecademy.com/tracks/javascript), with interactive JavaScript lessons to help you review.

## Questions?