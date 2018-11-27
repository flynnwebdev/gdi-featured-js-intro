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

let http = require('http')

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<h1>Hello World</h1>')
}).listen(8000, '127.0.0.1')

console.log('Server running at http://localhost:8000/')