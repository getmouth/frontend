const express = require('express');
const data = require('../recipes.json');

const router = express.Router();

router.get('/', (_req, res) => {
    res.status(200).json(data);
});

router.patch('/', (req, res) => {
    const { id, rating } = req.body;

    const recipe = data.find(recipe => recipe.id === id);

    if(!recipe) {
        return res.status(400).json({ error: 'requested action failed recipe not found' });
    }
    console.log(recipe, id)
    const updatedRecipe = {...recipe, rating: rating};

    res.status(200).json(updatedRecipe);
});

module.exports = router;