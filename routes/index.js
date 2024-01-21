
const UsersRouter = require("./users")
const AuthRouter = require("./auth")
const route = (app) => {
    app.use('/users', UsersRouter)
    app.use('/auth', AuthRouter)
}

module.exports = route