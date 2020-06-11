const express = require('express');
const recipeServices = require('../services/recipeServices');
const passport = require('passport');
require('../passport/passport');

const router = express.Router();

router.get('/', async (_req, res) => {

    try {
        const recipes = await recipeServices.getAllRecipes();
        res.status(200).json(recipes)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.patch('/', async (req, res) => {
    const { id, rating } = req.body;

    try {
        const recipe = await recipeServices.rateRecipe({ id, rating });
        
        res.status(200).send(recipe.toJSON());
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }

    // const recipe = data.find(recipe => recipe.id === id);

    // if(!recipe) {
    //     return res.status(400).json({ error: 'requested action failed recipe not found' });
    // }
    // console.log(recipe, id)
    // const updatedRecipe = {...recipe, rating: rating};

    // res.status(200).json(updatedRecipe);
});

module.exports = router;