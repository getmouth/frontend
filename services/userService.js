const jwt = require('jsonwebtoken');
const helper = require('../utils/helper');
const User = require('../models/User');


const createUser = async ({ email, password }) => {
    await User.deleteMany({});
    
    const hashPassword = await helper.hashPassword(password);

    const newUser = new User({
        email,
        password: hashPassword
    });

    await newUser.save();

    return newUser;
};


module.exports = {
    createUser,
}