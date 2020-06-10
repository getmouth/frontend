const supertest = require('supertest');
const app = require('../server');

const api = supertest(app);

describe('login', () => {
  
    test('returns token with good login credentials', async () => {
        const user = { email: "email@example.com", password: "something" };
        const response = await api
            .post('/api/login')
            .send(user)
            .expect(200)
            .expect('Content-Type',/application\/json/);
        
            expect(response.body.token).toBeDefined();
               
    });

    test('returns 400 with invalid email', async () => {
        const user = { email: "email", password: "something" }
        const response = await api
            .post('/api/login')
            .send(user)
            .expect(400);

        expect(response.body.error).toContain('Invalid or missing email');
    })
    afterAll(() => {
        app.close()
    })
});