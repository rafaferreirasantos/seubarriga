const request = require('supertest');
const app = require('../../src/app')


it('Deve listar todos os usuários',() => {
    return request(app)
        .get('/users')
        .then((res) => {
            expect(res.status).toBe(200);
            expect(res.body.length).toBeGreaterThan(0);
        })
})

it('Deve inserir  um novo usuário com sucesso', () => {
    const mail = `${Date.now()}@mail.com`;
    return request(app)
        .post('/users')
        .send({
            name: 'Clark Kent',
            email: mail,
            password: '123mudar'
        })
        .then((res) => {
            expect(res.status).toBe(201);
            expect(res.body.name).toBe('Clark Kent')
        })
})