---
theme : "sky"
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

# React Forms

---

## HTML Forms

A standard HTML form will browse to a new page when it is submitted. For example, this form will post the `name` field to the current page when submitted:

```html
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

This is the default browser behaviour. However, this is not desirable when we're building a React SPA (single-page app), as we don't want the whole page to refresh.

Instead, we want to have a JS function that intercepts the submission, gets the entered values from the form, and does something with them.

In React, we can achieve this with a technique called _controlled components_

---

## Controlled Components

In HTML, form elements such as `<input>`, `<textarea>`, and `<select>` typically maintain their own state and update it based on user input.

In React, mutable state is typically kept in the state property of components, and only updated with setState().

We can combine the two by making the React state be the **single source of truth**. In this scenario, the React component updates the form if the state changes, and also updates the state if the user changes anything in the form.

An input form element whose value is controlled by React in this way is called a **controlled component**. In other frameworks (eg. Angular) this is referred to as _two-way data binding_.

---

## Controlled Components

For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component:

```js
class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '' }
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }

  render() {
    return (
      <input type="text" value={this.state.name} onChange={this.handleNameChange} />
    )
  }
}
```

Since the `value` attribute is set on our form element, the displayed value will always be `this.state.name`, making the React state the source of truth. Since `handleChange` runs on every keystroke to update the React state, the displayed value will update as the user types.

---

## Controlled Components

With a controlled component, every state mutation will have an associated handler function. This makes it straightforward to modify or validate user input. For example, if we wanted to enforce that names are written with all uppercase letters, we could write handleChange as:

```js
handleChange(event) {
  this.setState({value: event.target.value.toUpperCase()});
}
```

---

# Song Library App

---

## Songify

Let's create a simple app that implements a filterable list of songs.

Start by creating a new React app:

```
npx create-react-app songify
cd songify
npm start
```

You should see the spinning React logo in your browser.

---

## Songify - List Songs

Let's replace the default `App` component with our own. We'll create an array of song titles in the component state, then render them in a list.

```js
import React from 'react'
import './App.css'

class App extends React.Component {
  state = {
    songs: ['Bohemian Rhapsody', 'The Chain', 'Comfortably Numb']
  }
  render() {
    return (
      <div className="App">
        <h1>Songify</h1>
        <ul>
          { this.state.songs.map(song => <li>{song}</li> )}
        </ul>
      </div>
    )
  }
}

export default App
```

Note that we've used a React short-cut here for setting the state. If the only thing we want to do in the constructor is set the state, we can omit it and just set the state directly.

---

## Songify - Filter Form

We want the user to be able to enter a keyword or part thereof and have the list automatically update to show only matching songs.

First, we'll need a form to prompt the user and accept a keyword. Let's add it under the Songify heading, but above the list of songs:

```html
<form>
  <label htmlFor="search">Search for song: </label>
  <input id="search" />
</form>
```

Note that the `label` element uses `htmlFor` instead of the usual `for` attribute. This is necessary as we're actually writing JSX, and `for` is a keyword in Javascript, so an alternative had to be chosen to avoid breaking the syntax.

Similarly, if you want to declare a `class` attribute in JSX, use `className` instead.

---

## Songify - Filter Form

So far so good! But right now, the form doesn't do anything useful. Let's fix that.

What we want is to store the filter value as state within the component, and update the state whenever the filter input changes. So we will need to add a new state attribute and an event handler method:

```js
state = {
  filter: '',
  songs: ['Bohemian Rhapsody', 'The Chain', 'Comfortably Numb']
}

updateFilter(event) {
  console.log(event.target.value)
}
```

Now we want to attach that method to the `onChange` event on the `<input>` field:

```html
<input id="search" onChange={this.updateFilter} />
```

For now, we're just going to `console.log` the value.

---

## Songify - Update State

Now that we've confirmed that the event handler is triggered via `console.log`, we can replace that with `setState` to update `filter` with the new value:

```js
this.setState({
  filter: event.target.value
})
```

---

## Songify - Filter

Finally, we need to retrieve `this.state.filter` before we render the list so that we can filter it first. The ES6 `filter` method is ideal:

```js
const filteredSongs = this.state.songs.filter(song => song.includes(this.state.filter))
```

Similar to `map`, `filter` generates a new array from a given array containing only the elements where the filter expression is true.

We will also need to change the collection we're calling `map` on:

```js
{ filteredSongs.map(song => <li>{song}</li> )}
```

Cool! We can now enter some characters in the filter box and see the list automagically update!

---

## Prevent form submission

Now that we're handling the form with Javascript, we don't want to allow the browser to actually submit the form, as that will refresh the page!

Even though we don't have a submit button in this case, a form can still be submitted by the user merely pressing ENTER while any input field has focus.

The easiest way is to use the `preventDefault` function in an `onSubmit` handler:

```html
<form onSubmit={e => e.preventDefault()}>
```

---

# Questions?

---

## Resources

[React Docs - Forms](https://reactjs.org/docs/forms.html)

---

## AFTERNOON CHALLENGE

### [Canvas Unit: React Library App](https://coderacademy.instructure.com/courses/144/pages/unit-react-library-app)

