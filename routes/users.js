const express = require('express')
const router = express.Router();

const User = require("../crud/users")

router.post("/add-user", User.addUser)

module.exports = router