const bodyParser = require('body-parser')
module.exports = (app) =>{
    app.use(bodyParser.json())
    // app.db
    //     .on('query', (query) => {
    //         console.log({sql: query.sql, bindings: query.bindings ? query.bindings.join(',') : ''})
    //     })
    //     .on('query-response', (response) => {
    //         console.log(response)
    //     })
    //     .on('error', (error) => console.log(error))
}