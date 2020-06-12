const jwt = require('jsonwebtoken');
const helper = require('../utils/helper');
const User = require('../models/User');




const createUser = async ({ email, password }) => {
    const user = await User.findOne({ email: email});
    if (user) {
        throw new Error('User exists already');
    }
    try {
        const hashPassword = await helper.hashPassword(password);

        const newUser = new User({
            email,
            password: hashPassword
        });
    
        await newUser.save();
    
        return newUser;
    } catch(error) {
        throw new Error(error.message)
    }
  
};


module.exports = {
    createUser
}