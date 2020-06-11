const data = require('../recipes.json');


const initialRecipe = () => {
    const recipe = data[0];

    return recipe;
}

const getAllRecipes = () => {
    return data;
}

module.exports = {
    initialRecipe,
    getAllRecipes
}