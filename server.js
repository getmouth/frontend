const express = require('express');
const recipeRoute = require('./routes/recipesRoute');
const loginRoute = require('./routes/loginRoute');
const middleware = require('./utils/middleware');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors('*'));
app.use(middleware.requestLogger)
app.use('/api/recipes', recipeRoute);
app.use('/api/login', loginRoute);


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});

module.exports = app;