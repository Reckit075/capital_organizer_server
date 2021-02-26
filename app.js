let express = require('express')
let app = express()
const PORT = 4000
const userRouter = require("./routes/users")

app.get('/', function(req,res) {
    res.send('Hello world')
})

app.use("/users", userRouter)

app.listen(PORT, function () {
    console.log('Example app listening on port' + PORT);
  });