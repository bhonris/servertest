const DATA  = {
  apple: 5,
  orange: 10,
  banana: 15,
  pear: 10
}

const express = require('express')
const app = express()



var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get("/", (req, res) => {
  res.json(DATA)
})

// local host:3003
app.listen(3003, () => {
  console.log((new Date).toString())
  console.log("Server is up and listening on 3003")
})
