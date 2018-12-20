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

# Node Authorization

---

## Authentication vs Authorization

Let's start with a quick refresher on the difference between _authentication_ and _authorization_ 

**Authentication** is the process of verifying that a given user is who they claim to be. That is, do the credentials provided by the user match a known user of the system?

**Authorization** assumes that a user is already authenticated, and is about verifying if a user is permitted to perform a given request.

---

## express-acl

There are any number of solutions for implementing authorization. Today we will use express-acl.

`express-acl` is a package that implements authorization in the form of an _access control list_, or _ACL_. The idea is that we can set up a list of _roles_ and specify a list of _actions_ that each role is allowed to perform on a given resource.

---

## Install express-acl

Let's start off with the `passport-demo` project we built yesterday, and add `express-acl` to it to implement authorization.

```sh
npm i express-acl
```

---

## Create JSON configuration file

Express acl uses the configuration approach to define access levels.

First step is to create a file called `nacl.json` and place this in the root folder. This is the file where we will define the roles that can access our application, and the policies that restrict or give access to certain resources.

Later we'll tell ACL to load this file and apply the rules to all incoming requests.

For now, let's allow anyone with the `admin` role to make any request type to any resource, and deny ordinary users access to a specific path, but allow everything else.

---

```json
[
    {
        "group": "admin",
        "permissions": [
            {
                "resource": "*",
                "methods": "*",
                "action": "allow"
            }
        ]
    },
    {
        "group": "user",
        "permissions": [
            {
                "resource": "foo/",
                "methods": [
                    "POST",
                    "GET",
                    "PUT"
                ],
                "action": "deny"
            },
            {
                "resource": "*",
                "methods": "*",
                "action": "allow"
            }
        ]
    }
]
```

---

## Use middleware

Now we need to import ACL into our app and tell the app to use the authorize middleware.

```js
const acl = require('express-acl');
```

Make sure the use() call happens _after_ authorization middleware (i.e. Passport) but _before_ any routes.

We need to call config() first so the ACL module loads our policies from the JSON file.

```js
acl.config({
  defaultRole: 'user'
})

app.use(acl.authorize)
```

We've set a `defaultRole` to cover users that may not have a role set.

---

## User roles

We've got ACL set up, but what if we want a user to have a different role to `user`?

Let's go to our User model in `/models/user.js` and add a `role` attribute.

```js
const User = new Schema({
  role: String
})
```

---

## Session role vs User role

`express-acl` automatically looks for a `role` property on the session, not `req.user`, so whenever a user logs in, we need to copy `req.user.role` to `req.session.role`.

Modify your `login` and `register` routes to include this line. It should execute upon a successful authentication (i.e. when `req.user` has been set).

```js
// Register a new user
router.post('/register', (req, res) => {
  User.register(new User({ email: req.body.email, role: 'user' }), req.body.password, (err) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    // Log the new user in (Passport will create a session) using the local strategy
    passport.authenticate('local')(req, res, () => {
      req.session.role = req.user.role || 'user'
      res.sendStatus(200)
    });
  });
});

// Login an existing user
router.post('/login', passport.authenticate('local'), (req, res) => {
  req.session.role = req.user.role || 'user'
  res.sendStatus(200)
});
```

---

## Add a route for testing

Since we specified rules for a `foo` path in our ACL, let's create that route in `routes/index.js`.

```js
router.get('/foo', function (req, res, next) {
  res.json(req.user)
});
```

If we're allowed to access it, we'll just send back a JSON of the user.

---

## Create admin user

Use Postman to create a second user for your app, using whatever email and password you like.

Once created, we'll use the Mongo terminal to set the new user role to `admin`.

```sh
mongo
show dbs
use express-mongo-passport
show collections
db.users.update({ email: 'john@bar.com' }, { $set: { role: 'admin' } })
```

Once set, use Postman to login as your new admin user, then another request to GET `/foo`.

Now log in as your original, non-admin user, then try to GET `/foo` again.

---

## Custom unauthorized response

If we want to customise the response sent when ACL denies access, we can set a `denyCallback` option.

```js
acl.config({
  denyCallback: (res) => {
    return res.status(403).json({
      status: 'Access Denied',
      success: false,
      message: 'You are not authorized to access this resource'
    });
  }
})
```

There are several other config options available. Check [the documentation](https://www.npmjs.com/package/express-acl) for details.

---

# Questions?

---

## Resources

[express-acl GitHub](https://github.com/nyambati/express-acl)

[How to write ACL rules](https://github.com/andela-thomas/express-acl/wiki/How-to-write-effective-ACL-rules)

---

## AFTERNOON CHALLENGE

** Make sure you've done [Canvas Unit: Salting and Hashing](https://coderacademy.instructure.com/courses/144/pages/unit-salting-and-hashing?module_item_id=5189) first! **

[Canvas Unit: Authorization](https://coderacademy.instructure.com/courses/144/pages/unit-authorization?module_item_id=5191)

**Don't download the linked source code from the Canvas unit.**

Either use your code-along project from this lesson, or [clone my repo](https://github.com/flynnwebdev/passport-demo)
