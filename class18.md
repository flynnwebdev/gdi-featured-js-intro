---
theme : "moon"
highlightTheme : "monokai"
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

# React Router

---

## Client-side routing

Until now, we've been implementing all of our routing on the server-side.

This has served us well, but one disadvantage is that whenever a different route is requested, the client-side browser must send a new request to the server, which causes a page reload.

However, when we're writing a _single-page application (SPA)_ using React or any other client-side framework, we don't want the browser to refresh. We need the content to change dynamically as the URL changes.

---

## React-router

Enter `react-router`, a library that implements client-side routing in React SPAs.

Using `react-router` we can map URIs to React components.

Let's start by creating a new React app, then we'll install react-router.

```sh
npx create-react-app routing
cd routing
code .
yarn add react-router-dom
yarn start
```

---

## User component

By default we only have an `App` component, but we'll need a couple of others so that we can set up some routes that map to the components.

Let's create a `users.js` file and place this code in it:

```js
import React from 'react'

class Users extends React.Component {
  render() {
    return <h1>Users</h1>
  }
}

export default Users
```

We're using a class-based component style here, but you can also use functional components.

---

## Contact component

Similarly, create a `contact.js` file and add this code:

```js
import React from 'react'

class Contact extends React.Component {
  render() {
    return <h1>Contact</h1>
  }
}

export default Contact
```

Also modify your `app.js` so that it only contains this:

```js
import React from 'react'
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    )
  }
}

export default App
```

---

## Imports

Now we need to open `index.js` and import our new components, as well as some components from the `react-router-dom` package.

Your `index.js` should look like this:

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import Users from './users'
import Contact from './contact'

ReactDOM.render(<App />, document.getElementById('root'))
```

---

## Router component

We define routes with the `Route` component, which requires two properties:

* `path` - specifies the URI pattern to match against
* `component` - which component to render if the URI matches.

Routes must be children of a `Router` component in order to work. The `Router` component does the work of parsing the browser URL, handling browser history, and parsing any child `Route` components.

---

## Adding routes

Let's add some routes to our `index.js`

Add this code between your imports and the `ReactDOM.render`

```xml
const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/users" component={Users} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
)
```

Then replace the `ReactDOM.render` statement with this:

```js
ReactDOM.render(routing, document.getElementById('root'))
```

Now open your browser at `localhost:3000/users`

---

## What happened?

The `Users` route was rendered as expected, but `Home` was rendered as well!

What went wrong?

The answer is nothing. The default behaviour is for **all** partially matching routes to be rendered. Since the `App` route `/` is a subset of `/users`, it will also be rendered.

To prevent this, we need to tell the router to match `/` **exactly**

```js
<Route exact path="/" component={App} />
```

Now only the `Users` component should display

---

## The Link Component

`react-router` provides a `Link` component that allows us to pass props and/or state with a link.

The `to` attribute is required.

Let's add a simple nav menu just above the first route. Your `routing` const should look like this:

```xml
const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/users" component={Users} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
)
```

Try clicking the links in your browser. You should see both the page content and the URL in the address bar change dynamically ***without*** a page reload.

---

## Add a 404 component

It is considered good UX to show a nice 404 error page to the user if they attempt to access a non-existent route.

The first thing we'll need is a component to render our 404. Since we can't start the name of a component with a number, it is (by convention) usually called `Notfound`

Create a new file called `notfound.js` with this content:

```js
import React from 'react'

const Notfound = () => <h1>Not found</h1>

export default Notfound
```

Import this into your `index.js`

```js
import Notfound from './notfound'
```

---

## Set the default (404) route

In `index.js` we want to tell `react-router` to use our `Notfound` component as the default fallback in case none of the other routes match.

Since the `Route` component has no way of knowing if another route matched, we need to wrap the routes in a higher-level component called `Switch`. It's called that because it works in much the same way as a Javascript `switch` statement.

Change your list of routes to look like this:

```xml
<Switch>
  <Route exact path="/" component={App} />
  <Route path="/users" component={Users} />
  <Route path="/contact" component={Contact} />
  <Route component={Notfound} />
</Switch>
```

The `Switch` component knows that the last route is the fallback because it has no path defined - it will catch all routes not previously defined.

---

## URL Params

No routing system would be very useful if we couldn't pass parameters in the URL. So naturally, `react-router` has a solution for this.

As you may have guessed, the syntax for specifying params is the same as in Rails and Express:

```xml
<Route path="users/:id" component={Users} />
```

Replace your `users` route in `index.js` with the above, then in `users.js` log out the props to the console:

```js
class Users extends React.Component {
  render() {
    console.log(this.props)
    return <h1>Users</h1>
  }
}
```

Test it by visiting `localhost:3000/users/1` in your browser.

---

# Questions?

---

## Resources

[Get started with React Router](https://codeburst.io/getting-started-with-react-router-5c978f70df91)

[React Router Docs](https://reacttraining.com/react-router/)

---

## AFTERNOON CHALLENGE

## [Canvas Unit: Client Side Routing](https://coderacademy.instructure.com/courses/144/pages/unit-client-side-routing)
