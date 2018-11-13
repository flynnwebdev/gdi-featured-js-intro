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

## Objects

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

Non-existent properties will return `undefined`

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

### Dynamic objects

It would be useful to be able to create a new object with a given structure, but pass in the initial properties as parameters.

Let's write a function to do that.

```
function createNewPerson(name) {
  var obj = {};
  obj.name = name;
  obj.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
  return obj;
}
```

Now we can use it to create any number of Person objects.

```
let person1 = createNewPerson('John')
let person2 = createNewPerson('Mary')
person1.greeting()
```

It works, but it's a bit cumbersome ...

---

### Constructor functions

Enter the Javascript equivalent of a class with an initialize method - the constructor function.

```
function Person(name) {
  this.name = name; 
  this.greeting = function() { 
    alert('Hi! I\'m ' + this.name + '.');
  };
}
```

By calling the function, JS will create a new instance of Person and return it to the caller.

Note the capital `P` to indicate that it is a constructor, and the use of `this` to refer to the instance (equivalent to `self` in Ruby).

```
let p1 = new Person('Sarah')
let p2 = new Person('Bob')
p2.greeting()
```

---

### The Prototype

One issue with the previous example is that `p1` and `p2` both have their own copy of the `greeting` method, since `this.greeting` is set every time (check it out on console!).

This is far from ideal - it's not DRY!

We can avoid this by assigning common properties and methods to a special `prototype` object that automatically exists within all JS objects.

---

### The Prototype

The prototype serves as the template or blueprint for a group of objects, and is roughly equivalent to a Ruby class.

```
function Person(name) {
  this.name = name
}

Person.prototype.greeting = function() {
  alert('Hi! I\'m ' + this.name + '.');
}
```

Note that we must move the method definition outside of the constructor, and prefix it with the name of the 'class' and the `prototype` property.

Now there will be only one copy of `greeting` which will be shared by all instances of `Person`.

We can use the same syntax to set a shared variable.

---

### The Prototype

A handy feature of JS is that we can modify prototypes on the fly, and any existing instances will automatically update with the changes.

This even works on built-in objects.

```
Number.prototype.cube = function() {
  return this * this * this
}

let x = 2
x.cube()   // 8
```

---

### Let's Develop It

Refactor your recipe program so that it uses a constructor function called `Recipe`.

* The constructor should accept `recipeTitle`, `servings`, `ingredients` and `directions` as parameters.

* The `letsCook` method should now be a method of the Recipe prototype, and your code that lists the ingredients should also become a prototype method.

* Test your constructor by creating an instance, then calling the `letsCook` and `listIngredients` methods.

---

## Questions?