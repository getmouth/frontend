const express = require('express');
const helper = require('../utils/helper')
const userServices = require('../services/userService');
const passport = require('passport');
require('../passport/passport');


const router = express.Router();

router.post('/', async (req, res) => {

    const { email, password } = req.body;

    if (!email || !helper.correctEmail(email)) {
        return res.status(400).json({ error: 'Invalid or missing email'});
    }

    if (!password) {
        return res.status(400).json({ error: 'Invalid or missing password' });
    }
    await userServices.createUser({ email, password });

    try {
            passport.authenticate('local', { session: false }, async (error, user) => {
                if(error || !user) {
                    return res.status(400).json({ error: 'Something is not right '});
                }

                const userToken = await helper.generateJWTToken(user.toJSON());
                const parsedUser = user.toJSON();

                res.status(200).json({ ...parsedUser, token: userToken });
            })(req, res);
       
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
});

module.exports = router;