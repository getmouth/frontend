const express = require('express');
const helper = require('../utils/helper')
const userServices = require('../services/userService');

const router = express.Router();

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !helper.correctEmail(email)) {
        return res.status(400).json({ error: 'Invalid or missing email'});
    }

    if (!password) {
        return res.status(400).json({ error: 'Invalid or missing password' });
    }

    const user = userServices.createUser({ email, password });
    
   const userToken = await userServices.loginUser(user);

    res.status(200).json(userToken);
});

module.exports = router;