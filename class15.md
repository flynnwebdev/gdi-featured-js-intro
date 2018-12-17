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

# Express Sessions

---

## What is a session?

By default, every HTTP request made to a server is unique and self-contained. A request has no knowledge of any other request.

A session is a place to store data that you want access to _across requests_. Each user that visits your website has a unique session.  You can use sessions to store and access user data as they browse your application.

Sessions are integral to web application development because they allow the application to store state. Based on what action a user took on Page A, we can show a different Page B. Without them, applications would be stateless, and not very useful.

---

## Express sessions

As you might expect, there's a Node package that implements sessions for Express apps, so let's install that. We'll need to create a basic Express app first.

```sh
mkdir sessions
cd sessions
npm init -y
npm install express express-session uuid
code .
```

We're also installing `uuid` for generating a unique session key.

---

## Use express-session

`express-session` is a middleware, so we need to pass it to `app.use`

We also need to set a unique key that will be used to sign the session ID. The secret will never be sent to the client, only the session ID encypted with it.

Put this code in `app.js`

```js
const express = require('express')
const session = require('express-session')
const uuid = require('uuid/v1') 
 
let app = express()
app.use(session({
  secret: 'many Bothans died to bring us this information',
  cookie: {
    maxAge: 60000  // One minute
  } 
}))

app.listen(3000)
```

Setting `maxAge` is optional. If we omit it, browsers will assume it's a non-persistent cookie and delete it as soon as the user closes the browser.

Run the Express server with `nodemon app.js`

---

## Session object

The middleware attaches a `session` object to the `req` object in our routes, so we can set arbitrary data on the session and retrieve it later. 

Note that the middleware does set a cookie on the client, but it only contains the session ID. All other session data exists only on the server.

---

## Aside: Morgan

One thing that Rails server did that was very handy for debugging was logging. We can implement logging for Express using a popular package called `morgan` (yes, it's a Dexter reference)

```sh
npm i morgan
```

```js
const morgan = require('morgan')

app.use(morgan('dev'))
```

Now all requests will be automatically logged to the Express server console.

We've chosen the `dev` format, but there are several others. See the [morgan documentation](https://www.npmjs.com/package/morgan)

---

## Example

Let's implement a simple view counter.

```js
app.get('/', function(req, res, next) {
  if (req.session.views) {
    req.session.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + req.session.views + '</p>')
    res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    req.session.views = 1
    res.end('welcome to the session demo. refresh!')
  }
})
```

Refresh the page a few times to see the counter increment. If we go to the Application tab in dev tools, we can see that the `views` are not stored in the cookie, only the session ID.

Now wait a minute, then refresh. The session should have expired, so you'll get the greeting again with a view count of 1.

---

## Destroying the session

There are use-cases where we want to destroy the session on the server - for example, when the user logs out, we want to destroy the session immediately.

We can do this by using the `destroy` method within any route handler. We can supply a callback so we can handle any errors, redirect to another page, etc...

```js
req.session.destroy(err => {
  // Session does not exist at this point
})
```

---

## Session store

We've now used a session to store and retrieve some data. In this case it was an integer, but we can store anything we want, including objects (which are automatically converted to and from JSON).

But where is that data actually being stored on the server?

By default, `express-session` stores the session data in memory (in an instance of `MemoryStore`), but it supports several other storage methods.

---

## Memory store disadvantages

The default memory store is intended only for development and testing, and should *never* be used in production.

* It will leak memory under most conditions. As more and more requests are made, the available memory will eventually be exhausted.
* It doesn't scale past a single process.
* All sessions are lost if the server crashes or is stopped/restarted.

---

## Database store

Since we already have a Mongo server installed, let's use that to store our sessions! There's even a Node package that makes this easy.

```sh
npm i connect-mongo
```

Then in our app, we require the `MongoStore` and pass it the `express-session` object. Then we tell the session to use MongoStore as the session store, optionally setting a time-to-live (ttl) for the session. MongoStore will automatically destroy expired sessions.

```js
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
 
app.use(session({
    secret: 'There is no spoon',
    store: new MongoStore({
      url: 'mongodb://localhost/session-demo',
      ttl: 14 * 24 * 60 * 60  // 14 days (default)
    })
}))
```

Make sure your Mongo server is running (`mongod`), then try our demo app again.

---

# Questions?

---

## Resources

[express-session documentation](https://www.npmjs.com/package/express-session)
[connect-mongo documentation](https://www.npmjs.com/package/connect-mongo)

[AXIOS Github](https://github.com/axios/axios)
[AXIOS with React Quickstart](https://alligator.io/react/axios-react/)

---

## AFTERNOON CHALLENGE

### [Canvas Unit: AXIOS](https://coderacademy.instructure.com/courses/144/pages/unit-axios)

