const supertest = require('supertest');
const app = require('../server');
const User = require('../models/User');

const api = supertest(app);

describe('login', () => {
    let user;
    beforeEach(async () => {
        await User.deleteMany({});
        user = { email: "email@example.com", password: "something" };
    })
  
    test('returns token with good login credentials', async () => {

        const response = await api
            .post('/api/login')
            .send(user)
            .expect(200)
            .expect('Content-Type',/application\/json/);
        
            expect(response.body.token).toBeDefined();
               
    });

    test('returns 400 with invalid email', async () => {
        user = { ...user, email: "email" }
        const response = await api
            .post('/api/login')
            .send(user)
            .expect(400);

        expect(response.body.error).toContain('Invalid or missing email');
    });

    test('returns 404 when password is empty', async () => {
        user = { ...user, password: "" };
        const response = await api
            .post('/api/login')
            .send(user)
            .expect(400);

        expect(response.body.error).toContain('Invalid or missing password')
    })
    afterAll(async () => {
        await app.close()
    })
});