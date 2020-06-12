const express = require('express');
const compression = require('compression');
const recipeRoute = require('./routes/recipesRoute');
const loginRoute = require('./routes/loginRoute');
const userRoute = require('./routes/usersRoute');
const middleware = require('./utils/middleware');
const mongoose = require('mongoose');
const logger = require('./utils/logger');
const config = require('./utils/config');
const Recipe = require('./models/Recipe');
const data = require('./recipes.json');
const cors = require('cors');
require('dotenv').config();




mongoose.connect(config.DB_URL, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(async () => {
   //Added a DB to persist the user actios (rating/facorites)
  //This loads the recipes into the DB, not a good practice but a 
  // prrof of concept
    logger.info('MongoDB connected successfully');
    const recipes = await Recipe.find({});
    if (recipes.length === 0) {
        allRecipes = await Recipe.insertMany(data);
        await allRecipes.save();
    }
})
.catch(error => logger.error(error.message));


const app = express();
app.use(compression())
app.use(express.json());
app.use(cors());
app.use(middleware.requestLogger)
app.use(middleware.errorHandler)
app.use('/api/recipes', recipeRoute);
app.use('/api/login', loginRoute);
app.use('/api/users', userRoute);
app.use(middleware.unknownEndpoint());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});

module.exports = app;