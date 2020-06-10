const express = require('express');
const recipeRoutes = require('./routes/recipesRoutes');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors('*'));
app.use('/api/recipes', recipeRoutes);


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});

module.exports = app;