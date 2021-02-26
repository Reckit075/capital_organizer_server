let express = require('express')
const db = require('./utils/db')
const User = require("./models/User")
const Capital = require("./models/Capital")
const CapitalType = require("./models/CapitalType")
let app = express()
const PORT = 3002

//Tworzenie relaji
//1 (user) do wiele (capitals)
User.hasMany(Capital, {foreignKey:"userId"})
Capital.belongsTo(User, {foreignKey:"userId"})

//1 do wiele
//1 (capitalType) do wiele (capitals)
CapitalType.hasMany(Capital, {foreignKey:"capitalTypeId"})
Capital.belongsTo(CapitalType, {foreignKey:"capitalTypeId"})

app.get('/', function(req,res) {
    res.send('Hello world')
})

db
//   .sync({force: true})
  .sync()
  .then(() =>{
      console.log("Sequelize OK")
  })

app.listen(PORT, function () {
    console.log('Example app listening on port 3000!');
});