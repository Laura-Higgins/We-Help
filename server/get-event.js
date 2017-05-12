// GET Events Function //
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const url = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@ds137291.mlab.com:37291/wehelp'

function getEvent(event, callback) {
  MongoClient.connect(url, function(err, db) {
    if (err) {
      callback(err)
      db.close()
      return
    }
    db.collection('events', function(err, collection) {
      if (err) {
        callback(err)
        db.close()
        return
      } else {
        collection.find().toArray(function(err, docs) {
          if (err) {
            callback(err)
            db.close
            return
          } else {
            callback(null, docs)
            db.close()
          }
        })
      }
    })
  })
}

module.exports = getEvent
