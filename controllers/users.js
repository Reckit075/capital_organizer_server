module.exports = {
  users_get_one: function (req, res){
    const {id} = req.params
    res.send("You get one user.This path is correct");
  },
  users_create: function (req, res){
    console.log(req.body);
    res.send("user created")
  }
}

