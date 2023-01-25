const app = require('express')();
const consign = require('consign');
const knex = require('knex');
const knexConfig = require('../knexfile');

//Refatorar para tornar configuração de ambiente dinâmica
app.db = knex(knexConfig.test);

consign({cwd: 'src', verbose: false})
    .include('./config/middlewares.js')
    .then('./services')
    .then('./routes')
    .then('./config/routes.js')
    .into(app)

app.get('/',(req, res) => {
    res.status(200).send('Hello World!')
})


module.exports = app;