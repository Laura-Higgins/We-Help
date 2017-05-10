const MongoClient = require('mongodb').MongoClient
const loginInfo = require('./mlab.js')
const url = 'mongodb://' + loginInfo.username + ':' + loginInfo.password + '@ds137291.mlab.com:37291/wehelp'

MongoClient.connect(url, function(err, db) {
  if(err) {
    console.log(err)
  } else {
    console.log('connect correctly')
  }
  insertDocuments(db, function(result) {
    console.log(result.ops)
    db.close()
  })
})

const insertDocuments = function(db, callback) {
  const events = db.collection('events')
  events.insertOne(
    {
      organization: "Priceless Pets",
      location: "Chino Hills",
      date: "05/25/2017",
      time: "1:00pm",
      email: "info@pricelesspets.org",
      phone: 9092391438
    },
   function(err, result) {
    if(err) {
      console.log(err)
    }
     callback(result)
  })
}
