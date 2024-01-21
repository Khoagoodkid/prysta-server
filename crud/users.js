const Users = require("../models/users")

class User {
    addUser(req,res) {
        console.log(req.body)
        Users.create(req.body)
        .then(() => res.status(200).json("Created!"))
        .catch(err => res.status(500).json(err))
    }
}
module.exports = new User