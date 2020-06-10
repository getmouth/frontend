const supertest = require('supertest');
const app = require('../server');

const api = supertest(app);

describe('login', () => {
    test('returns token with good login credentials', async () => {
        const login = { email: "email@example.com", password: "something" };

        const user = await api
            .post('/api/login')
            .send(login)
            .expect(200)
        
            expect(user.body.token).toBeDefined();
               
    });
    afterAll(() => {
        app.close()
    })
});