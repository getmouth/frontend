const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    calories: String,
    carbos: String,
    description: String,
    difficulty: {
        type: Number,
        default: 0
    },
    fats: String,
    favorites: {
        type: Number,
        default: 0
    },
    headline: String,
    id: String,
    image: String,
    ingredients: [String],
    name: {
        type: String,
        unique: true
    },
    proteins: String,
    rating: {
        type: Number,
        default: 0
    },
    thumb: String,
    time: String
});

const Recipe = mongoose.model('Recipe', recipeSchema);

recipeSchema.set('toJSON', {
    transform: (document, returnedObj) => {
        delete returnedObj._id,
        delete returnedObj.__v
    }
});

module.exports = Recipe;

