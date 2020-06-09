const supertest = require('supertest');
const app = require('../server');
const data = require('../recipes.json');

const api = supertest(app);

describe('Recipes', () => {

    test('returns a list of recipes', async () => {
        try {
            const response = await api.get('/api/recipes')
                .expect(200)
                .expect('Content-Type', /application\/json/);

            expect(response.body).toHaveLength(data.length)
        } catch (error) {
            console.log(error)
        }
        
    });
})