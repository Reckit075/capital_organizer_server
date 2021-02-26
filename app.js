let express = require("express");
const db = require("./utils/db");
const User = require("./models/User");
const Capital = require("./models/Capital");
const CapitalType = require("./models/CapitalType");
const userRouter = require("./routes/users");

let app = express();
const PORT = 4000;

//Tworzenie relacji
//1 (user) do wiele (capitals)
User.hasMany(Capital, { foreignKey: "userId" });
Capital.belongsTo(User, { foreignKey: "userId" });

//1 do wiele
//1 (capitalType) do wiele (capitals)
CapitalType.hasMany(Capital, { foreignKey: "capitalTypeId" });
Capital.belongsTo(CapitalType, { foreignKey: "capitalTypeId" });

app.get("/", function (req, res) {
  res.send("Hello world");
});
app.use("/users", userRouter);
db
  //   .sync({force: true})     //-> do zmiany struktury obecnych tabel
  .sync()
  .then(() => {
    console.log("Sequelize OK");
  });

app.listen(PORT, function () {
  console.log("Example app listening on port" + PORT);
});
