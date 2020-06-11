const supertest = require('supertest');
const app = require('../server');
const tesHelper = require('./testHelper');


const api = supertest(app);

describe('Recipes', () => {
    let recipe;
    let recipes;

    beforeEach(() => {
        recipe = tesHelper.initialRecipe();
        recipes = tesHelper.getAllRecipes();
    });

    test('returns a list of recipes', async () => {
        const response = await api.get('/api/recipes')
            .expect(200)
            .expect('Content-Type', /application\/json/);

        expect(response.body).toHaveLength(recipes.length);
    });

    test('updates recipe rating by id', async () => {
        const rating = {id: recipe.id, rating: 1 };

        const response = await api
            .patch('/api/recipes')
            .send(rating)
            .expect(200)
            .expect('Content-Type', /application\/json/);
        
        expect(response.body.rating).toBe(rating.rating)
    })
    afterAll(() => {
        app.close()
    })
})