const express = require('express')
const app = express()



var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get("/", (req, res) => {
  res.json({a:1, b:2})
})

// local host:3003
app.listen(3003, () => {
  console.log((new Date).toString())
  console.log("Server is up and listening on 3003")
})
