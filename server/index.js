// Server //
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const insertEvent = require('./insertEvent')

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

app.listen(3000, ()=> {
  console.log('im listening')
})
