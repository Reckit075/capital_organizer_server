module.exports.users_get_one = (req, res) => {
  const {id} = req.params
  res.send("You get one user.This path is correct");
};

