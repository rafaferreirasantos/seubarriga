module.exports = (app) => {
    app.route('/users')
        .get(app.routes.users.listAll)
        .post(app.routes.users.create)
    app.route('/accounts')
        .post(app.routes.accounts.create)
}