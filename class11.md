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

# NodeJS Introduction

---

## What is NodeJS?

When Google built the Chrome browser, they also built a fast Javascript runtime engine called V8.

Whenever you visit a page in Chrome that loads Javascript, that script is run by the V8 engine.

Node is simply the code base of the V8 engine re-compiled to run outside the browser in a terminal environment.

Thus, it provides a Javascript execution environment in the terminal, much like the `ruby` command provides a Ruby execution environment.

---

## NodeJS benefits

* Cross-plaform and open source - runs on Linux, Mac and Windows

* Javascript on the server, so we can build a complete web app - front and back end - in the same language

* Isomorphic - in many cases, code can be re-used or moved between front and back end with little or no changes

* Asynchronous - Unlike Rails et al, everything in Node is async, so it can handle large numbers of client requests far more efficiently

* Lightweight - Node generally requires less resources on the server, and requires less boilerplate code to get something useful done

* Large number of packages available

---

## Get and Install NodeJS

If you're using Ubuntu (either native or within Windows), use these terminal commands to install NodeJS.

```sh
# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
sudo apt-get install -y nodejs
```

For Mac, download and install [this package](https://nodejs.org/dist/v11.2.0/node-v11.2.0.pkg).

If you are using another flavour of Linux, [check here](https://nodejs.org/en/download/package-manager) for install instructions.

Once the install completes, you can check the version of Node to confirm that it was installed successfully.

```sh
node -v
```

---

## Hello World!

Let's get started with the most basic Node app possible - output something to the screen.

```js
// hello.js
let name = "John"
console.log(`Hello ${name}!!`)
```

As you can see, like the browser, Node provides a `console` object as part of the standard library, so we don't need to require it.

We can run our program from the terminal with this:

```sh
node hello.js
```

Note that there is nothing special about Node code - it is standard Javascript!

---

## Read a file and display it

Let's use a bit more of the power of Node by reading a text file and displaying it.

```js
let fs = require('fs')
fs.readFile('./sample.txt', 'utf8', function (err,data) {
  if (err) {
    return console.error(err)
  }
  console.log(data)
})
```

We need the `fs` package to read the file, so we `require` it and assign the code in the module to a variable so we can use it's methods.

---

## Read a JSON file and parse it

If we can read in a text file, then we can have JSON in that file and parse it.

```js
let fs = require('fs')
fs.readFile('./people.json', 'utf8', function (err, data) {
    if (err) {
        return console.error(err)
    }
    let people = JSON.parse(data)
    for (let person of people) {
        console.log(`${person.name} is ${person.age} years old.`)
    }
})
```

---

## Basic web server

Node is primarily designed for use as a web server, so it provides high-level components to make it easy.

```js
let http = require('http')

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type':'text/html'})
	res.end('<h1>Hello World</h1>')
}).listen(8000, '127.0.0.1')

console.log('Server running at http://localhost:8000/')
```

Here we import `http`, which is a standard _package_ included with the default install of Node. Packages are the Node equivalent of Ruby gems.

Whenever a request comes in from a client, the callback passed to createServer will be called and passed a request and response object. We use the response object to set up the HTTP response that will be sent back to the client.

---

## NPM

The Node ecosystem has thousands of packages freely available to extend it's functionality, much like Ruby has gems.

NPM (Node Package Manager) is one tool we can use to install and manage Node packages, both globally and for our projects. It's equivalent to the `gem` command in Ruby.

On Mac, npm should have been installed with Node. You can confirm it's installed with:

```
npm -v
```

---

## Install Npm on Linux

On Ubuntu, npm is offered as a separate apt package.

If you're on Ubuntu (or Ubuntu on Windows), use these commands to install Npm:

```sh
sudo apt update
sudo apt install npm
```

---

## Install packages

To be able to install Node packages in our project, we first need to initialize a package.json file.

```sh
npm init
```

Now we can add a package to our project with:

```sh
npm i -S <package-name>
```

`i` is short for _install_, and the `-S` tells npm to insert an entry for the dependency in package.json

---

## Use an installed package

Let's install a simple package that just converts a string to uppercase.

```sh
npm i -S upper-case
```

Once a package is installed, we can `require` it into our script to use it.

```js
let http = require('http');
let uc = require('upper-case');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(uc("Hello World!"))
    res.end()
}).listen(8080)
```

---

## Other Npm Commands

At any time, we can install/update all of the app dependencies with:

```
npm install
```

Some packages need to be installed globally, in which case we use the -g flag:

```
npm i -g <package-name>
```

---

## Interactive Console

Like Ruby IRB console, Node also offers an interactive console. We can run it by just running `node` with no params.

```sh
node
```

We can do anything in this console that we could do in a .js file or in the browser dev tools console.

Keep in mind that you'll have access to the Node API in this console, NOT the DOM or Web APIs (since they exist only in a web browser)


---

## Resources

[NodeJS tutorial](https://www.w3schools.com/nodejs/default.asp)

[NodeJS API documentation](https://nodejs.org/dist/latest-v11.x/docs/api/)

[NPM repository](https://www.npmjs.com/)

---

# Questions?

---

## AFTERNOON CHALLENGE

### [Canvas Unit: Node.js](https://coderacademy.instructure.com/courses/144/pages/unit-node-dot-js)

### [Canvas Unit: CLI Tool](https://coderacademy.instructure.com/courses/144/pages/unit-cli-tool)
