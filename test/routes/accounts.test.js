const request = require('supertest');
const app = require('../../src/app');

const MAIN_ROUTE = '/accounts';
let user;

beforeAll(async () =>{
    const user = await app.services.user.create({
        name: 'User Account',
        email: `${Date.now()}@mail.com`,
        password: '123456'
    })
    this.user = {...user[0]}
})

it('Deve inserir uma conta com sucesso', () => {
    return request(app)
        .post(MAIN_ROUTE)
        .send({
            name: '001',
            user_id: this.user.id
        })
        .then(res => {
            expect(res.status).toBe(201);
            expect(res.body.name).toBe('001')
        })
})