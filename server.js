const express = require('express');
const recipeRoutes = require('./routes/recipesRoutes');


const app = express();

app.use('/api/recipes', recipeRoutes);


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});

module.exports = app;