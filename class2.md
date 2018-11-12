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

# Introduction to JavaScript

## Loops, Arrays and Objects

---

# RIP STAN LEE

![](dist/img/stanlee.jpg)

## MARVEL COMIC UNIVERSE CREATOR

## 1922 - 2018

---
 
### Loops

![Lego stormtrooper inside key ring](dist/img/hula-hoop.jpg)

Photo credit: [Steve Pires](http://www.flickr.com/photos/steve_pires/8430087504/) [cc](http://creativecommons.org/licenses/by-nc/2.0/)

---

### While loops

`[while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)` will repeat the same code over and over until some condition is met.

```
let bottlesOfBeer = 99

while (bottlesOfBeer > 0) {
  console.log(bottlesOfBeer + ' bottles of beer on the wall')
  bottlesOfBeer = bottlesOfBeer - 1
}
```

---

### Infinite Loops

Make sure something changes in the loop, or your loop will go on forever...

![Spiral that goes on toward infinity](dist/img/infinite-loop.jpg)

Photo credit: [Samuel John](http://www.flickr.com/photos/samueljohn/5348462863/) [cc](http://creativecommons.org/licenses/by-nc/2.0/)

---

### For loops

`[for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)` loops are very similar, but you declare a counter in the statement.

```
// will count 1 to 10
for (let i = 1 i <= 10 i++) {
  console.log(i)
}
```

---

### Loops and logic

You can add other statements or logical operators inside the loops.

```
// Count from 1 to 100

for (let i = 1 i <= 100 i++) {
  if (i % 3 === 0) {
    // Says 'Fizz' after multiples of three
    console.log(' Fizz')
  } else if (i % 5 === 0) {
    // Says 'Buzz' after multiples of five
    console.log(' Buzz')
  } else {
    console.log(i)
  }
}
```

---

### Break

To exit a loop, use the `[break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)` statement.

```
// Count from 100 to 200
for (let i = 100 i <= 200 i++) {
  console.log('Testing ' + i)

  //Stop at the first multiple of 7
  if (i % 7 == 0) {
    console.log('Found it! ' + i)
    break
  }
}
```

---

### Let's Develop It

Write a loop that gives you the 9's times table,  
from **9 x 1 = 9** to **9 x 12 = 108**.

  

Finish early? Try using a loop inside a loop to write all the times tables, from 1 to 12.

---

### Arrays

![Group of kittens](dist/img/kitten-group.jpg)

Photo credit: [Jesus Solana](http://www.flickr.com/photos/pasotraspaso/4444291348/) [cc](http://creativecommons.org/licenses/by-nc/2.0/)

---

### Arrays

[Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) are ordered lists of values.

```
let arrayName = [value0, value1]
```

  

You can put different types of data into an array.

```
let rainbowColors = ['Red', 'Orange', 'Yellow', 'Green',
  'Blue', 'Indigo', 'Violet']

let lotteryNumbers = [33, 72, 64, 18, 17, 85]

let myFavoriteThings = ['Broccoli', 1024, 'Sherlock']
```

---

### Array Length

The `[length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)` property tells you how many things are in an array.

```
let rainbowColors = ['Red', 'Orange', 'Yellow', 'Green',
'Blue', 'Indigo', 'Violet']

console.log(rainbowColors.length)
```

---

### Using Arrays

You can access items with **bracket notation** by using the position of the item you want.

```
let rainbowColors = ['Red', 'Orange', 'Yellow', 'Green',
'Blue', 'Indigo', 'Violet']

let firstColor = rainbowColors[0]
let lastColor  = rainbowColors[6]
```

  

JS arrays are **zero-indexed**, so counting starts at 0.

---

### Changing arrays

You can use bracket notation to change an item in an array

```
let myFavoriteThings = ['Broccoli', 1024, 'Sherlock']

myFavoriteThings[0] = 'Asparagus'
```

---

### Expanding arrays

Arrays do not have a fixed length. You can use `[push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)` to add something to an array.

```
let myFavoriteThings = ['Broccoli', 1024, 'Sherlock']

myFavoriteThings.push('Dancing')
```

---

### Delete array elements

The `delete` keyword can be used to destroy an array element. The remainder of the array is unchanged.

```
let arr = [ 'a', 'b', 'c', 'd' ]
delete arr[1]
console.log(arr)   // [ 'a', undefined, 'c', 'd' ]
```

If you want to remove the element entirely, use `splice`.

```
let arr = [ 'a', 'b', 'c', 'd' ]
arr = arr.splice(2, 1)  // Remove 1 element, starting at 2
console.log(arr)   // [ 'a', 'b', 'd' ]
```

---

### Let's Develop It

Create an array of your favorite foods. Populate the array with at least 10 foods.

Print a few values to the page or console.

Write code to remove one of the foods, then display the array again.

---

### Iterating through arrays

Use a `for..of` loop to easily work with each item in an array.

```
let rainbowColors = ['Red', 'Orange', 'Yellow', 'Green',
  'Blue', 'Indigo', 'Violet']

for (let color of rainbowColors) {
  console.log(color)
}
```

---

### Iterating through arrays

Use a `for..in` loop if you need the index of each element.

```
let rainbowColors = ['Red', 'Orange', 'Yellow', 'Green',
  'Blue', 'Indigo', 'Violet']

for (let index in rainbowColors) {
  console.log(`${index} : ${rainbowColors[index]}`)
}
```

---

### Let's Develop It

Use a `for..of` loop to print a list of all your favorite foods.

Also use a `for..in` loop to display the index next to each item. If the index is divisible by 3, display a line of hyphens after that item.

---

### Mapping arrays

Just like Ruby, we can use `map` to generate a new array based on the values in another array.

```
let nums = [ 2, 3, 4 ]
let squares = nums.map( x => x ** 2 )   // [ 4, 9, 16 ]
```

---

### Find in arrays

We can `find` and `findIndex` to get the first element in an array where a given expression is true.

`findIndex` returns the index of the found element, rather than the element itself.

```
let fruit = [ 'Apple', 'Orange', 'Lemon', 'Watermelon', 'Banana' ]
let item = fruit.find( x => x.length == 6 )   // Orange
let index = fruit.findIndex( x => x.length == 6 )   // 1
```

---

### Let's Develop It

Use `map` to generate an array of your favorite foods with each food in uppercase.

Use `prompt` to get a search term from the user, then `find` it in the array. Display the found item, or a suitable message if not found.

---

### Filter an array

Similar to `map`, but will only keep items where the given expression is true. The kept items are unmodified.

```
let numbers = [ 5, 2, 8, 7, 12 ]
let oddNumbers = numbers.filter( x => x % 2 == 1 )  // [ 5, 7 ]
```

---

### Join array elements

We can use `join` to convert an array to a string with elements separated by a given delimiter.

```
let data = [ 12, 'Main', 'Road' ]
let address = data.join(' ')   //  '12 Main Road'
```

---

### Let's Develop It

Use `filter` to generate an array of your favorite foods, but only those that start with a vowel.

Use `join` with a `<br>` delimiter to output the array as a list to the webpage.

---

### Objects

![Collection of matches](dist/img/matches.jpg)

Photo credit: [Jirí Volejník](https://flic.kr/p/8RnSsa) [cc](http://creativecommons.org/licenses/by-nc-sa/2.0/)

---

### Objects

[Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) let us store a collection of properties.

They are the JS equivalent of Ruby hashes.

```
let objectName = {
  propertyName: propertyValue,
  propertyName: propertyValue
}

```

```
let user = {
  hometown: 'Atlanta, GA',
  hair: 'Auburn',
  likes: ['knitting', 'code'],
  birthday: {month: 10, day: 17}
}
```

---

### Accessing Objects

You can retrieve values using **[dot notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors#Dot_notation)**

```
let user = {
  hometown: 'Atlanta, GA',
  hair: 'Auburn'
}

let usersHometown = user.hometown
```

  

Or using **[bracket notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors#Bracket_notation)** (like arrays)

```
let usersHair = user['hair']
```

---

### Changing Objects

You can use dot or bracket notation to change properties

```
let user = {
  hometown: 'Atlanta, GA',
  hair: 'Auburn'
}

user.hair = 'blue'
```

  

Add new properties

```
user.married = true

```

  

Or delete them

```
delete user.married
```

---

### Arrays of Objects

Because arrays can hold any data type, they can also hold objects.

```
let users = [
  { name: 'Jolene', age: 21 },
  { name: 'Alexa',  age: 18 }
]

for (let user of users) {
  console.log(user.name + ' is ' + user.age + ' years old.')
}
```

---

### Objects

Just like other data types, objects can be passed into functions:

```
let jolene = {
  age: 21,
  hairColor: 'Auburn',
  likes: ['pizza', 'tacos'],
  birthday: {month: 3, day: 14, year: 1995}
}

function describeUser(user) {
  console.log('You are ' + user.age + ' years old with '
  + user.hairColor + ' hair.')
}

describeUser(jolene)
```

---

### Let's Develop It

Create an object to hold information on your favorite recipe. It should have properties for:

*   `recipeTitle` (a string)
*   `servings` (a number)
*   `ingredients` (an array of strings)
*   `directions` (a string)

  
  

Try displaying some information about your recipe.

Bonus: Create a loop to list all the ingredients.

---

### Object methods

Objects can also hold functions.

```
let jolene = {
  age: 21,
  hairColor: 'Auburn',
  talk: function() {
    console.log('Hello!')
  },
  eat: function(food) {
    console.log('Yum, I love ' + food)
  }
}

```

  

Call object methods using dot notation:

```
jolene.talk()

jolene.eat('pizza')
```

---

### Let's Develop It

Go back to your recipe object. Add a function called `letsCook` that says "I'm hungry! Let's cook..." with the name of your recipe title.

Call your new method.

---

## Questions?