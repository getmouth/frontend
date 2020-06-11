require('dotenv').config();

let DB_URL = process.env.MONGODB_URI;

if (process.env.NODE_ENV === 'test') {
    DB_URL =  process.env.MONGODB_TEST_URI;
}

const SECRET = process.env.SECRET;

module.exports = {
    DB_URL,
    SECRET
}