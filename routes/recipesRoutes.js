const express = require('express');
const data = require('../recipes.json');

const router = express.Router();

router.get('/', (_req, res) => {
    res.status(200).json(data);
});

module.exports = router;