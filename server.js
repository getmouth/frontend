const express = require('express');
const recipeRoute = require('./routes/recipesRoute');
const loginRoute = require('./routes/loginRoute');
const middleware = require('./utils/middleware');
const mongoose = require('mongoose');
const logger = require('./utils/logger');
const config = require('./utils/config');
const cors = require('cors');
require('dotenv').config();


mongoose.connect(config.DB_URL, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => logger.info('MongoDB connected successfully'))
.catch(error => logger.error(error.message));
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