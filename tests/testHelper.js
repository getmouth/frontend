const jwt = require('jsonwebtoken');
const data = require('../recipes.json');
const Recipe = require('../models/Recipe');
const User = require('../models/User');
const userServices = require('../services/userService');
const config = require('../utils/config');


const initialRecipe = async () => {

    const recipes = await Recipe.find({});
    return recipes[0];
};

const getAllRecipes = async () => {
    const recipes = await Recipe.find({});
    return recipes;
};

const initializeUser = async() => {
    const user = await userServices
        .createUser({
            email: 'yes@example.com',
            password: 'somethinghere'
        });

    return user;
};

const generateJWTToken = async (user) => {
    return jwt.sign(user, config.SECRET, {
      subject: user.email,
      expiresIn: '7d',
      algorithm: 'HS256'
    });
}


const clearUser = async () => {
    await User.deleteMany({});
};

module.exports = {
    initialRecipe,
    getAllRecipes,
    initializeUser,
    clearUser,
    generateJWTToken
}