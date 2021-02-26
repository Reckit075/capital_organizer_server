let mysql = require("mysql");

const connection = () => {
  let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
  });
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
};

module.exports = connection;
