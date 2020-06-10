const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid')

const users = [];

const createUser = ({ email, password }) => {
    const hashPassword = bcrypt.hash(password, 10);

    const newUser = {
        id: uuidv4(),
        email,
        password: hashPassword
    }

    users.push(newUser)
    return newUser
};

const loginUser = async (user) => {
    const userForToken = {
        username: user.username,
        id: user._id
      }
    const token = await jwt.sign(userForToken, 'A_SECRET');
    return { email: user.email, token }
}

module.exports = {
    users,
    createUser,
    loginUser
}