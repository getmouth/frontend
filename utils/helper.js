const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../utils/config');

const generateJWTToken = async (user) => { console.log(user)
    return jwt.sign(user, config.SECRET, {
      subject: user.email,
      expiresIn: '7d',
      algorithm: 'HS256'
    });
}

const hashPassword = (password) => {
    return bcrypt.hashSync(password, 10);
}

const validatePassword = (reqPassword, userPassword) => {
    return bcrypt.compareSync(reqPassword, userPassword);
}

const correctEmail = (value) => (
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,15}$/i.test(value)
  
);

module.exports = {
    correctEmail,
    generateJWTToken,
    hashPassword,
    validatePassword
}