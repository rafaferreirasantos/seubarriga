const request = require('supertest');
const app = require('../src/app')


it('Deve listar todos os usuários',() => {
    return request(app)
        .get('/users')
        .then((res) => {
            expect(res.status).toBe(200);
            expect(res.body).toHaveLength(1);
            expect(res.body[0]).toHaveProperty('name','John')
        })
})

it('Deve inserir  um novo usuário com sucesso', () => {
    return request(app)
        .post('/users')
        .send({
            name: 'Clark Kent',
            email: 'superman@email.com'
        })
        .then((res) => {
            expect(res.status).toBe(201);
            expect(res.body.name).toBe('Clark Kent')
        })
})