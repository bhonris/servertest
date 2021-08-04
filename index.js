const DATA  = [
  {name: "apple", price: 5},
  {name: "orange", price: 10},
  {name: "banana", price: 15},
  {name: "pear", price: 10}
]

const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get("/", (req, res) => {
  res.json(DATA)
})

// 1. received: selectedFruit
// send: JSON of structure {name: string, price: int}`
// Example:
//    /fruit/banana => {name: 'banana', price: '15'}
//    /fruit/apple => {name: 'apple', price: '5'}
app.get("/fruit/:selectedFruit", (req, res) => {
  // FILL IN THIS FUNCTION HERE
  const fruit = req.params.selectedFruit
  res.json(`INCOMPLETE`)
})

// 2. received: maxPrice
// filters only fruits where price <= maxPrice
// send: JSON array of structure [...{name: string, price: int}]
// Example:
//    /price/10 => [  {name: "apple", price: 5}, {name: "orange", price: 10}{name: "pear", price: 10}]
//    /price/9 => [{name: "apple", price: 5}]
app.get("/price/:maxPrice", (req, res) => {
  // FILL IN THIS FUNCTION HERE
  const maxPrice = req.params.maxPrice
  res.json(`INCOMPLETE`)
})

// local host:3003
app.listen(3003, () => {
  console.log((new Date).toString())
  console.log("Server is up and listening on 3003")
})
