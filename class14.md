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

# React - Axios

---

## React API access

At some point, our React app (which is 100% client-side) will need to communicate data to and from a server, usually in the form of calls to an API.

To date, we've been using `fetch` or the jQuery AJAX functions to accomplish this.

However, these solutions are a bit low-level, so require a bit more work on our part to use them. There's also potential security issues with them if we're not careful.

---

## AXIOS

Enter AXIOS, a Node package designed to make HTTP requests easier and safer.

It is framework agnostic (so it can be used without React), but we will be using it with React.

Some of the features of AXIOS include:

* Make XMLHttpRequests from the browser
* Make http requests from node.js
* Supports the Promise API
* Intercept request and response
* Transform request and response data
* Cancel requests
* Automatic transforms for JSON data
* Client side support for protecting against [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

---

## Axios Demo

Let's create a new project to try out AXIOS. Since AXIOS is used by a client to make requests to a server, we're going to need to make both!

In this case, we'll create a simple Express server that serves an API, then create a React app that will consume the Express API.

Let's create the server first and test it with Postman.

We'll keep it as simple as possible, so no generator.

```
mkdir axios-demo
cd axios-demo
mkdir server
cd server
npm init
npm install express
```

---

## Server Code

We'll just do a very basic server in a single app.js file.

```js
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

// No database, we'll keep it simple with an array
const students = ['Jane', 'Jack', 'John']

// Parse application/json
app.use(bodyParser.json())
// Use CORS to allow the client to be at a different origin to the server
// Without this, the browser would block requests.
app.use('/api/', cors());


// Return all students
app.get('/api/students', (req, res) => {
  res.json(students)
})

// Create a new student
app.post('/api/students', (req, res) => {
  const student = req.body.student
  students.push(student)
  res.json(student)
})

// We'll use port 3001 so we can run React dev server on 3000
app.listen(3001, () => console.log('Listening on http://localhost:3001!'))
```

---

## Postman

Fire up Postman, and let's test out our API.

1. Do a GET request to `localhost:3001/api/students`
2. POST a new student to the same endpoint
3. Repeat step 1 to confirm that the new student was added

Once we've confirmed that all of these requests work as expected, we can now move on to building our React client, confident that any issues that may arise are almost certainly on the client side.

---

## React Client

Make sure you `cd` back up to your project folder, then create the React app. We will also add the AXIOS package at this time.

```
cd ..
npx create-react-app client
cd client
code .
npm install axios
npm start
```

---

## Import AXIOS

In your App.js file, add the axios import.

We'll also set a constant to hold the API endpoint.

```js
import axios from 'axios'

const studentApi = 'http://localhost:3001/api/students'
```

---

## Initial State and Render

Generally, when we create a React app or component, the first two things we'll want to do is establish an initial state, and set up a basic `render` method.

Add this code to your App component:

```js
state = {
  students: []
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Students</h1>
      </header>
      { students.map((student) => <p>{ student }</p>) }
    </div>
  )
}
```

---

## Get students from API

Now we need to retrieve the student list from our Express server and update the React state.

We want to wait until the component has been initialized and added to the DOM before we change the state, so we'll put the code in `componentDidMount`.

```js
componentDidMount() {
  axios.get(studentApi)
  .then((response) => {
    this.setState({ students: response.data })
  })
}
```

Note that, unlike `fetch`, we didn't need an intermediate `then` to parse the JSON to an array - AXIOS does it automatically.

---

## New Student Form

Looking good so far! Now we need a way to add new students. We'll set up a data entry form and an onchange handler to link the form fields with the React state.

First put the form code in the `render` method, above the list:

```js
<form onSubmit={this.createNewStudent}>
  <label>New Student:</label><input value={newStudent} onChange={this.changeNewStudent} />
</form>
```

Now add `changeNewStudent` event handler (an arrow function to ensure `this` refers to the component, not the element)

```js
changeNewStudent = (event) => {
  this.setState({ newStudent: event.target.value })
}
```

For this to work, we need to give `newStudent` an initial state, so we'll just set it to the empty string when we initialize the state.

```js
state = {
  newStudent: '', 
  students: []
}
```

---

## Submit new student

All we need now is a handler that will submit the new student to our API via AXIOS.

```js
createNewStudent = (event) => {
  event.preventDefault()
  // Post the new student to our server
  axios.post(studentApi, { student: this.state.newStudent })
  .then((response) => {
    // Success! Add the new student to our array and clear the input
    const students = [...this.state.students, response.data]
    this.setState({ students, newStudent: '' })
  })
}
```

---

## Expansion operator

The previous slide introduced the _expansion operator_ (...) on this line:

```js
const students = [...this.state.students, response.data]
```

Prefixing an array with three periods returns the individual elements of the array. If we then add on the new student data and wrap the whole thing in a new array, we effectively get the same result as:

```js
this.state.students.push(response.data)
```

We can't use `push` in this case though, because then we'd be modifying state directly. Using expansion, we effectively get a _copy_ of the array with the new element added.

---

## Axios instance

For larger apps, we may need to access multiple APIs, and would benefit from making our API access code more modular.

AXIOS allows us to create an instance with whatever base URL and other configuration we need, which we can then import and use like any other module.

Create a new file `api.jsx` with this code:

```jsx
import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:3001/api/students'
})
```

---

## Axios instance

Now we can import and use the instance in `App`

```jsx
import studentAPI from '../api'
```

Delete the constant `studentApi` - we no longer need it.

Replace all instances of `axios` in the code with `studentAPI` and remove the first parameter (the studentApi endpoint). We don't need that now, as it's already been defined in the AXIOS instance.

---

# Questions?

---

## Resources

[AXIOS Github](https://github.com/axios/axios)
[AXIOS with React Quickstart](https://alligator.io/react/axios-react/)

---

## AFTERNOON CHALLENGE

### [Canvas Unit: AXIOS](https://coderacademy.instructure.com/courses/144/pages/unit-axios)

