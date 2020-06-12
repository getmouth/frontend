const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');
const tesHelper = require('./testHelper');


const api = supertest(app);

describe('Recipes', () => {
    let recipe;
    let recipes;
    let user;

    beforeEach(async () => {
        await tesHelper.clearUser();

        recipe = await tesHelper.initialRecipe();
        recipes = await tesHelper.getAllRecipes();
        user = await tesHelper.initializeUser();
    });

    test('returns a list of recipes', async () => {
        const response = await api.get('/api/recipes')
            .expect(200)
            .expect('Content-Type', /application\/json/);

        expect(response.body).toHaveLength(recipes.length);
    });

    test('updates recipe rating by id', async () => {
        const rating = { id: recipe.id, rating: 1 };

        const token = await tesHelper.generateJWTToken(user.toJSON());
    
        const response = await api
            .patch('/api/recipes')
            .set({Authorization: `Bearer ${token}`})
            .send(rating)
            .expect(200)
            .expect('Content-Type', /application\/json/);
        
        expect(response.body.rating).toBe(rating.rating)
    });

    test('fails when user is unauthorized 401', async () => {
        const rating = { id: recipe.id, rating: 3 };

        await api
            .patch('/api/recipes')
            .send(rating)
            .expect(401);
    });

    afterAll(async () => {
        await app.close();
        await mongoose.connection.close();
    });
})