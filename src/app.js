const app = require('express')();
const consign = require('consign');
const knex = require('knex');
const knexConfig = require('../knexfile');

//Refatorar para tornar configuração de ambiente dinâmica
app.db = knex(knexConfig.test);

consign({cwd: 'src', verbose: false})
    .include('./config/middlewares.js')
    .then('./routes')
    .then('./config/routes.js')
    .into(app)

app.get('/',(req, res) => {
    res.status(200).send('Hello World!')
})

// app.db
// .on('query', (query) => {
//     console.log({sql: query.sql, bindings: query.bindings ? query.bindings.join(',') : ''})
// })
// .on('query-response', (response) => {
//     console.log(response)
// })
// .on('error', (error) => console.log(error))

module.exports = app;