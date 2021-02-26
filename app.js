let express = require('express')
let app = express()
const PORT = 3002

let connection = require('./utils/connectWithDB')

connection()

app.get('/', function(req,res) {
    res.send('Hello world')
})

app.listen(PORT, function () {
    console.log('Example app listening on port 3000!');
  });