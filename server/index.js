// Server //
require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const insertEvent = require('./insertEvent')
const getEvent = require('./get-event')
const updateEvent = require('./update-event')

app.use(bodyParser.json())

app.use(express.static('server/public'))

app.post('/events', function(req, res) {
  insertEvent(req.body, function(err, result) {
    if (err) {
      res.sendStatus(500)
    } else {
      res.json(result.ops[0])
    }
  })
})

app.get('/events', function(req, res) {
  getEvent(req.body, function(err, result) {
    if (err) {
      res.sendStatus(500)
    } else {
      res.json(result)
    }
  })
})

app.put('/events/:id', function(req,res) {
  updateEvent(req.params.id, req.body, function(err,result) {
    if (err) {
      res.sendStatus(500)
      console.log(err)
    } else {
      res.sendStatus(200)
    }
  })
})

app.listen(3000, ()=> {
  console.log('im listening')
})
