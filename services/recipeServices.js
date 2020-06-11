const Recipe = require('../models/Recipe');

const getAllRecipes = async () => {
    try {
        const recipes = await Recipe.find({});
        return recipes;
    } catch (error) {
        throw new Error(error.message)
    }
};

const rateRecipe =  async ({ id, rating }) => {
    const parsedRating = parseInt(rating);

    try {
        const recipe = await Recipe.findOne({ id: id });
        recipe.rating = parsedRating;
        await recipe.save();
    
        return recipe;

    } catch (error) {
        throw new Error('requested action failed recipe not found')
    }
}



module.exports = {
    getAllRecipes,
    rateRecipe
}