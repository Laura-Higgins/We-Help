// function to updateCount in database //
const MongoClient = require('mongodb').MongoClient
const objectId = require('mongodb').ObjectID
const url = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@ds137291.mlab.com:37291/wehelp'

function updateEvent(id, body, callback) {
  MongoClient.connect(url, function(err, db) {
    if (err) {
      callback(err)
      db.close()
      return
    }
    db.collection('events').updateOne( {_id: objectId(id)}, {$set: body }, function(err, result) {
      if (err) {
        callback(err)
      } else {
        callback(null, objectId(id))
      }
      db.close()
    })
  })
}


module.exports = updateEvent
