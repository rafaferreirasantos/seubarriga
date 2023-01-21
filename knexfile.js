module.exports = {
    test: {
        client: 'pg',
        version: '15.1',
        connection: {
            host: '172.31.14.199',
            port: 15432,
            user: 'postgres',
            password: '123mudar',
            database: 'barriga'
        },
        migrations: {
            directory: 'db/migrations/',
        }
    }
}