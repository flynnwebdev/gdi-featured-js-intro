let name = "John"
console.log(`Hello ${name}!!`)

let fs = require('fs')
fs.readFile('./sample.txt', 'utf8', function (err, data) {
    if (err) {
        return console.error(err)
    }
    console.log(data)
})

fs.readFile('./people.json', 'utf8', function (err, data) {
    if (err) {
        return console.error(err)
    }
    let people = JSON.parse(data)
    for (let person of people) {
        console.log(`${person.name} is ${person.age} years old.`)
    }
})

let http = require('http')
let uc = require('upper-case')

http.createServer(function (req, res) {
    console.log(req)
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(uc('<h1>Hello World</h1>'))
}).listen(8000, '127.0.0.1')

console.log('Server running at http://localhost:8000/')