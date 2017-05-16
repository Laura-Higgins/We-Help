// Server //
require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const insertEvent = require('./insertEvent')
const getEvent = require('./get-event')

app.use(bodyParser.json())

app.use(express.static('server/public'))

app.post('/events', function(req, res) {
  insertEvent(req.body, function(err, result) {
    if (err) {
      console.log(err)
      res.sendStatus(500)
    } else {
      res.json(result.ops[0])
    }
  })
})

app.get('/events', function(req, res) {
  getEvent(req.body, function(err, result) {
    if (err) {
      console.log(err)
      res.sendStatus(500)
    } else {
      res.json(result)
    }
  })
})

app.listen(3000, ()=> {
  console.log('im listening')
})
