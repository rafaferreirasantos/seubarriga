const request = require('supertest');
const app = require('../../src/app')


const email = `${Date.now()}@mail.com`;

it('Deve listar todos os usuários',() => {
    return request(app)
        .get('/users')
        .then((res) => {
            expect(res.status).toBe(200);
            expect(res.body.length).toBeGreaterThan(0);
        })
})

it('Deve inserir  um novo usuário com sucesso', () => {
    return request(app)
        .post('/users')
        .send({
            name: 'Clark Kent',
            email,
            password: '123mudar'
        })
        .then((res) => {
            expect(res.status).toBe(201);
            expect(res.body.name).toBe('Clark Kent')
        })
})
it('Não deve inserir um usuário sem nome', () => {
    return request(app)
        .post('/users')
        .send({
            email: 'nenhum@mail.com',
            password: '123456'
        })
        .then(res => {
            expect(res.status).toBe(400);
            expect(res.body.error).toBe('Nome é um parâmetro obrigatório');
        })
})
it('Não deve inserir um usuário sem email', async () => {
    const res = await request(app)
        .post('/users')
        .send({
            name: 'Clark Kent',
            password: '123mudar'
        })
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Email é um parâmetro obrigatório')
})
it('Não deve inserir um usuário sem email', (done) => {
    {
        request(app)
        .post('/users')
        .send({
            email: 'nenhum@mail.com',
            name: 'Clark Kent',
        })
        .then(res => {
            expect(res.status).toBe(400);
            expect(res.body.error).toBe('Password é um parâmetro obrigatório');
            done();
        })
    }
})
it('Não deve inserir um usuário com um email já utilizado', ()=>{
    return request(app)
    .post('/users')
    .send({
        name: 'Clark Kent',
        email,
        password: '123mudar'
    })
    .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Já existe um usuário com este email')
    })
})