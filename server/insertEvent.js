// Insert Event function connects to Database //
require('dotenv').config()
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@ds137291.mlab.com:37291/wehelp'

function insertEvent(event, callback) {
  MongoClient.connect(url, function(err, db) {
    if (err) {
      callback(err)
      return
    }
    const events = db.collection('events')
    events.insertOne(event, function(err, result) {
      if (err) {
        callback(err)
        db.close()
        return
      }
      callback(null, result)
      db.close()
    })
  })
}

module.exports = insertEvent
