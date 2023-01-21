module.exports = (app) => {
    app.route('/users')
        .get(app.routes.users.listAll)
        .post(app.routes.users.create)
}